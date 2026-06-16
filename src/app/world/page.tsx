import { SectionLabel } from '@/components/SectionLabel';
import { RevealText } from '@/components/RevealText';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'World',
  description: 'The world of MOTHTONGUE, a nocturnal natural-history museum that came alive.',
};

const timeline = [
  { era: 'I', title: 'The First Light', text: 'In the age before naming, the moths learned to speak through glow. They gathered in the deepest forests, where sunlight never reached, and built a language from pulse and flicker. Each species developed its own dialect: the Luna Tongue spoke in steady green, the Ember Weaver in amber threads, the Dust Mother in rust-colored whispers.' },
  { era: 'II', title: 'The Museum', text: 'Someone built a museum to house the night. Not to display it, but to listen to it. The cases were made of glass thin enough to transmit light-pulse. The walls were stone, chosen for its acoustic resonance. The doors faced east, so that sunset would be the last light to leave. Inside, the specimens were pinned not to preserve them, but to give them a place to speak from.' },
  { era: 'III', title: 'The Translator', text: 'The museum needed a translator. Not someone who understood the language of moths, but someone who was willing to learn it. The old texts say the translator must sit in complete darkness for seven nights. On the eighth night, if they have listened carefully enough, the moths will land on their tongue and teach them the first word.' },
  { era: 'IV', title: 'The Dark Folk Tale', text: 'Every forest has a tale it tells in the dark. Ours is about a moth who swallowed a lantern and became the first light in the world. It was not a kind light. It was a hungry light, a light that wanted to be seen more than it wanted to see. The other creatures learned to speak its language so they could ask it to be gentle. Some nights, it listens.' },
  { era: 'V', title: 'Now', text: 'The museum still stands. The moths still glow. The tale is still being told, to anyone who enters the forest after dark and has the patience to listen. You are the latest translator. The display cases are waiting. The specimens are glowing. The first lesson begins when you stop trying to understand and start trying to hear.' },
];

export default function WorldPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionLabel label="World Entry" className="mb-4" />
        <RevealText>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            The Nocturnal Archive
          </h1>
        </RevealText>

        <p className="font-[family-name:var(--font-mono)] text-xs text-bone/40 mb-16 max-w-2xl leading-relaxed">
          The world of MOTHTONGUE is built on a simple principle: the night has a language, and it has been trying to tell us something for centuries. We built a museum to listen. The moths agreed to speak.
        </p>

        {/* Timeline */}
        <div className="space-y-16">
          {timeline.map((item, i) => (
            <RevealText key={item.era} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8">
                <div className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-bone/10">
                  {item.era}
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold mb-4 text-bone">
                    {item.title}
                  </h2>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-bone/50 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
              {i < timeline.length - 1 && (
                <div className="mt-16 border-t border-bone/5" />
              )}
            </RevealText>
          ))}
        </div>

        {/* Ornamental pull quote */}
        <div className="mt-24 py-16 border-t border-bone/5 text-center">
          <blockquote className="font-[family-name:var(--font-display)] text-2xl md:text-3xl italic text-bone/70 max-w-2xl mx-auto leading-relaxed">
            &ldquo;The museum does not explain its exhibits. It lets you look, touch, and eventually understand.&rdquo;
          </blockquote>
          <p className="font-[family-name:var(--font-mono)] text-[10px] text-bone/20 mt-6 tracking-widest">
            FROM THE CURATOR&apos;S JOURNAL, ENTRY 042
          </p>
        </div>
      </div>
    </main>
  );
}
