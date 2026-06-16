'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export function WoodcutDraw({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        {/* Moth outline */}
        <motion.path
          d="M100 40 C85 40, 55 60, 50 90 C45 120, 60 150, 85 155 C92 156, 97 152, 100 145"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M100 40 C115 40, 145 60, 150 90 C155 120, 140 150, 115 155 C108 156, 103 152, 100 145"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
        />
        {/* Wing veins left */}
        <motion.path
          d="M85 155 C75 140, 60 110, 55 85"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.path
          d="M90 150 C82 130, 70 105, 65 80"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 1 }}
        />
        {/* Wing veins right */}
        <motion.path
          d="M115 155 C125 140, 140 110, 145 85"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.path
          d="M110 150 C118 130, 130 105, 135 80"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 1 }}
        />
        {/* Antennae */}
        <motion.path
          d="M95 42 C85 25, 70 15, 60 20"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        />
        <motion.path
          d="M105 42 C115 25, 130 15, 140 20"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        />
        {/* Body segments */}
        <motion.ellipse
          cx="100" cy="95" rx="4" ry="15"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.circle
          cx="100" cy="78" r="3"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </svg>
    </motion.div>
  );
}
