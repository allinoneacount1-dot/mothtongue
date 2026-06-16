'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { site } from '@/content/site';

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-moss/80 backdrop-blur-md border-b border-bone/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="focus-moth">
            <Logo className="w-24 h-8 text-bone" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {site.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-[family-name:var(--font-mono)] tracking-[0.1em] uppercase transition-colors hover:text-moth focus-moth ${
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'text-moth'
                    : 'text-bone/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/play"
              className="text-xs font-[family-name:var(--font-mono)] tracking-[0.1em] uppercase px-5 py-2 bg-moth text-moss hover:bg-moth-dim transition-colors focus-moth font-medium"
            >
              Play
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-bone/60 hover:text-moth focus-moth p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M4 4L16 16M16 4L4 16" />
              ) : (
                <>
                  <path d="M2 5H18" />
                  <path d="M2 10H18" />
                  <path d="M2 15H18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-moss/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 text-bone/60 hover:text-moth focus-moth p-2"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6L18 18M18 6L6 18" />
              </svg>
            </button>
            <div className="flex flex-col items-center gap-8">
              {site.nav.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-[family-name:var(--font-display)] text-3xl tracking-wide transition-colors focus-moth ${
                      pathname === link.href ? 'text-moth' : 'text-bone/60 hover:text-bone'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: site.nav.length * 0.1 }}
              >
                <Link
                  href="/play"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block px-8 py-3 bg-moth text-moss font-[family-name:var(--font-mono)] text-sm tracking-wider uppercase hover:bg-moth-dim transition-colors focus-moth"
                >
                  Play the Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
