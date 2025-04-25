import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import {ThemeProvider} from '@/app/components/ThemeProvider';
import {HeroUIProvider} from '@/app/components/HeroUIProvider';
import Navbar from '@/app/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Sggmico's HomePage`,
  description: '个人简介、技术栈、项目展示、博客、简历',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 添加了 suppressHydrationWarning 属性，这是为了避免 Next.js 在客户端和服务器端渲染不匹配时发出警告
    // <html lang="zh" suppressHydrationWarning className='dark'>
    <html lang="zh" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
            <HeroUIProvider>
              <Navbar />
              {children}
            </HeroUIProvider>
        </ThemeProvider>
        
      </body>
    </html>
  );
}