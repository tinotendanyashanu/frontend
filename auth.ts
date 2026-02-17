import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongodb';
import Partner from '@/models/Partner';
import { LoginSchema } from '@/lib/schemas';
import { authConfig } from './auth.config';
import { z } from 'zod';

// Augment NextAuth types
declare module 'next-auth' {
  interface User {
    role?: 'partner' | 'admin';
    tier?: string;
    id?: string;
  }
  interface Session {
    user: {
      role?: 'partner' | 'admin';
      tier?: string;
      id?: string;
    } & import('next-auth').DefaultSession['user'];
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    role?: 'partner' | 'admin';
    tier?: string;
    id?: string;
  }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = LoginSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          
          await dbConnect();
          const user = await Partner.findOne({ email });
          
          if (!user) return null;
          
          // If user has no password (e.g. strict OAuth or legacy), return null for credentials provider
          if (!user.password) return null;

          // Check if user is active
          if (user.status !== 'active') {
             console.log(`User ${email} is not active. Status: ${user.status}`);
             return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) {
            return {
              id: user._id.toString(),
              name: user.name,
              email: user.email,
              role: user.role,
              tier: user.tier,
            };
          }
        }
        
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
