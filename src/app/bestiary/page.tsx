import { SectionLabel } from '@/components/SectionLabel';
import { RevealText } from '@/components/RevealText';
import Link from 'next/link';
import { creatures } from '@/content/bestiary';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bestiary',
  description: 'The nocturnal specimens of MOTHTONGUE — bioluminescent creatures catalogued by lantern light.',
};

export default function BestiaryPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="Specimen Archive" className="mb-4" />
        <RevealText>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            The Bestiary
          </h1>
        </RevealText>

        <p className="font-[family-name:var(--font-mono)] text-xs text-bone/40 mb-16 max-w-2xl leading-relaxed">
          Each specimen was collected from the deep forest and pinned in the museum&apos;s display cases. They glow in the dark. They speak if you listen. Hover to reveal their field notes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creatures.map((creature, i) => (
            <RevealText key={creature.slug} delay={i * 0.05}>
              <Link
                href={`/bestiary/${creature.slug}`}
                className="group block border border-bone/10 p-8 hover:border-bone/20 transition-all duration-500 relative overflow-hidden"
              >
                {/* Glow accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${creature.glowColor}15, transparent 70%)`,
                  }}
                />

                <p className="font-[family-name:var(--font-mono)] text-[9px] text-bone/25 tracking-[0.2em] mb-3">
                  {creature.classification}
                </p>

                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold mb-3 text-bone group-hover:text-moth transition-colors">
                  {creature.name}
                </h3>

                <p className="font-[family-name:var(--font-mono)] text-[10px] text-bone/30 mb-4">
                  {creature.habitat}
                </p>

                <p className="font-[family-name:var(--font-mono)] text-[11px] text-bone/50 leading-relaxed line-clamp-3">
                  {creature.description}
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: creature.glowColor, boxShadow: `0 0 8px ${creature.glowColor}60` }}
                  />
                  <span className="font-[family-name:var(--font-mono)] text-[9px] text-bone/20 tracking-wider uppercase">
                    View Specimen
                  </span>
                </div>
              </Link>
            </RevealText>
          ))}
        </div>
      </div>
    </main>
  );
}
