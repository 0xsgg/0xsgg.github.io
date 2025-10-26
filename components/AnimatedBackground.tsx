'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);

    // 创建粒子
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = 25; // 增加粒子数量

      // 定义多种颜色选项
      const colors = [
        'rgba(96, 165, 250, 0.8)',   // 蓝色
        'rgba(168, 85, 247, 0.8)',   // 紫色
        'rgba(236, 72, 153, 0.8)',   // 粉色
        'rgba(34, 197, 94, 0.8)',    // 绿色
        'rgba(251, 191, 36, 0.8)',   // 黄色
        'rgba(239, 68, 68, 0.8)',    // 红色
        'rgba(14, 165, 233, 0.8)',   // 天蓝色
        'rgba(139, 92, 246, 0.8)',   // 靛色
        'rgba(6, 182, 212, 0.8)',    // 青色
        'rgba(245, 101, 101, 0.8)',  // 珊瑚色
      ];

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2, // 增大粒子尺寸
          speedX: (Math.random() - 0.5) * 0.1, // 增加移动速度
          speedY: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.6 + 0.2, // 增加透明度
          color: colors[Math.floor(Math.random() * colors.length)], // 随机选择颜色
        });
      }

      setParticles(newParticles);
    };

    createParticles();
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let animationId: number;

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        }))
      );

      animationId = requestAnimationFrame(animateParticles);
    };

    animationId = requestAnimationFrame(animateParticles);
    return () => cancelAnimationFrame(animationId);
  }, [mounted]);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* 浮动粒子 */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            backgroundColor: particle.color,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 15px ${particle.color}`,
            animation: `particleFloat ${3 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* 三维抖动网格背景 */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-20' : 'opacity-30'
          }`}
        style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.06)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.06)'} 1px, transparent 1px)
          `,
          backgroundSize: '12px 12px',
          animation: 'gridShake 4s ease-in-out infinite',
          transform: 'perspective(1000px) rotateX(1deg)',
        }}
      />
    </div>
  );
}