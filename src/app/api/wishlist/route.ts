import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid signal frequency.'),
  alias: z.string().min(1, 'Translator alias required.').max(50, 'Alias too long.'),
});

const store: { email: string; alias: string; timestamp: string }[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email, alias } = result.data;

    const exists = store.find((e) => e.email === email);
    if (exists) {
      return NextResponse.json(
        { message: 'The moths already know your name.' },
        { status: 200 }
      );
    }

    store.push({
      email,
      alias,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      message: `Welcome, ${alias}. The moths have recorded your signal.`,
    });
  } catch {
    return NextResponse.json(
      { error: 'The archive could not process your request.' },
      { status: 500 }
    );
  }
}
