'use client';

import { motion } from 'framer-motion';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 120 40"
      className={`${className}`}
      whileHover="hover"
      initial="idle"
      aria-label="MOTHTONGUE"
      role="img"
    >
      {/* Luna moth body */}
      <motion.path
        d="M60 8 C55 8, 42 14, 38 22 C34 30, 40 36, 52 36 C56 36, 58 34, 60 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={{
          idle: { pathLength: 1 },
          hover: { pathLength: 1, stroke: '#9FD66A' },
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.path
        d="M60 8 C65 8, 78 14, 82 22 C86 30, 80 36, 68 36 C64 36, 62 34, 60 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={{
          idle: { pathLength: 1 },
          hover: { pathLength: 1, stroke: '#9FD66A' },
        }}
        transition={{ duration: 0.4 }}
      />
      {/* Left wing glow line */}
      <motion.path
        d="M52 36 C48 32, 44 26, 42 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
        variants={{
          idle: { opacity: 0.4 },
          hover: { opacity: 1, stroke: '#9FD66A' },
        }}
      />
      {/* Right wing glow line */}
      <motion.path
        d="M68 36 C72 32, 76 26, 78 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
        variants={{
          idle: { opacity: 0.4 },
          hover: { opacity: 1, stroke: '#9FD66A' },
        }}
      />
      {/* Center body */}
      <motion.circle cx="60" cy="12" r="2" fill="currentColor" variants={{
        idle: { fill: 'currentColor' },
        hover: { fill: '#9FD66A' },
      }} />
      {/* Antennae */}
      <motion.path d="M58 10 C55 4, 50 2, 48 4" fill="none" stroke="currentColor" strokeWidth="0.8" variants={{
        idle: { opacity: 0.6 },
        hover: { opacity: 1 },
      }} />
      <motion.path d="M62 10 C65 4, 70 2, 72 4" fill="none" stroke="currentColor" strokeWidth="0.8" variants={{
        idle: { opacity: 0.6 },
        hover: { opacity: 1 },
      }} />
      {/* Text */}
      <text x="90" y="24" fill="currentColor" fontFamily="var(--font-display)" fontSize="11" fontWeight="700" letterSpacing="0.1em">
        MOTH
      </text>
    </motion.svg>
  );
}
