
'use client';

import { Link, Chip } from '@heroui/react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import AnimatedLogo from '@/components/AnimatedLogo';
import AnimatedBackground from '@/components/AnimatedBackground';
import { getCommonIcon, getSocialIcon } from '@/lib/icons';
import { getProfileUrl } from '@/lib/url';

import { basics, navList } from "@/config/data/home"

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="h-screen bg-background flex flex-col overflow-auto relative">
      {/* 动画背景 - 仅在主页显示 */}
      <AnimatedBackground />

      {/* Header/Navigation */}
      {/* <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-sm supports-[backdrop-filter]:bg-background/20"> */}
      <header className="sticky top-0 z-50 w-full">
        <div className="container flex w-full max-w-full h-14 items-center justify-end md:justify-between px-4 md:px-8">
          <div className="hidden md:flex items-center space-x-2">
            <AnimatedLogo />
          </div>
          <div className="flex items-center justify-end space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              {navList.map((nav, index) => {
                return (<Link key={index} href={nav.path} isExternal={nav.blank} className="text-text-primary opacity-60 hover:opacity-100 dark:opacity-80 dark:hover:opacity-100 transition-opacity">{nav.name}</Link>)
              })}
            </nav>
            <div className="flex items-center space-x-3">
              {basics.profiles
                .filter(profile => ['github'].includes(profile.network.toLowerCase()))
                .map((profile, index) => {
                  return (
                    <Link key={index} href={profile.url} isExternal className="text-text-primary opacity-60 hover:opacity-100 dark:opacity-80 dark:hover:opacity-100 transition-opacity cursor-pointer">
                      {getSocialIcon(profile.network)}
                    </Link>
                  )
                })}
              {<button
                className="w-4 h-4 rounded-lg hover:bg-muted transition-colors opacity-60 hover:opacity-100 dark:opacity-80 dark:hover:opacity-100"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {mounted ? (
                  theme === 'dark' ? (
                    getCommonIcon('sun')
                  ) : (
                    getCommonIcon('moon')
                  )
                ) : null}
              </button>}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="flex-1 container mx-auto px-4 md:px-8 py-8 leading-relaxed tracking-wide">
        <h1 className={`text-2xl md:text-3xl font-medium mb-8 max-w-2xl mx-auto `}>
          Sgg Mico
        </h1>
        {mounted && (
          <div className="space-y-4 max-w-2xl mx-auto text-text-primary opacity-90 text-sm text-muted-foreground slide-enter-content">
            {/* Hero Section */}
            <section className="h-6 flex items-center justify-center">
              {/* Desktop version */}
              <img
                src="https://readme-typing-svg.demolab.com/?font=Fira+Code&weight=600&size=21&duration=4200&pause=100&color=7E55F6&vCenter=true&width=1000&lines=%F0%9F%91%8B+Hi%EF%BC%8C%E6%88%91%E6%98%AF+sggmico%EF%BC%8C%E4%B8%80%E5%90%8D%E5%AF%B9%E6%8A%80%E6%9C%AF%E5%85%85%E6%BB%A1%E5%85%B4%E8%B6%A3%E7%9A%84%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88;%F0%9F%9B%A0%EF%B8%8F+%E6%93%85%E9%95%BFTS+%2F+Node.js%EF%BC%8CGithub%E7%88%B1%E5%A5%BD%E8%80%85;%F0%9F%9A%80+%E5%AF%B9Web3%E3%80%81AI%E6%8F%90%E6%95%88%E3%80%81%E8%87%AA%E5%8A%A8%E5%8C%96%E3%80%81%E4%BA%91%E6%9C%8D%E5%8A%A1%E7%AD%89%E6%8A%80%E6%9C%AF%E6%84%9F%E5%85%B4%E8%B6%A3;%F0%9F%93%9A+%E6%AD%A3%E5%9C%A8%E5%90%91%E5%85%A8%E6%A0%88Web3%E6%96%B9%E5%90%91%E6%B7%B1%E8%80%95%EF%BC%8C%E6%AC%A2%E8%BF%8E%E4%B8%80%E8%B5%B7%E4%BA%A4%E6%B5%81%E5%AD%A6%E4%B9%A0~"
                alt="Typing SVG"
                className="hidden md:block"
              />
              {/* Mobile version */}
              <img
                src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=36&duration=4200&pause=100&color=7E55F6&vCenter=true&width=1000&lines=%F0%9F%91%8B+Hi%EF%BC%8C%E6%88%91%E6%98%AF+sggmico%EF%BC%8C%E4%B8%80%E5%90%8D%E5%AF%B9%E6%8A%80%E6%9C%AF%E5%85%85%E6%BB%A1%E5%85%B4%E8%B6%A3%E7%9A%84%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88;%F0%9F%9B%A0%EF%B8%8F+%E6%93%85%E9%95%BFTS+%2F+Node.js%EF%BC%8CGithub%E7%88%B1%E5%A5%BD%E8%80%85;%F0%9F%9A%80+%E5%AF%B9%E4%BA%91%E6%9C%8D%E5%8A%A1%E3%80%81%E8%87%AA%E5%8A%A8%E5%8C%96%E3%80%81Web3%E7%AD%89%E6%8A%80%E6%9C%AF%E6%84%9F%E5%85%B4%E8%B6%A3;%F0%9F%93%9A+%E6%AD%A3%E5%9C%A8%E5%90%91%E5%85%A8%E6%A0%88Web3%E6%96%B9%E5%90%91%E6%B7%B1%E8%80%95%EF%BC%8C%E6%AC%A2%E8%BF%8E%E4%B8%80%E8%B5%B7%E4%BA%A4%E6%B5%81%E5%AD%A6%E4%B9%A0~"
                alt="Typing SVG"
                className="block md:hidden"
              />
            </section>
            {/* Work Information */}
            <section className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-sm text-muted-foreground font-medium">Worked at</span>
              <Chip
                variant="flat"
                size="sm"
                style={{
                  backgroundColor: 'rgb(255, 73, 6, 0.15)',
                  color: '#FF4906',
                }}
                classNames={{
                  content: 'font-medium'
                }}
              >
                <span className="inline-flex items-center gap-0.5 mt-0.5">
                  <span>{getSocialIcon('kuaishou', 'w-3 h-3')} </span>
                  <span className="translate-y-[0.5px]">快手</span>
                </span>
              </Chip>
              <span className="text-muted-foreground">/</span>
              <Chip
                variant="flat"
                size="sm"
                style={{
                  backgroundColor: 'rgb(74, 144, 226, 0.15)',
                  color: '#4A90E2',
                }}
                classNames={{
                  content: 'font-medium'
                }}
              >
                {getSocialIcon('eqxiu', 'h-2.5 translate-y-[-0.5px]')}
              </Chip>
            </section>

            <section className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium">Creator of</span>
              <Chip variant="flat" size="sm" color="secondary" className="font-bold">AgentFlow</Chip>
              <Chip variant="flat" size="sm" color="primary" className="font-bold">TradingKit</Chip>
              <Chip variant="flat" size="sm" color="danger" className="font-bold">FundQuest</Chip>
              <Chip variant="flat" size="sm" color="warning" className="font-bold">Hedgehog</Chip>
            </section>

            {/* <section className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium"><del>Core team of</del></span>
            </section> */}

            <section className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium">Maintained</span>
              <Chip variant="flat" size="sm" color="success" className="font-bold">KS-Flow</Chip>
              <Chip variant="flat" size="sm" color="secondary" className="font-bold">KS-CNY2024</Chip>
              <Chip variant="flat" size="sm" color="success" className="font-bold">EQX-H2Editor</Chip>
              <Chip variant="flat" size="sm" className="font-bold">EQX-ADS</Chip>
            </section>

            {/* About Section */}
            <section className="pt-4 pb-2">
              一名<strong className="font-semibold text-text-primary">十多年经验</strong>的前端工程师，在<strong className="font-semibold text-text-primary">大型互联网公司</strong>参与过<strong className="font-semibold text-text-primary">复杂系统</strong>的搭建，长期专注于 <strong className="font-semibold text-text-primary">Web 架构、工程体系和性能优化</strong>。
              <Link href="/projects" className="text-text-primary hover:text-text-primary-hover underline underline-offset-4 decoration-dashed decoration-1 inline-flex items-center gap-1 mx-1 text-sm">
                在此
              </Link>可查看到我的全部项目列表。
            </section>
            <section className="pb-2">
              习惯用<strong className="font-semibold text-text-primary">清晰的代码</strong>和<strong className="font-semibold text-text-primary">稳定的设计</strong>来做东西，不仅关注功能实现，更在意系统以后好不好<strong className="font-semibold text-text-primary">扩展</strong>、团队能不能<strong className="font-semibold text-text-primary">高效协作</strong>。日常工作中，会通过<strong className="font-semibold text-text-primary">自动化测试、Code Review和 CI/CD</strong>来平衡<strong className="font-semibold text-text-primary">效率和质量</strong>，也乐于把<strong className="font-semibold text-text-primary">复杂问题拆解成可执行的方案</strong>，推动项目<strong className="font-semibold text-text-primary">持续迭代</strong>。
            </section>

            <section className="pb-2">
              最近<strong className="font-semibold text-text-primary">两年</strong>投入在 <strong className="font-semibold text-text-primary">Web3</strong> 领域，对<strong className="font-semibold text-text-primary">区块链</strong>和 <strong className="font-semibold text-text-primary">Ethereum 技术栈</strong>有比较深的理解，能熟练使用 <strong className="font-semibold text-text-primary">Solidity</strong> 开发<strong className="font-semibold text-text-primary">智能合约</strong>，覆盖从设计、开发到部署维护的<strong className="font-semibold text-text-primary">全流程</strong>，也实践过 <strong className="font-semibold text-text-primary">NFT 项目的完整落地</strong>。
            </section>

            <section className="pb-2">
              同时，也一直在尝试把 <strong className="font-semibold text-text-primary">AI</strong> 用在日常开发和产品里，比如用<strong className="font-semibold text-text-primary">大模型辅助编码</strong>、搭建<strong className="font-semibold text-text-primary">自动化工作流</strong>等等——关心的不是追热点，而是 AI 能不能真正帮我们<strong className="font-semibold text-text-primary">提效、省成本</strong>。
            </section>

            <section className="pb-2">
              喜欢做<strong className="font-semibold text-text-primary">有设计感、对用户友好</strong>的产品，平时也常参与<strong className="font-semibold text-text-primary">开源</strong>、关注<strong className="font-semibold text-text-primary">新技术</strong>，始终对技术保持一份<strong className="font-semibold text-text-primary">好奇和敬畏</strong>。
            </section>

            <section className="pb-2">
              如果你在找一位<strong className="font-semibold text-text-primary">理解业务、重视工程、也愿意长期合作</strong>的伙伴，欢迎<strong className="font-semibold text-text-primary">随时聊聊</strong> 👋
            </section>

            <section className="pb-2">
              想了解更多，欢迎到 <Link href="https://resume.nosweetsm.cn/" isExternal className="text-text-primary hover:text-text-primary-hover underline underline-offset-4 decoration-dashed decoration-1 inline-flex items-center gap-1 mx-1 text-sm"> 中文 </Link> / <Link href="https://resume.nosweetsm.cn/en" isExternal className="text-text-primary hover:text-text-primary-hover underline underline-offset-4 decoration-dashed decoration-1 inline-flex items-center gap-1 mx-1 text-sm">EN</Link> 简历页面查看。
            </section>


            {/* Find me on Card */}
            <section className="grid gap-3 pt-4">
              <h3 className="text-md font-semibold">Find me on</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 text-text-primary">
                {
                  basics.profiles.filter((profile) => profile.network.toLowerCase() !== 'portfolio').map((profile, index) => {
                    const Icon = getSocialIcon(profile.network);
                    return Icon ? (
                      <Link
                        isExternal={!['github'].includes(profile.network.toLocaleLowerCase())}
                        key={index}
                        href={getProfileUrl(profile)}
                        className="flex items-center gap-1 rounded-lg hover:bg-muted text-text-primary opacity-80 hover:opacity-100 transition-colors"
                      >
                        {Icon}
                        <span className="text-sm underline underline-offset-4 decoration-dashed decoration-1">
                          {profile.network}
                        </span>
                      </Link>
                    ) : ''
                  })
                }
              </div>
            </section>

            {/* Language Links */}
            <section className="flex flex-wrap gap-2 text-md pt-4">
              Or mail me at <Link href={`mailto:${basics.email}`} className="text-text-primary text-md opacity-60 dark:opacity-80 hover:opacity-80 dark:hover:opacity-100 transition-opacity">{basics.email}</Link>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
