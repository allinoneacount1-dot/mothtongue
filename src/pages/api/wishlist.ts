import type { APIRoute } from 'astro';

const store: { email: string; alias: string; timestamp: string }[] = [];

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, alias } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid signal frequency.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!alias || typeof alias !== 'string' || alias.length < 1 || alias.length > 50) {
      return new Response(JSON.stringify({ error: 'Translator alias required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const exists = store.find((e) => e.email === email);
    if (exists) {
      return new Response(JSON.stringify({ message: 'The moths already know your name.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    store.push({
      email,
      alias,
      timestamp: new Date().toISOString(),
    });

    return new Response(JSON.stringify({
      message: `Welcome, ${alias}. The moths have recorded your signal.`,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'The archive could not process your request.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
