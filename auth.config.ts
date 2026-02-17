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
      
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      
      if (isOnAdmin) {
        if (isLoggedIn && auth?.user?.role === 'admin') return true;
        return false; // Redirect unauthenticated or non-admin users
      }
      
      return true;
    },
    jwt({ token, user }) {
      if (user) {
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
      }
      return session;
    },
  },
  providers: [], // Configured in auth.ts
} satisfies NextAuthConfig;
