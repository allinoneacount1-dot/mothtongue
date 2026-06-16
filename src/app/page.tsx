import { Hero } from '@/components/Hero';
import { RevealText } from '@/components/RevealText';
import Link from 'next/link';
import { creatures } from '@/content/bestiary';

const worldHighlights = [
  { title: 'The Archive', desc: 'A museum of night things, catalogued by lantern light.', href: '/world' },
  { title: 'The Tale', desc: 'A dark folk story told through woodcut and glow.', href: '/world#tale' },
  { title: 'The Translator', desc: 'You. The one who speaks the language of light.', href: '/world#translator' },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Lore teaser */}
      <section className="section-spacing px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <RevealText>
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl leading-snug text-bone/90 drop-cap">
              Somewhere in the deep forest, an abandoned museum breathes in the dark. Its display cases hum. Its specimen labels shift. The moths pinned behind glass have begun to glow again, and they are speaking to anyone who will listen.
            </p>
          </RevealText>
          <div className="mt-8">
            <Link href="/world" className="font-[family-name:var(--font-mono)] text-xs text-moth hover:text-moth-dim transition-colors focus-moth tracking-wider uppercase">
              Read the full entry &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* World grid */}
      <section className="section-spacing px-4 md:px-8 border-t border-bone/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {worldHighlights.map((item, i) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block p-8 border border-bone/10 hover:border-moth/30 transition-all duration-500"
              >
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-bone/20 tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold mt-3 mb-3 text-bone group-hover:text-moth transition-colors">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-mono)] text-xs text-bone/40 leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Character strip */}
      <section className="section-spacing px-4 md:px-8 border-t border-bone/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {creatures.map((c) => (
              <Link
                key={c.slug}
                href={`/bestiary/${c.slug}`}
                className="group block text-center p-4 hover:bg-bone/5 transition-colors"
              >
                <div
                  className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${c.glowColor}15`, boxShadow: `0 0 30px ${c.glowColor}20` }}
                >
                  <span className="font-[family-name:var(--font-display)] text-lg" style={{ color: c.glowColor }}>
                    {c.name.charAt(0)}
                  </span>
                </div>
                <p className="font-[family-name:var(--font-mono)] text-[10px] text-bone/50 group-hover:text-bone transition-colors">
                  {c.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/bestiary" className="font-[family-name:var(--font-mono)] text-xs text-moth hover:text-moth-dim transition-colors focus-moth tracking-wider uppercase">
              View Full Bestiary &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="section-spacing px-4 md:px-8 border-t border-bone/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Guide the light. Read the glow.
          </h2>
          <p className="font-[family-name:var(--font-mono)] text-xs text-bone/40 mb-8 max-w-lg mx-auto">
            A playable demonstration of the MOTHTONGUE experience. Navigate a lantern through the dark forest. Let the moths teach you their language.
          </p>
          <Link
            href="/play"
            className="inline-block px-10 py-4 bg-moth text-moss font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase font-medium hover:bg-moth-dim transition-colors focus-moth"
          >
            Play the Demo
          </Link>
        </div>
      </section>
    </>
  );
}
