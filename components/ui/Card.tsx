'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, hover = false, padding = 'md', className = '', ...props }, ref) => {
    const baseClasses = 'bg-white border border-slate-200 rounded-xl shadow-sm transition-all duration-200';
    
    const paddings = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };
    
    const classes = `${baseClasses} ${paddings[padding]} ${className}`;
    
    if (hover) {
      return (
        <motion.div
          ref={ref}
          className={classes}
          whileHover={{ 
            y: -4, 
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' 
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          {...props}
        >
          {children}
        </motion.div>
      );
    }
    
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
