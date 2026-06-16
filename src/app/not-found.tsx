export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-[family-name:var(--font-display)] text-8xl md:text-9xl font-bold text-bone/5 mb-6">
          404
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mb-4">
          Lost in the Forest
        </h1>
        <p className="font-[family-name:var(--font-mono)] text-xs text-bone/40 mb-8 max-w-md">
          The path you seek does not exist. The moths tried to guide you, but you wandered too far from the lantern light.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 border border-moth/30 font-[family-name:var(--font-mono)] text-xs text-moth tracking-[0.15em] uppercase hover:bg-moth/10 transition-colors focus-moth"
        >
          Return to the Archive
        </a>
      </div>
    </main>
  );
}
