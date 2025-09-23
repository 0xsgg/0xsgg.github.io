import type { Metadata } from 'next';
import { Open_Sans, Dancing_Script, Kalam, Caveat, Patrick_Hand } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { HeroUIProvider } from '@/components/HeroUIProvider';

const open_sans = Open_Sans({ subsets: ['latin'] });
const dancing_script = Dancing_Script({ subsets: ['latin'] });
const kalam = Kalam({ subsets: ['latin'], weight: ['300', '400', '700'] });
const caveat = Caveat({ subsets: ['latin'] });
const patrick_hand = Patrick_Hand({ subsets: ['latin'], weight: ['400'] });

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
            {/* <body className={`${open_sans.className} ${dancing_script.className} ${kalam.className} ${caveat.className} ${patrick_hand.className}`}> */}
            <body className={`${open_sans.className}`}>
                <HeroUIProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </HeroUIProvider>
            </body>
        </html>
    );
}