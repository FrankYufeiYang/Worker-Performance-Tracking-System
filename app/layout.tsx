import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Digital Sign In Sheet',
    default: 'Digital Sign In Sheet',
  },
  description: 'Created By Yufei Yang',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className + ' antialiased'}>{children}</body>
    </html>
  );
}
