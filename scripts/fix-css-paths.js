#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function fixCssPathsInHtml(filePath) {
  console.log(`🔧 Fixing CSS paths in: ${filePath}`);

  let content = fs.readFileSync(filePath, "utf8");

  // 将绝对路径的CSS引用改为相对路径
  // 从 href="/_next/static/css/..." 改为 href="../_next/static/css/..."
  content = content.replace(
    /href="\/_next\/static\/(css|media)\/([^"]+)"/g,
    'href="./_next/static/$1/$2"'
  );

  // 修复 script src 路径
  content = content.replace(
    /src="\/_next\/static\/chunks\/([^"]+)"/g,
    'src="./_next/static/chunks/$1"'
  );

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ Fixed CSS paths in: ${filePath}`);
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dirPath, file.name);

    if (file.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.name === "resume.html") {
      fixCssPathsInHtml(fullPath);
    }
  }
}

// 处理输出目录
const outDir = path.join(process.cwd(), "out");
console.log("🚀 Starting CSS path fixing...");
processDirectory(outDir);
console.log("✅ CSS path fixing completed!");
