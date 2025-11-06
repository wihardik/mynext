'use client'
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export function Button({ variant = 'primary', children, className = '', ...props }: Props) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium focus:outline-none';
  const styles = variant === 'primary'
    ? 'bg-black text-white hover:opacity-90'
    : 'border border-zinc-200 text-zinc-900 bg-white hover:bg-zinc-50';

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
