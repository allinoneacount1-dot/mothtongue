'use client';

import { motion } from 'framer-motion';
import { MothParticles } from './MothParticles';
import { WoodcutDraw } from './WoodcutDraw';
import { MagneticButton } from './MagneticButton';
import { RevealText } from './RevealText';
import { SectionLabel } from './SectionLabel';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <MothParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-24 pb-16">
        {/* Left - Text */}
        <div>
          <SectionLabel label="Field Entry 001, Nocturnal" className="mb-6" />

          <RevealText>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              Speak to the things that glow.
            </h1>
          </RevealText>

          <motion.p
            className="font-[family-name:var(--font-mono)] text-xs md:text-sm text-bone/50 max-w-lg mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A nocturnal museum that came alive. You are the translator.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <MagneticButton href="/world">Enter the Glow</MagneticButton>
            <MagneticButton href="/play" variant="secondary">Play the Demo</MagneticButton>
          </motion.div>
        </div>

        {/* Right - Woodcut art */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 text-moth/40">
            <WoodcutDraw className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
