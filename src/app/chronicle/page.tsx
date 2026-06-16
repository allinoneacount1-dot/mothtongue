import { SectionLabel } from '@/components/SectionLabel';
import { RevealText } from '@/components/RevealText';
import Link from 'next/link';
import { chroniclePosts as posts } from '@/content/chronicle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chronicle',
  description: 'Field notes, dark folk tales, and transmissions from the nocturnal archive.',
};

export default function ChroniclePage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionLabel label="Field Notes" className="mb-4" />
        <RevealText>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            The Chronicle
          </h1>
        </RevealText>

        <p className="font-[family-name:var(--font-mono)] text-xs text-bone/40 mb-16 max-w-2xl leading-relaxed">
          Dispatches from the nocturnal archive. Field notes, dark folk tales, and transmissions from the translators who came before you.
        </p>

        <div className="space-y-8">
          {posts.map((post, i) => (
            <RevealText key={post.slug} delay={i * 0.1}>
              <Link
                href={`/chronicle/${post.slug}`}
                className="group block border border-bone/10 p-8 md:p-12 hover:border-bone/20 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-[family-name:var(--font-mono)] text-[9px] text-bone/25 tracking-[0.2em] uppercase">
                    {post.tags[0]}
                  </span>
                  <span className="text-bone/10">·</span>
                  <span className="font-[family-name:var(--font-mono)] text-[9px] text-bone/25">
                    {post.date}
                  </span>
                </div>

                <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold mb-3 text-bone group-hover:text-moth transition-colors">
                  {post.title}
                </h2>

                <p className="font-[family-name:var(--font-mono)] text-[11px] text-bone/40 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-4">
                  <span className="font-[family-name:var(--font-mono)] text-[9px] text-bone/20 tracking-wider group-hover:text-moth/50 transition-colors">
                    Read Entry &rarr;
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
