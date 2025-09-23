
# Personal Portfolio Website

一个基于 Next.js 15 构建的个人作品集网站，支持静态导出到 GitHub Pages。

## ✨ Key Features

### 🎯 响应式布局设计
- **CSS Grid 布局**：使用现代 CSS Grid 实现响应式布局
- **移动端优先**：采用 mobile-first 设计理念
- **断点管理**：桌面端 12 列网格，移动端单列堆叠
- **容器约束**：最大宽度限制，合理间距设计

### 📱 现代化 UI 组件
- **HeroUI 组件库**：美观、可访问的 UI 组件
- **Lucide React 图标**：一致性的图标设计
- **主题切换**：支持亮色/暗色主题自动切换
- **交互效果**：悬停效果和流畅过渡动画

### 🎨 设计系统
- **色彩编码**：项目标签使用不同颜色分类
- **字体系统**：使用 Google Fonts (Open Sans)
- **间距规范**：统一的间距和排版规则
- **卡片布局**：信息模块化展示

### ⚡ 性能与 SEO
- **静态导出**：完全静态化，适合 GitHub Pages
- **语义化 HTML**：良好的 SEO 结构
- **优化字体加载**：Web 字体优化
- **无运行时依赖**：纯静态资源

### 🏗️ 架构特性
- **Next.js 15**：最新版本框架支持
- **TypeScript**：类型安全开发
- **Tailwind CSS**：原子化 CSS 框架
- **组件化开发**：可复用组件设计

## 📋 Project Roadmap

### ✅ 已完成功能
- [x] **响应式首页布局**：基于 CSS Grid 的现代化布局
- [x] **主题切换系统**：亮色/暗色主题支持
- [x] **HeroUI 集成**：现代化 UI 组件库
- [x] **静态导出配置**：GitHub Pages 部署支持
- [x] **字体系统**：Google Fonts 集成

### 🚧 开发中功能
- [ ] **导航栏优化**：响应式导航组件完善
- [ ] **页面路由**：博客、项目、演讲页面

### 📅 计划功能
- [ ] **博客系统**：使用 Next.js 动态路由创建博客页面
- [ ] **项目展示**：作品集和项目详情页面
- [ ] **联系表单**：访客联系功能
- [ ] **国际化支持**：中英文切换 (静态导出兼容)
- [ ] **SEO 优化**：meta 标签和结构化数据
- [ ] **性能监控**：Web Vitals 集成
- [ ] **图片优化**：静态图片处理和优化

### 🎯 长期目标
- [ ] **CMS 集成**：内容管理系统集成
- [ ] **搜索功能**：站内搜索实现
- [ ] **评论系统**：文章评论功能
- [ ] **RSS 订阅**：博客 RSS 支持
- [ ] **PWA 支持**：渐进式 Web 应用
- [ ] **微动画**：Framer Motion 动画效果
- [ ] **暗色模式增强**：主题自定义选项

---

## 🛠️ 技术栈详情

### 🎨 HeroUI 组件库
[HeroUI（原为NextUI）](https://www.heroui.com/docs/guide/introduction) - 专为 Next.js 设计的现代化 UI 库

**核心特性：**
- 🚀 专为 Next.js 优化
- 🎨 美观的设计系统
- 🌓 原生暗黑模式支持
- ♿ 优秀的可访问性
- 📱 完全响应式设计
- 🎯 TypeScript 支持

### 🎬 动画系统：Framer Motion
[Framer Motion](https://github.com/motiondivision/motion#readme) - 强大的 React 动画库

**功能特点：**
- 🌊 流畅的动画效果
- 🎯 声明式 API 设计
- 📱 手势交互支持
- ⚡ 性能优化
- 🔄 页面转场动画

### 🌗 主题切换：next-themes
[next-themes](https://github.com/pacocoursey/next-themes#readme) - Next.js 主题管理解决方案

**核心功能：**
- 🌓 自动系统主题检测
- 💾 用户偏好持久化
- ⚡ 零闪烁切换
- 🎨 多主题支持
- 📱 SSR 兼容

---

## 🚀 快速开始

### 环境要求
- Node.js 18+
- pnpm 10.7.0+

### 开发命令
```bash
# 安装依赖
pnpm install

# 启动开发服务器 (支持 Turbopack)
pnpm dev

# 构建生产版本
pnpm build

# 代码检查
pnpm lint

# 静态导出
pnpm export
```

### 部署到 GitHub Pages
1. 构建项目：`pnpm build`
2. 推送到 `gh-pages` 分支
3. 在 GitHub 仓库设置中启用 Pages

---

## 🌍 国际化实现方案

由于项目采用静态导出模式，国际化需要使用客户端方案。详细实现文档请参考以下资源：

- [Next.js App Router with i18next 教程](https://www.youtube.com/watch?v=J8tnD2BWY28)
- [实现代码示例](https://i18nexus.com/tutorials/nextjs/react-i18next)
- [翻译文本托管工具：i18nexus](https://app.i18nexus.com/)

### 静态导出兼容的客户端方案
在静态导出模式下实现国际化，我们需要放弃服务器端的国际化路由，转而使用客户端方法：

**方案一：使用子路径结构和客户端路由**
1. 创建语言特定的子目录，为每种语言创建单独的目录结构：
```plaintext
app/
  zh/
    page.tsx
    about/
      page.tsx
  en/
    page.tsx
    about/
      page.tsx
```
2. 使用客户端语言切换
```tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageSwitch() {
    const router = useRouter();
    const [locale, setLocale] = useState('zh');
    
    // 在客户端初始化时检测当前语言
    useEffect(() => {
        const path = window.location.pathname;
        if (path.startsWith('/en/')) {
            setLocale('en');
        } else {
            setLocale('zh');
        }
    }, []);

    const toggleLocale = () => {
        const newLocale = locale === 'zh' ? 'en' : 'zh';
        setLocale(newLocale);
        
        // 获取当前路径
        const path = window.location.pathname;
        let newPath;
        
        // 处理路径转换
        if (path === '/' || path === '/zh/' || path === '/en/') {
            // 首页
            newPath = newLocale === 'zh' ? '/' : '/en/';
        } else {
            // 其他页面
            const pathWithoutLocale = path.replace(/^\/(zh|en)\//, '/');
            newPath = `/${newLocale}${pathWithoutLocale}`;
        }
        
        // 导航到新路径
        window.location.href = newPath;
    };

    return (
        <button
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 ml-2"
            onClick={toggleLocale}
        >
            {locale === 'zh' ? '🇺🇸' : '🇨🇳'}
        </button>
    );
}
```
**方案二：使用 [next-i18next](https://github.com/i18next/next-i18next) 的静态方法** 

1. 安装 next-i18next 依赖
```bash
pnpm add next-i18next react-i18next i18next
```
2. 创建语言文件（中文和英文）
```plaintext
public/
  locales/
    zh/
      common.json
    en/
      common.json
```

**方案三：使用 URL 参数而非路径**
如果您不需要 URL 中显示语言代码，可以使用 URL 参数：
```tsx
'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageSwitch() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [locale, setLocale] = useState('zh');
   useEffect(() => {
        const lang = searchParams.get('lang') || localStorage.getItem('lang') || 'zh';
        setLocale(lang);
        localStorage.setItem('lang', lang);
    }, [searchParams]);

    const toggleLocale = () => {
        const newLocale = locale === 'zh' ? 'en' : 'zh';
        setLocale(newLocale);
        localStorage.setItem('lang', newLocale);
        
        // 构建新的 URL
        const params = new URLSearchParams(window.location.search);
        params.set('lang', newLocale);
        
        // 导航到新 URL
        window.location.search = params.toString();
    };

    return (
        <button
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 ml-2"
            onClick={toggleLocale}
        >
            {locale === 'zh' ? '🇺🇸' : '🇨🇳'}
        </button>
    );
}
```


这些方法都有各自的优缺点，您可以根据项目需求选择最适合的方案。方案1保持了 URL 结构的清晰性，方案2提供了更完整的翻译功能，方案3则更简单但不改变 URL 路径。

### 服务端方案（国际化路由）—— [不支持next静态导出模式](https://nextjs.org/docs/pages/guides/static-exports)
这是一个基于Next.js的个人网站项目。要实现国际化，我推荐使用Next.js官方支持的国际化解决方案 [next-intl](https://next-intl.dev/) 。下面是实现步骤：
1. 安装 next-intl 依赖
2. 创建语言文件（中文和英文）
3. 配置 Next.js 国际化设置
4. 创建语言切换组件
5. 调整项目结构以支持国际化路由
6. 创建国际化提供者组件
7. 修改布局文件
8. 修改导航栏和主页内容以使用翻译

实现后，网站将支持中英文切换，URL会反映当前语言（如 /zh/ 或 /en/）。

---

## 📚 参考资源

- [Anthony Fu 个人网站](https://antfu.me) - 设计灵感来源
- [GitHub Pages 部署指南](https://docs.github.com/en/pages)
- [Next.js 静态导出文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

---

<div align="center">
  <p>🚀 Built with Next.js 15 | 🎨 Styled with Tailwind CSS | 💎 Powered by HeroUI</p>
  <p>Made with ❤️ for the open source community</p>
</div>
