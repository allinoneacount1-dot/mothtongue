'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BaseProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  type?: never;
  disabled?: never;
  onClick?: never;
}

interface ButtonProps extends BaseProps {
  href?: never;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

type Props = LinkProps | ButtonProps;

export function MagneticButton({ href, children, variant = 'primary', className = '', type, disabled, onClick }: Props) {
  const classes = `inline-block px-8 py-3 font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase transition-all focus-moth ${
    variant === 'primary'
      ? 'bg-moth text-moss hover:bg-moth-dim font-medium'
      : 'border border-bone/20 text-bone/60 hover:border-bone/40 hover:text-bone'
  } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const motionEl = (
    <motion.div
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {href ? (
        <Link href={href} className={classes}>
          {children}
        </Link>
      ) : (
        <button type={type || 'button'} disabled={disabled} className={classes} onClick={onClick}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return motionEl;
}
