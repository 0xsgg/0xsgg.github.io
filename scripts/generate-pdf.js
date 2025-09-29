#!/usr/bin/env node

const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");
const fs = require("fs");
const path = require("path");
const http = require("http");
const url = require("url");

// 创建简单的HTTP服务器来提供静态文件
function createStaticServer(directory, port = 0) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const parsedUrl = url.parse(req.url);
      let pathname = parsedUrl.pathname;

      // 默认访问 me.html
      if (pathname === "/") {
        pathname = "/me.html";
      }

      const filePath = path.join(directory, pathname);

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }

        // 设置正确的 Content-Type
        const ext = path.extname(filePath);
        const contentType =
          {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "application/javascript",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".woff2": "font/woff2",
          }[ext] || "text/plain";

        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
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

async function generatePDF() {
  let browser = null;
  let staticServer = null;

  try {
    console.log("🚀 Starting PDF generation...");

    // 检查输出目录是否存在
    const outDir = path.join(process.cwd(), "out");
    if (!fs.existsSync(outDir)) {
      console.error(
        '❌ Output directory not found. Please run "npm run build" first.'
      );
      process.exit(1);
    }

    // 启动本地静态文件服务器
    console.log("🌐 Starting local server...");
    const { server, port } = await createStaticServer(outDir);
    staticServer = server;
    console.log(`📡 Local server running on port ${port}`);

    // 启动浏览器 - 在 macOS 开发环境中使用系统 Chrome
    console.log("🔧 Launching browser...");

    let executablePath;
    try {
      // 尝试使用系统 Chrome (macOS)
      const fs = require("fs");
      const possiblePaths = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
      ];

      for (const path of possiblePaths) {
        if (fs.existsSync(path)) {
          executablePath = path;
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

    const page = await browser.newPage();

    // 设置页面尺寸
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2,
    });

    // 检查简历页面是否存在 - Next.js 13+ 会将页面直接输出为 me.html
    const resumeFilePath = path.join(outDir, "resume.html");
    if (!fs.existsSync(resumeFilePath)) {
      console.error("❌ Resume page not found at:", resumeFilePath);
      console.log("Available files:", fs.readdirSync(outDir));
      process.exit(1);
    }

    // 使用本地HTTP服务器URL而不是file://协议
    const resumeUrl = `http://localhost:${port}/resume.html`;
    // const resumeUrl = `file://${resumeFilePath}`;
    console.log("📄 Loading resume page:", resumeUrl);

    await page.goto(resumeUrl, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    // 等待内容加载完成
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 注入CSS样式优化打印效果
    // await page.addStyleTag({
    //   content: `
    //     @media print {
    //       body {
    //         -webkit-print-color-adjust: exact !important;
    //         color-adjust: exact !important;
    //         font-size: 10pt !important;
    //       }

    //       .no-print {
    //         display: none !important;
    //       }

    //       * {
    //         box-shadow: none !important;
    //       }
    //     }
    //   `,
    // });

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

    console.log("📝 Generating PDF...");
    const pdfBuffer = await page.pdf(pdfOptions);

    // 保存PDF文件
    const pdfPath = path.join(outDir, "resume.pdf");
    fs.writeFileSync(pdfPath, pdfBuffer);

    console.log("✅ PDF generated successfully:", pdfPath);
    console.log(
      "📊 File size:",
      (pdfBuffer.length / 1024 / 1024).toFixed(2),
      "MB"
    );
  } catch (error) {
    console.error("❌ Error generating PDF:", error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
    if (staticServer) {
      staticServer.close();
      console.log("🔒 Local server stopped");
    }
  }
}

// 运行脚本
generatePDF();
