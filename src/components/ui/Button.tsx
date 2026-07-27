import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-secondary hover:text-accent shadow-md hover:shadow-lg transition-all duration-300',
      secondary: 'bg-secondary text-accent hover:bg-primary hover:text-white shadow-md hover:shadow-lg transition-all duration-300',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300',
      ghost: 'bg-transparent text-primary hover:bg-primary/10 transition-all duration-300',
    };

    const sizes = {
      sm: 'py-2 px-4 text-sm font-semibold rounded-xl',
      md: 'py-3 px-6 text-base font-semibold rounded-xl',
      lg: 'py-4 px-8 text-lg font-bold rounded-xl',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
