import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // 如果您的网站不是部署在域名根目录，而是在子目录下，请取消下面这行的注释并修改
  // basePath: '/repo-name',
  
  // 禁用图片优化，因为 GitHub Pages 不支持服务端组件
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
