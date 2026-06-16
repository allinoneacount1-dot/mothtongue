import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SectionLabel } from '@/components/SectionLabel';
import { RevealText } from '@/components/RevealText';
import { chroniclePosts as posts } from '@/content/chronicle';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ChroniclePostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <article className="max-w-3xl mx-auto">
        <Link href="/chronicle" className="font-[family-name:var(--font-mono)] text-[10px] text-bone/30 hover:text-moth transition-colors focus-moth tracking-wider uppercase mb-8 inline-block">
          &larr; Back to Chronicle
        </Link>

        <SectionLabel label={`${post.tags[0]} · ${post.date}`} className="mb-4" />

        <RevealText>
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
            {post.title}
          </h1>
        </RevealText>

        <div className="border-t border-bone/10 pt-8">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p
              key={i}
              className="font-[family-name:var(--font-mono)] text-xs text-bone/50 leading-[1.8] mb-6"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-bone/10 text-center">
          <p className="font-[family-name:var(--font-mono)] text-[9px] text-bone/20 tracking-widest uppercase">
            End of Entry
          </p>
        </div>
      </article>
    </main>
  );
}
