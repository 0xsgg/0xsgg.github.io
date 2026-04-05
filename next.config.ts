import type { NextConfig } from "next";

const nextConfig: NextConfig = {
// 迁移到 Cloudflare 部署的关键配置
  output: 'standalone',  // 独立产物/应用
  /* config options here */
  // output: "export",
  // 配置基础路径，这里使用仓库名称作为基础路径
  //basePath: "/",

  // 禁用图片优化，因为 GitHub Pages 不支持服务端组件
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
