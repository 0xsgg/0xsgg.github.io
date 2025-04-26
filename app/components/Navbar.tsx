'use client';

import React from 'react';
import { Navbar as HeroNavbar, NavbarContent, NavbarItem } from '@heroui/navbar';
import ThemeSwitch from '@/app/components/ThemeSwitch';
import {Badge} from '@heroui/badge';
import {Avatar} from '@heroui/avatar';

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
    <HeroNavbar 
      position="static" 
      className="fixed top-0 w-full items-center dark:bg-gray-900 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md z-10 shadow-lg dark:shadow-gray-800/30"
    >
        <Badge color="primary" size="lg">
            <Avatar size="md" src="/Oxsggmico.jpg" />
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
            href="#tech-stack" 
            className="text-foreground hover:text-primary cursor-pointer"
            onClick={(e) => scrollToSection(e, 'tech-stack')}
          >
            技术栈
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
            href="#projects" 
            className="text-foreground hover:text-primary cursor-pointer"
            onClick={(e) => scrollToSection(e, 'projects')}
          >
            项目经验
          </a>
        </NavbarItem>
      </NavbarContent>
      <ThemeSwitch />
    </HeroNavbar>
  );
};

export default Navbar;