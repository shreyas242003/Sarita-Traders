"use client";

import { motion, MotionProps } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof MotionProps
> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", children, className = "", ...props },
    ref,
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation select-none";

    const variants = {
      primary:
        "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-500 shadow-sm hover:shadow-md active:bg-slate-900",
      secondary:
        "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-500 hover:shadow-sm",
      outline:
        "border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 focus:ring-slate-500 hover:shadow-sm",
      ghost:
        "text-slate-700 hover:bg-slate-100 focus:ring-slate-500 hover:text-slate-900",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm rounded-md min-h-[36px]",
      md: "px-4 py-2.5 text-sm rounded-md min-h-[40px]",
      lg: "px-6 py-3 text-base rounded-lg min-h-[44px]",
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export default Button;
