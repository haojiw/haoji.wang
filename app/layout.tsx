import './globals.css';
import type { Metadata } from 'next';
import { siteThemeStyle } from './theme';

export const metadata: Metadata = {
  title: 'Haoji Wang',
  description: 'Personal website of Haoji Wang',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={siteThemeStyle}>{children}</body>
    </html>
  );
} 
