import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Haoji Wang',
  description: 'Personal website and portfolio of Haoji Wang',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
} 