import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/partner/login',
    newUser: '/partner/signup',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/partner/dashboard');
      const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      
      console.log(`[Auth Config] Authorized check: ${nextUrl.pathname} | isLoggedIn: ${isLoggedIn} | Role: ${auth?.user?.role}`);

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; 
      }
      
      if (isOnAdmin) {
        if (isLoggedIn && auth?.user?.role === 'admin') return true;
        console.log('[Auth Config] Admin check failed');
        return false; 
      }
      
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        console.log(`[Auth Config] JWT Callback - User: ${user.email} | Role: ${user.role}`);
        token.role = user.role;
        token.id = user.id;
        token.tier = user.tier;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role;
        session.user.id = token.id as string;
        session.user.tier = token.tier;
        console.log(`[Auth Config] Session Callback - Role: ${session.user.role}`);
      }
      return session;
    },
  },
  providers: [], // Configured in auth.ts
} satisfies NextAuthConfig;
