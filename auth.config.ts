import type { NextAuthConfig, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
declare module 'next-auth' {
  interface User {
    role: string;
  }
  interface Session {
    user: User;
  }
}
export const authConfig = {
  pages: {
    signIn: '/login',
    // signOut: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 311_040_000_000,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isWorker = auth?.user?.role === 'worker';
      const isManager = auth?.user?.role === 'manager';
      const isOnLocationPage = nextUrl.pathname.startsWith('/location');
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      // if (nextUrl.pathname.startsWith('/login')) return true;
      // if (isOnLocationPage) {
      //   if (isLoggedIn && isWorker) {
      //     auth.user.role = 'worker';
      //     return true;
      //   }
      //   return false;
      // } else if (isLoggedIn && isWorker) {
      //   let callbackUrl = nextUrl.searchParams.get('callbackUrl');
      //   if (callbackUrl) {
      //     return Response.redirect(callbackUrl);
      //   }
      //   return Response.redirect(
      //     new URL('/location/invalid-location', nextUrl)
      //   );
      // }
      // if (isOnDashboard) {
      //   if (isLoggedIn && isManager) {
      //     return true;
      //   }
      //   return Response.redirect(new URL('/login/manager', nextUrl));
      // } else if (isLoggedIn && isManager) {
      //   return Response.redirect(new URL('/dashboard/locations', nextUrl));
      // }
      if (isLoggedIn) {
        if (isWorker) {
          if (isOnLocationPage) return true;
          let callbackUrl = nextUrl.searchParams.get('callbackUrl');
          if (callbackUrl) {
            return Response.redirect(callbackUrl);
          }
          return Response.redirect(
            new URL('/location/invalid-location', nextUrl)
          );
        }
        if (isManager) {
          if (isOnDashboard) return true;
          let callbackUrl = nextUrl.searchParams.get('callbackUrl');
          if (callbackUrl) {
            return Response.redirect(callbackUrl);
          }
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
      } else {
        if (isOnLocationPage) return false;
        if (nextUrl.pathname.startsWith('/login')) return true;
        else {
          return Response.redirect(new URL('/login/manager', nextUrl));
        }
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token?: JWT }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (token) {
        session.user.role = token.role+"";
      }
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
