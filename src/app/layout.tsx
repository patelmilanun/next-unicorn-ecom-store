import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import './globals.css';

const golostext = Golos_Text({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store | Next Unicorn Ecom',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={golostext.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
