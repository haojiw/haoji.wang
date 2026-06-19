import './globals.css';
import type { Metadata } from 'next';
import { legacyThemeStyle } from './legacy/theme';

export const metadata: Metadata = {
  title: 'Haoji Wang Legacy',
  description: 'Legacy personal website of Haoji Wang',
};

export default function LegacyRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={legacyThemeStyle}>{children}</body>
    </html>
  );
}
