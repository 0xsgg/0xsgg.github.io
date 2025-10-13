#!/usr/bin/env node

const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");
const fs = require("fs");
const path = require("path");
const http = require("http");
const url = require("url");

// 支持的语言列表
const LANGUAGES = [
  { code: 'zh', name: 'Chinese', filename: 'resume-zh.pdf' },
  { code: 'en', name: 'English', filename: 'resume-en.pdf' }
];

// 创建简单的HTTP服务器来提供静态文件
function createStaticServer(directory, port = 0) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const parsedUrl = url.parse(req.url);
      let pathname = parsedUrl.pathname;

      // 默认访问 index.html
      if (pathname === "/") {
        pathname = "/index.html";
      }

      // 规范化路径，防止目录遍历攻击
      const safePath = path.normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, '');
      const filePath = path.join(directory, safePath);

      // 确保文件在目录范围内
      if (!filePath.startsWith(directory)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
      }

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.log(`   [404] ${pathname}`);
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not found');
          return;
        }

        // 如果是目录，尝试读取 index.html
        if (stats.isDirectory()) {
          const indexPath = path.join(filePath, 'index.html');
          fs.readFile(indexPath, (err, data) => {
            if (err) {
              res.writeHead(404, { 'Content-Type': 'text/plain' });
              res.end('Not found');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
          });
          return;
        }

        // 读取文件
        fs.readFile(filePath, (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
          }

          // 设置正确的 Content-Type
          const ext = path.extname(filePath);
          const contentTypeMap = {
            ".html": "text/html; charset=utf-8",
            ".css": "text/css; charset=utf-8",
            ".js": "application/javascript; charset=utf-8",
            ".json": "application/json; charset=utf-8",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".gif": "image/gif",
            ".svg": "image/svg+xml",
            ".woff": "font/woff",
            ".woff2": "font/woff2",
            ".ttf": "font/ttf",
            ".eot": "application/vnd.ms-fontobject",
            ".txt": "text/plain; charset=utf-8",
          };
          const contentType = contentTypeMap[ext] || "application/octet-stream";

          res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache'
          });
          res.end(data);
        });
      });
    });

    server.listen(port, (err) => {
      if (err) {
        reject(err);
      } else {
        const actualPort = server.address().port;
        resolve({ server, port: actualPort });
      }
    });
  });
}

async function generatePDFForLanguage(browser, baseUrl, language, outDir) {
  console.log(`\n📄 Generating ${language.name} PDF...`);

  const page = await browser.newPage();

  try {
    // 禁用 JavaScript - 静态 HTML 已包含所有内容
    await page.setJavaScriptEnabled(false);

    // 设置页面尺寸
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2,
    });

    // 构建语言特定的URL
    const resumeUrl = `${baseUrl}/resume/${language.code}.html`;
    console.log(`   Loading: ${resumeUrl}`);

    // 导航到页面 - 只等待 DOM 加载
    const response = await page.goto(resumeUrl, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    if (!response || !response.ok()) {
      throw new Error(`Failed to load page: ${response ? response.status() : 'No response'}`);
    }

    console.log(`   ✓ Page loaded successfully`);

    // 等待主要内容渲染
    await page.waitForSelector('h1', { timeout: 5000 });
    console.log(`   ✓ Main content found`);

    // 等待CSS和字体加载
    console.log(`   ⏳ Waiting for styles and fonts...`);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 生成PDF配置
    const pdfOptions = {
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      margin: {
        top: "0.4in",
        bottom: "0.4in",
        left: "0.4in",
        right: "0.4in",
      },
    };

    console.log(`   📝 Generating PDF...`);
    const pdfBuffer = await page.pdf(pdfOptions);

    // 保存PDF文件
    const pdfPath = path.join(outDir, language.filename);
    fs.writeFileSync(pdfPath, pdfBuffer);

    console.log(`   ✅ Generated: ${pdfPath}`);
    console.log(
      `   📊 File size: ${(pdfBuffer.length / 1024 / 1024).toFixed(2)} MB`
    );

    return pdfPath;
  } catch (error) {
    console.error(`   ❌ Error generating ${language.name} PDF:`, error.message);
    throw error;
  } finally {
    // 确保页面总是被关闭
    await page.close();
    console.log(`   🔒 Page closed`);
  }
}

async function generatePDFs() {
  let browser = null;
  let staticServer = null;

  try {
    console.log("🚀 Starting multi-language PDF generation...");

    // 检查输出目录是否存在
    const outDir = path.join(process.cwd(), "out");
    if (!fs.existsSync(outDir)) {
      console.error(
        '❌ Output directory not found. Please run "npm run build:static" first.'
      );
      process.exit(1);
    }

    // 检查简历页面是否存在
    const resumeDir = path.join(outDir, "resume");
    if (!fs.existsSync(resumeDir)) {
      console.error("❌ Resume directory not found at:", resumeDir);
      process.exit(1);
    }

    // 验证所有语言版本的HTML文件是否存在
    console.log("🔍 Checking language files...");
    for (const lang of LANGUAGES) {
      const htmlPath = path.join(resumeDir, `${lang.code}.html`);
      if (!fs.existsSync(htmlPath)) {
        console.error(`❌ ${lang.name} resume not found at: ${htmlPath}`);
        console.log("Available files:", fs.readdirSync(resumeDir));
        process.exit(1);
      }
      console.log(`   ✓ Found ${lang.name} version: ${lang.code}.html`);
    }

    // 启动本地静态文件服务器
    console.log("\n🌐 Starting local server...");
    const { server, port } = await createStaticServer(outDir);
    staticServer = server;
    console.log(`📡 Local server running on port ${port}`);

    // 启动浏览器 - 在 macOS 开发环境中使用系统 Chrome
    console.log("\n🔧 Launching browser...");

    let executablePath;
    try {
      // 尝试使用系统 Chrome (macOS)
      const possiblePaths = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
      ];

      for (const chromePath of possiblePaths) {
        if (fs.existsSync(chromePath)) {
          executablePath = chromePath;
          break;
        }
      }

      // 如果没有找到系统 Chrome，使用 @sparticuz/chromium
      if (!executablePath) {
        executablePath = await chromium.executablePath();
      }
    } catch (error) {
      console.log("Using @sparticuz/chromium...");
      executablePath = await chromium.executablePath();
    }

    browser = await puppeteer.launch({
      args:
        process.platform === "darwin"
          ? [
              "--no-sandbox",
              "--disable-setuid-sandbox",
              "--disable-dev-shm-usage",
              "--disable-accelerated-2d-canvas",
              "--no-first-run",
              "--no-zygote",
              "--disable-gpu",
            ]
          : chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    });

    const baseUrl = `http://localhost:${port}`;
    const generatedPDFs = [];

    // 为每种语言生成PDF
    for (const language of LANGUAGES) {
      const pdfPath = await generatePDFForLanguage(browser, baseUrl, language, outDir);
      generatedPDFs.push(pdfPath);
    }

    // 创建默认的 resume.pdf（指向中文版）
    const defaultPdfPath = path.join(outDir, "resume.pdf");
    const zhPdfPath = path.join(outDir, "resume-zh.pdf");
    fs.copyFileSync(zhPdfPath, defaultPdfPath);
    console.log(`\n📋 Created default resume.pdf (copy of Chinese version)`);

    console.log("\n✅ All PDFs generated successfully!");
    console.log("📦 Generated files:");
    generatedPDFs.forEach(pdf => {
      console.log(`   - ${path.basename(pdf)}`);
    });
    console.log(`   - resume.pdf (default, points to Chinese version)`);

  } catch (error) {
    console.error("\n❌ Error generating PDF:", error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
    if (staticServer) {
      staticServer.close();
      console.log("\n🔒 Local server stopped");
    }
  }
}

// 运行脚本
generatePDFs();
