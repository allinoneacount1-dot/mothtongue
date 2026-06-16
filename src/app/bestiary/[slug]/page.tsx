import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SectionLabel } from '@/components/SectionLabel';
import { RevealText } from '@/components/RevealText';
import { creatures } from '@/content/bestiary';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return creatures.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const creature = creatures.find((c) => c.slug === slug);
  if (!creature) return { title: 'Not Found' };
  return {
    title: creature.name,
    description: creature.description,
  };
}

export default async function CreaturePage({ params }: Props) {
  const { slug } = await params;
  const creature = creatures.find((c) => c.slug === slug);

  if (!creature) notFound();

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/bestiary" className="font-[family-name:var(--font-mono)] text-[10px] text-bone/30 hover:text-moth transition-colors focus-moth tracking-wider uppercase mb-8 inline-block">
          &larr; Back to Bestiary
        </Link>

        <SectionLabel label={`Specimen ${creature.classification}`} className="mb-4" />

        <RevealText>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {creature.name}
          </h1>
        </RevealText>

        <p className="font-[family-name:var(--font-mono)] text-[10px] text-bone/30 mb-8 tracking-wider">
          HABITAT: {creature.habitat}
        </p>

        {/* Specimen plate */}
        <div className="border border-bone/10 p-8 md:p-12 mb-12 relative">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${creature.glowColor}, transparent 70%)`,
            }}
          />

          <div className="relative z-10">
            <div
              className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: `${creature.glowColor}10`,
                boxShadow: `0 0 60px ${creature.glowColor}20`,
              }}
            >
              <span
                className="font-[family-name:var(--font-display)] text-5xl font-bold"
                style={{ color: creature.glowColor }}
              >
                {creature.name.charAt(0)}
              </span>
            </div>

            <p className="font-[family-name:var(--font-mono)] text-xs text-bone/60 leading-relaxed mb-8 text-center max-w-lg mx-auto">
              {creature.description}
            </p>

            <div className="border-t border-bone/10 pt-6">
              <p className="font-[family-name:var(--font-mono)] text-[9px] text-bone/25 tracking-[0.2em] uppercase mb-3">
                Field Notes
              </p>
              <p className="font-[family-name:var(--font-mono)] text-[11px] text-bone/40 leading-relaxed italic">
                {creature.fieldNotes}
              </p>
            </div>
          </div>
        </div>

        {/* Lore */}
        <RevealText>
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[9px] text-bone/25 tracking-[0.2em] uppercase mb-4">
              Archive Lore
            </p>
            <p className="font-[family-name:var(--font-display)] text-lg md:text-xl text-bone/70 leading-relaxed drop-cap">
              {creature.lore}
            </p>
          </div>
        </RevealText>
      </div>
    </main>
  );
}
