import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { HeroUIProvider } from '@/components/HeroUIProvider';

const open_sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: `Sgg Mico`,
    description: 'A softeware developer',
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
            <body className={open_sans.className}>
                <HeroUIProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </HeroUIProvider>
            </body>
        </html>
    );
}