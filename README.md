

## Todo-List
- [ ] 添加导航栏：创建一个导航组件，方便访问者浏览您的网站
- [ ] 添加博客功能：使用 Next.js 的动态路由功能创建博客页面
- [ ] 添加项目展示：展示您的项目和作品
- [ ] 添加联系表单：让访问者能够联系您
- [x] 添加暗黑模式：使用 Tailwind CSS 的暗黑模式功能


## 组件库：HeroUI
[HeroUI（原为NextUI）](https://www.heroui.com/docs/guide/introduction)一个美观的 UI 库，专为 Next.js 设计
**特点：**
- 专为 Next.js 优化
- 美观的设计
- 暗黑模式支持
- 可访问性良好
- 响应式设计

## 动画库：Framer Motion
[Framer Motion](https://github.com/motiondivision/motion#readme) 是一个功能强大的 React 动画库，它提供了一种简单而灵活的方式来为 React 组件添加动画效果

## 主题切换
[next-themes](https://github.com/pacocoursey/next-themes#readme) 实现主题切换， next-themes 是一个用于在 Next.js 应用程序中实现主题切换的库。它提供了一种简单而灵活的方式来为应用程序添加主题切换功能。
## 国际化
- [YouTube：Next.js App Router with i18next](https://www.youtube.com/watch?v=J8tnD2BWY28)
    - [[code]](https://i18nexus.com/tutorials/nextjs/react-i18next)
    - [翻译文本托管工具：i18nexus](https://app.i18nexus.com/)

### [react-i18next](https://github.com/i18next/react-i18next)

### 客户端方案（国际化数据）—— 支持next静态导出模式
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

实现后，您的网站将支持中英文切换，并且URL会反映当前语言（如 /zh/ 或 /en/ ）。用户可以通过语言切换按钮在中英文之间切换。



## 参考站点
- https://zhenxuan00.github.io/