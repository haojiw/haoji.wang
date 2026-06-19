import './globals.css';
import type { Metadata } from 'next';
import { siteThemeStyle } from './theme/css-vars';

export const metadata: Metadata = {
  title: 'Haoji Wang',
  description: 'Personal website of Haoji Wang',
};

export default function SiteRootLayout({
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
