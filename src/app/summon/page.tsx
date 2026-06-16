'use client';

import { useState } from 'react';
import { SectionLabel } from '@/components/SectionLabel';
import { RevealText } from '@/components/RevealText';
import { WishlistForm } from '@/components/WishlistForm';

export default function SummonPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <SectionLabel label="Join the Archive" className="mb-4" />
        <RevealText>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Summon
          </h1>
        </RevealText>

        <p className="font-[family-name:var(--font-mono)] text-xs text-bone/40 mb-12 max-w-lg leading-relaxed">
          The moths remember everyone who enters the archive. Leave your mark. Join the waitlist for the full MOTHTONGUE experience.
        </p>

        <WishlistForm />
      </div>
    </main>
  );
}
