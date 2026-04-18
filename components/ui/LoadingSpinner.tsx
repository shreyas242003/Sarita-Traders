'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-20 h-20'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizes[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: [0.4, 0.0, 0.2, 1] // Professional easing curve
        }}
      >
        {/* Industrial Nut SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-slate-600"
          fill="currentColor"
        >
          {/* Outer hexagon */}
          <path
            d="M50 10 L75 25 L75 50 L75 75 L50 90 L25 75 L25 50 L25 25 Z"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="opacity-80"
          />
          
          {/* Inner circle (threading hole) */}
          <circle
            cx="50"
            cy="50"
            r="15"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="opacity-60"
          />
          
          {/* Threading lines */}
          <g className="opacity-40">
            <line x1="35" y1="45" x2="65" y2="45" stroke="currentColor" strokeWidth="1"/>
            <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="1"/>
            <line x1="35" y1="55" x2="65" y2="55" stroke="currentColor" strokeWidth="1"/>
          </g>
          
          {/* Corner details */}
          <g className="opacity-30">
            <circle cx="50" cy="25" r="2" fill="currentColor"/>
            <circle cx="67" cy="37.5" r="2" fill="currentColor"/>
            <circle cx="67" cy="62.5" r="2" fill="currentColor"/>
            <circle cx="50" cy="75" r="2" fill="currentColor"/>
            <circle cx="33" cy="62.5" r="2" fill="currentColor"/>
            <circle cx="33" cy="37.5" r="2" fill="currentColor"/>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

