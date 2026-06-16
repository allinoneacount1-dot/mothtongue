'use client';

import { useState } from 'react';
import { MagneticButton } from './MagneticButton';

export function WishlistForm() {
  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, alias }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'The moths have recorded your name.');
        setEmail('');
        setAlias('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('The archive could not be reached.');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-moth/20 p-8 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-moth/10 flex items-center justify-center">
          <span className="font-[family-name:var(--font-display)] text-moth text-xl">✦</span>
        </div>
        <p className="font-[family-name:var(--font-display)] text-lg text-bone mb-2">
          {message}
        </p>
        <p className="font-[family-name:var(--font-mono)] text-[10px] text-bone/30">
          The moths will find you when the time comes.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 font-[family-name:var(--font-mono)] text-[10px] text-bone/30 hover:text-moth transition-colors focus-moth tracking-wider uppercase"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="alias" className="font-[family-name:var(--font-mono)] text-[10px] text-bone/30 tracking-wider uppercase block mb-2">
          Translator Alias
        </label>
        <input
          id="alias"
          type="text"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          placeholder="What should the moths call you?"
          className="w-full bg-transparent border border-bone/10 px-4 py-3 font-[family-name:var(--font-mono)] text-xs text-bone placeholder:text-bone/20 focus:outline-none focus:border-moth/30 transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="font-[family-name:var(--font-mono)] text-[10px] text-bone/30 tracking-wider uppercase block mb-2">
          Signal Frequency
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@signal.frequency"
          className="w-full bg-transparent border border-bone/10 px-4 py-3 font-[family-name:var(--font-mono)] text-xs text-bone placeholder:text-bone/20 focus:outline-none focus:border-moth/30 transition-colors"
          required
        />
      </div>

      {status === 'error' && (
        <p className="font-[family-name:var(--font-mono)] text-[10px] text-rust/80">
          {message}
        </p>
      )}

      <MagneticButton type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Recording...' : 'Join the Archive'}
      </MagneticButton>

      <p className="font-[family-name:var(--font-mono)] text-[9px] text-bone/15 tracking-wider">
        Your signal is encrypted and stored in the archive. The moths do not share.
      </p>
    </form>
  );
}
