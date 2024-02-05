import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User, Worker } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

async function getWorkerId(email: string): Promise<Worker | undefined> {
  try {
    const worker =
      await sql<Worker>`SELECT * FROM workers WHERE email=${email}`;
    return worker.rows[0];
  } catch (error) {
    console.error('Failed to fetch worker:', error);
    throw new Error('Failed to fetch worker.');
  }
}

async function getUser(username: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE name=${username}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email().optional(),
            token: z.string().optional(),
            role: z.string(),
            password: z.string().optional(),
            username: z.string().optional(),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          if (parsedCredentials.data.role === 'worker') {
            const { email, token } = parsedCredentials.data;
            if (token !== 'lab1') return null;
            const worker = await getWorkerId(email);
            if (!worker) return null;
            else {
              return worker;
            }
          }
          if (parsedCredentials.data.role === 'manager') {
            const { username, password } = parsedCredentials.data;
            const user = await getUser(username);
            if (!user) return null;
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );

            if (passwordsMatch) return { role: 'manager', ...user };
          }
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
