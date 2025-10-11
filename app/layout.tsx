import type { Metadata } from 'next';
import { Nunito_Sans, Noto_Sans_SC } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { HeroUIProvider } from '@/components/HeroUIProvider';

const nunito_sans = Nunito_Sans({
    subsets: ['latin'],
    variable: '--font-nunito-sans',
    display: 'swap'
})
const notoSansSC = Noto_Sans_SC({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-noto-sans-sc',
    display: 'swap'
});

export const metadata: Metadata = {
    title: `Sggmico`,
    description: 'A Softeware Engineer',
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
            <body className={`${nunito_sans.variable} ${notoSansSC.variable} font-sans text-md`}>
                <HeroUIProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </HeroUIProvider>
            </body>
        </html>
    );
}