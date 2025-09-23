'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

interface AnimatedLogoProps {
  className?: string;
  animate?: boolean;
}

export default function AnimatedLogo({
  className = "",
  animate = true
}: AnimatedLogoProps) {
  const [isAnimating, setIsAnimating] = useState(animate);
  const [animationKey, setAnimationKey] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    if (animate) {
      setIsAnimating(true);
    }
  }, [animate]);

  // 主题切换时重新执行动画
  useEffect(() => {
    if (theme && animate) {
      setIsAnimating(false);
      setAnimationKey(prev => prev + 1);

      // 短暂延迟后重新开始动画
      setIsAnimating(true);
      const timer = setTimeout(() => {

      }, 50);

      return () => clearTimeout(timer);
    }
  }, [theme, animate]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        key={animationKey}
        width="50"
        height="40"
        viewBox="0 0 300 300"
        className="text-foreground opacity-100"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          dx="0"
          dy="0"
          fontSize="15"
          fontWeight="400"
          transform="matrix(16.452216 0.021698-.022158 16.801278-2.93354 235.032389)"
          fill="none"
          stroke={theme === 'dark' ? '#fff' : '#000'}
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: isAnimating ? '200' : 'none',
            strokeDashoffset: isAnimating ? '200' : '0',
            animation: isAnimating ? 'drawText 5s ease-in-out forwards' : 'none'
          }}
        >
          <tspan y="0">SM</tspan>
        </text>
      </svg>

      <style jsx>{`
        @keyframes drawText {
          0% {
            stroke-dashoffset: 200;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        svg:hover {
          transform: scale(1.05);
          transition: transform 0.2s ease;
          cursor: pointer;
        }

        svg text {
          font-family: 'Dancing Script', 'Kalam', 'Caveat', 'Patrick Hand', cursive, system-ui, -apple-system, sans-serif;
        }
      `}</style>
    </div>
  );
}