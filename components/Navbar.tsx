'use client';

import React from 'react';
import { Navbar as HeroNavbar, NavbarContent, NavbarItem } from '@heroui/navbar';
import ThemeSwitch from '@/components/ThemeSwitch';
import { Badge } from '@heroui/badge';
import { Avatar } from '@heroui/avatar';
import { div } from 'framer-motion/client';

const Navbar = () => {
  // 添加平滑滚动函数
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0  w-full flex flex-col z-20">
      {/* <div className="w-full bg-cyan-800/70 text-gray-100 font-bold dark:text-gray-100 dark:bg-cayn-600/70 font-serif">
        <p className="max-w-5xl mx-auto px-8 py-2 text-xs">我注意到您在循环渲染后还硬编码了一个"微前端"标签，这可能会导致重复显示。您可能想要移除这个硬编码的标签</p>
      </div> */}
      <HeroNavbar
        position="static"
        className="w-full items-center dark:bg-gray-900 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg dark:shadow-gray-800/30"
      >
        <Badge color="primary" size="lg">
          <Avatar size="lg" src="/0xsgg.jpg" />
        </Badge>
        <NavbarContent className="flex justify-center" justify="center">
          <NavbarItem>
            <a
              href="#profile"
              className="text-foreground hover:text-primary cursor-pointer"
              onClick={(e) => scrollToSection(e, 'profile')}
            >
              个人简介
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#projects"
              className="text-foreground hover:text-primary cursor-pointer"
              onClick={(e) => scrollToSection(e, 'projects')}
            >
              项目经验
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#achievements"
              className="text-foreground hover:text-primary cursor-pointer"
              onClick={(e) => scrollToSection(e, 'achievements')}
            >
              技术成果
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#community"
              className="text-foreground hover:text-primary cursor-pointer"
              onClick={(e) => scrollToSection(e, 'achievements')}
            >
              社区贡献
            </a>
          </NavbarItem>

        </NavbarContent>
        <ThemeSwitch />
      </HeroNavbar>
    </div>
  );
};

export default Navbar;