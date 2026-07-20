import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import { layout, page, type as typeStyles } from '../../theme';

export const metadata: Metadata = {
  title: 'PaperHouse 2026 | Haoji Wang',
  description: 'Still under construction. So is the Sagrada Família.',
};

export default function PaperHouse2026Page() {
  return (
    <main className={page.shell}>
      <div className={page.container}>
          <SiteHeader active="work" />

          <section className={`${layout.homeFirstSection} reveal`}>
            <h1 className={`${layout.sectionTitle} ${typeStyles.homeSectionTitle}`}>
              PaperHouse 2026
            </h1>

            <div className={`${page.contentMeasure} space-y-5 ${typeStyles.homeLead}`}>
              <p className="font-handwriting text-3xl text-accent">
                This room is still being written.
              </p>
              <p>
                It has not been finished. Neither is the Sagrada Família.
                Therefore, please allow visitors — the scaffolding is over at{' '}
                <Link
                  href="/blog/basilica-de-san-papel"
                  className="text-brand underline decoration-brand/30 underline-offset-4 transition hover:decoration-brand"
                >
                  Basílica de San Papel
                </Link>
                .
              </p>
            </div>
          </section>
      </div>
    </main>
  );
}
