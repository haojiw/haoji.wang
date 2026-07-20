import './globals.css';
import type { Metadata } from 'next';
import { siteThemeStyle } from './theme/css-vars';

export const metadata: Metadata = {
  title: 'Haoji Wang',
  description:
    'Writer and builder of PaperHouse — the unifying notebook, the interface of thought, the time machine of mind.',
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
