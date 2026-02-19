import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const { auth } = NextAuth(authConfig);

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const refCode = nextUrl.searchParams.get('ref');

  // 1. Handle Referral Tracking
  if (refCode) {
    // Create a response that will redirect to the same URL but without the ref param (optional, for warmer URLs)
    // or just pass through. Let's pass through but set cookie.
    const response = NextResponse.next();
    
    // Set cookie for 90 days
    response.cookies.set('leo_partner_ref', refCode, {
      maxAge: 60 * 60 * 24 * 90, // 90 days
      path: '/',
      httpOnly: true, // Not accessible via JS (good for security, but maybe we need it for client-side forms?)
      // Actually tracking pixels might need JS access, but for server actions HttpOnly is fine.
      // Let's keep it httpOnly: false if we need client access, or true if we only use Server Actions.
      // We are using Server Actions for everything so far.
      sameSite: 'lax',
    });

    // We can also fire a background request to track the click here if we had a dedicated analytics endpoint,
    // but middleware runtimes are limited (Edge).
    // For now, simpler to just set cookie.
    
    // Continue the auth middleware chain
    // We need to run the auth middleware as well.
    // Since NextAuth middleware returns a response, we might need to chaining them.
    // But `auth` returns a session or redirects.
    
    // If we return `response` here, we skip `auth` middleware logic effectively unless we manually call it.
    // A better pattern for NextAuth v5 + Custom Middleware:
    
    // Let's try to combine them.
    const authResponse = await (auth as any)(req);
    
    // If auth returned a redirect or response, we should respect it but append our cookie.
    if (authResponse) {
        authResponse.cookies.set('leo_partner_ref', refCode, {
            maxAge: 60 * 60 * 24 * 90,
            path: '/',
            sameSite: 'lax'
        });
        return authResponse;
    }
    
    return response;
  }

  // 2. Standard Auth Middleware
  return (auth as any)(req);
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
