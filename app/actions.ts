'use server';

import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export type ContactState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    project?: string[];
    message?: string[];
  };
};

export async function submitContactForm(prevState: ContactState, formData: FormData): Promise<ContactState> {
  // Simple in-memory rate limit keyed by email (fallback when no per-request context)
  const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
  const RATE_LIMIT_MAX = 3;
  if (!(global as any)._contactRateLimiter) {
    (global as any)._contactRateLimiter = new Map<string, number[]>();
  }
  const limiter: Map<string, number[]> = (global as any)._contactRateLimiter;

  // Honeypot to catch bots
  const botField = (formData.get('company') as string | null)?.trim();
  if (botField) {
    return { success: false, message: 'Submission rejected.' };
  }

  const name = (formData.get('name') as string | null)?.trim() || '';
  const email = (formData.get('email') as string | null)?.trim() || '';
  const project = (formData.get('project') as string | null)?.trim() || '';
  const budget = (formData.get('budget') as string | null)?.trim() || '';
  const timeline = (formData.get('timeline') as string | null)?.trim() || '';
  const message = (formData.get('message') as string | null)?.trim() || '';

  // Basic validation
  if (!name || !email || !project || !message) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    };
  }

  if (name.length > 80 || project.length > 120 || message.length > 2000) {
    return {
      success: false,
      message: 'Please keep inputs within the allowed length.',
    };
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please provide a valid email address.',
    };
  }

  // Rate limit by email
  const now = Date.now();
  const entries = limiter.get(email) || [];
  const recent = entries.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    return {
      success: false,
      message: 'Too many submissions. Please try again in a few minutes.',
    };
  }
  limiter.set(email, [...recent, now]);

  try {
    await dbConnect();

    await Contact.create({
      name,
      email,
      project,
      timeline,
      budget,
      message,
    });

    // Optional notification hook (e.g., Slack/Discord webhook)
    const webhook = process.env.NOTIFY_WEBHOOK_URL;
    if (webhook) {
      fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New contact from ${name} (${email})\nProject: ${project}\nTimeline: ${timeline || 'n/a'}\nBudget: ${budget || 'n/a'}`,
        }),
      }).catch((err) => console.error('Webhook notify failed', err));
    }

    return {
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
}
