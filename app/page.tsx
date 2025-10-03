
'use client';

import { Link, Chip } from '@heroui/react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Dancing_Script } from 'next/font/google';
import AnimatedLogo from '@/components/AnimatedLogo';
import { getCommonIcon, getSocialIcon } from '@/lib/icons';

const dancing_script = Dancing_Script({ subsets: ['latin'] });

import { basics, navList } from "@/config/data/resume-en.json"

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                .filter(profile => ['github', 'twitter', 'youtube'].includes(profile.network.toLowerCase()))
                .map((profile, index) => {
                  return (
                    <Link key={index} href={profile.url} isExternal className="text-text-primary opacity-60 hover:opacity-100 dark:opacity-80 dark:hover:opacity-100 transition-opacity cursor-pointer">
                      {getSocialIcon(profile.network)}
                    </Link>
                  )
                })}
              {mounted && (
                <button
                  className="rounded-lg hover:bg-muted transition-colors opacity-60 hover:opacity-100 dark:opacity-80 dark:hover:opacity-100"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? (
                    getCommonIcon('sun')
                  ) : (
                    getCommonIcon('moon')
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="space-y-8 max-w-2xl mx-auto">
          {/* Hero Section */}
          <section className="space-y-6">
            <div className="space-y-6">
              <h1 className={`${dancing_script.className} text-2xl md:text-3xl font-thin tracking-tighter`}>
                Sgg Mico
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Hey! I&apos;m Sgg Mico, a fanatical open sourceror and design engineer.
              </p>
            </div>

            {/* Work Information */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Working at</span>
                <Chip variant="flat" size="sm">NuxtLabs</Chip>
                <span className="text-muted-foreground">/</span>
                <Chip variant="flat" size="sm">Vercel</Chip>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Creator of</span>
                <Chip variant="flat" size="sm" color="warning">Vitest</Chip>
                <Chip variant="flat" size="sm" color="primary">Slidev</Chip>
                <Chip variant="flat" size="sm" color="success">VueUse</Chip>
                <Chip variant="flat" size="sm" color="secondary">UnoCSS</Chip>
                <Chip variant="flat" size="sm" color="default">Elk</Chip>
                <Chip variant="flat" size="sm" color="default">Type Challenges</Chip>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Core team of</span>
                <Chip variant="flat" size="sm" color="success">Vue</Chip>
                <Chip variant="flat" size="sm" color="primary">Nuxt</Chip>
                <Chip variant="flat" size="sm" color="warning">Vite</Chip>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Maintaining</span>
                <Chip variant="flat" size="sm">Shiki</Chip>
                <Chip variant="flat" size="sm">Twoslash</Chip>
                <Chip variant="flat" size="sm">ESLint Stylistic</Chip>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="space-y-6 text-muted-foreground">
            <p>
              Dreaming up cool ideas and making them come true is where my passion lies. I am
              enthusiastic about building tools that help myself and others to be more productive
              and enjoy the process of crafting. You can find my{' '}
              <Link href="#" className="text-text-primary hover:text-text-primary-hover">
                full projects list here
              </Link>.
            </p>

            <p>
              I give talks and write{' '}
              <Link href="#" className="text-text-primary hover:text-text-primary-hover inline-flex items-center gap-1">
                blog posts
              </Link>{' '}
              about open source, coding, etc. Occasionally, I do live coding streams on{' '}
              <Link href="#" className="text-text-primary hover:text-text-primary-hover">
                YouTube
              </Link>{' '}
              and 哔哩哔哩. I am also co-hosting a podcast{' '}
              <Link href="#" className="text-text-primary hover:text-text-primary-hover italic inline-flex items-center gap-1">
                No Coding Today
              </Link>{' '}
              (in Mandarin), talking about various topics around programming. From time to
              time, I make some generative-art, interactivity experiments on{' '}
              <Link href="#" className="text-text-primary hover:text-text-primary-hover">
                100.antfu.me
              </Link>.
            </p>

            <p>
              Outside of programming, I enjoy doing photography and traveling. I post photos on{' '}
              <Link href="#" className="text-text-primary hover:text-text-primary-hover">
                this page
              </Link>. I also love anime, movies and dramas, I am trying to list my{' '}
              <Link href="#" className="text-text-primary hover:text-text-primary-hover">
                media consumption
              </Link>. Also, in case you are interested, here are the{' '}
              <Link href="#" className="text-text-primary hover:text-text-primary-hover">
                hardware/software I use
              </Link>.
            </p>

            <p className="flex items-center gap-2">
              I recently moved to{' '}
              <span className="inline-flex items-center gap-1 text-foreground">
                <span className="text-sm bg-muted px-1 rounded">Tokyo</span>
                东京
              </span>, if you are around, please reach out and let&apos;s have some
              coffee or work together.
            </p>
          </section>

          {/* Find me on Card */}
          <section className="grid gap-3">
            <h3 className="text-md font-semibold">Find me on</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 text-text-primary">
              {
                basics.profiles.map((profile, index) => {
                  const Icon = getSocialIcon(profile.network);
                  return Icon ? (
                    <Link
                      isExternal={profile.network.toLocaleLowerCase() != 'github'}
                      key={index}
                      href={profile.url || "#"}
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
          <section className="flex flex-wrap gap-2">
            {/* <Link href="#" className="text-sm text-text-secondary hover:text-text-secondary-hover">哔哩哔哩</Link>
            <span className="text-muted-foreground">×</span>
            <Link href="#" className="text-sm text-text-secondary hover:text-text-secondary-hover">中文推</Link>
            <span className="text-muted-foreground">×</span>
            <Link href="#" className="text-sm text-text-secondary hover:text-text-secondary-hover">日本語</Link> */}
            Or mail me at <Link href={`mailto:${basics.email}`} className="text-text-primary opacity-60 dark:opacity-80 hover:opacity-80 dark:hover:opacity-100 transition-opacity">{basics.email}</Link>
          </section>
        </div>
      </main>
    </div>
  );
}