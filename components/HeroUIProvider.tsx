'use client';
import { ReactNode } from 'react';
import {HeroUIProvider as NextHeroUIProvider} from '@heroui/react';

export function HeroUIProvider({children}: { children: ReactNode }) {
  return (
    <NextHeroUIProvider>
      {children}
    </NextHeroUIProvider>
  )
}