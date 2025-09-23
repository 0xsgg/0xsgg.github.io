
'use client';

import { Card, CardBody, CardHeader, Link, Button, Chip } from '@heroui/react';
import {
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  BookOpen,
  Mic,
  MapPin
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 md:px-8">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">Sgg</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">Blog</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">Projects</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">Talks</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">Sponsors</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost" isIconOnly>
              <Github className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" isIconOnly>
              <Twitter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            {/* Hero Section */}
            <section className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Anthony Fu
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Hey! I&apos;m Anthony Fu, a fanatical open sourceror and design engineer.
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
                <Link href="#" className="text-foreground hover:text-primary">
                  full projects list here
                </Link>.
              </p>

              <p>
                I give talks and write{' '}
                <Link href="#" className="text-foreground hover:text-primary inline-flex items-center gap-1">
                  blog posts <BookOpen className="w-4 h-4" />
                </Link>{' '}
                about open source, coding, etc. Occasionally, I do live coding streams on{' '}
                <Link href="#" className="text-foreground hover:text-primary">
                  YouTube
                </Link>{' '}
                and 哔哩哔哩. I am also co-hosting a podcast{' '}
                <Link href="#" className="text-foreground hover:text-primary italic inline-flex items-center gap-1">
                  No Coding Today <Mic className="w-4 h-4" />
                </Link>{' '}
                (in Mandarin), talking about various topics around programming. From time to
                time, I make some generative-art, interactivity experiments on{' '}
                <Link href="#" className="text-foreground hover:text-primary">
                  100.antfu.me
                </Link>.
              </p>

              <p>
                Outside of programming, I enjoy doing photography and traveling. I post photos on{' '}
                <Link href="#" className="text-foreground hover:text-primary">
                  this page
                </Link>. I also love anime, movies and dramas, I am trying to list my{' '}
                <Link href="#" className="text-foreground hover:text-primary">
                  media consumption
                </Link>. Also, in case you are interested, here are the{' '}
                <Link href="#" className="text-foreground hover:text-primary">
                  hardware/software I use
                </Link>.
              </p>

              <p className="flex items-center gap-2">
                I recently moved to{' '}
                <span className="inline-flex items-center gap-1 text-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm bg-muted px-1 rounded">Tokyo</span>
                  东京
                </span>, if you are around, please reach out and let&apos;s have some
                coffee or work together.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Find me on Card */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Find me on</h3>
              </CardHeader>
              <CardBody className="space-y-3">
                <Link
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Twitter className="w-5 h-5 text-sky-500" />
                  <span>Bluesky</span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span>Threads</span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Mic className="w-5 h-5 text-purple-500" />
                  <span>Discord Server</span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <span className="w-5 h-5 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    YT
                  </span>
                  <span>YouTube</span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <span className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    IG
                  </span>
                  <span>Instagram</span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                </Link>
              </CardBody>
            </Card>

            {/* Language Links */}
            <Card>
              <CardBody>
                <div className="flex flex-wrap gap-2">
                  <Link href="#" className="text-sm hover:text-primary">哔哩哔哩</Link>
                  <span className="text-muted-foreground">×</span>
                  <Link href="#" className="text-sm hover:text-primary">中文推</Link>
                  <span className="text-muted-foreground">×</span>
                  <Link href="#" className="text-sm hover:text-primary">日本語</Link>
                </div>
              </CardBody>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}