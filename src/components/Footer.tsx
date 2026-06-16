'use client';

import Link from 'next/link';
import { Logo } from './Logo';
import { site } from '@/content/site';

export function Footer() {
  return (
    <footer className="border-t border-bone/5 bg-moss">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="focus-moth">
              <Logo className="w-20 h-7 text-bone" />
            </Link>
            <p className="font-[family-name:var(--font-mono)] text-[10px] text-bone/30 mt-3 leading-relaxed">
              {site.tagline}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-bone/40 uppercase mb-4">Explore</h4>
            <ul className="space-y-2">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-[family-name:var(--font-mono)] text-[11px] text-bone/30 hover:text-moth transition-colors focus-moth">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-bone/40 uppercase mb-4">Connect</h4>
            <ul className="space-y-2">
              {site.social.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[11px] text-bone/30 hover:text-moth transition-colors focus-moth">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-bone/40 uppercase mb-4">Field Dispatch</h4>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-3 py-2 bg-moss-light border border-bone/10 font-[family-name:var(--font-mono)] text-[10px] text-bone placeholder:text-bone/20 focus:border-moth transition-colors focus-moth"
                aria-label="Email for field dispatch"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-moth text-moss font-[family-name:var(--font-mono)] text-[10px] font-medium hover:bg-moth-dim transition-colors focus-moth"
                aria-label="Subscribe"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-bone/5">
          <p className="font-[family-name:var(--font-mono)] text-[9px] text-bone/15 leading-relaxed">
            MOTHTONGUE is an atmospheric narrative experience. Not affiliated with any real entomological institution. All specimens are fictional. The glow is not real. Or is it.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[9px] text-bone/10 mt-3">
            &copy; 2026 MOTHTONGUE. All rights reserved. The moths remember.
          </p>
        </div>
      </div>
    </footer>
  );
}
