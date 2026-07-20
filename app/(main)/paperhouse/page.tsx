import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import { layout, page, type as typeStyles } from '../theme';

export const metadata: Metadata = {
  title: 'Time Machine | Haoji Wang',
  description: 'Miscellaneous collections of what I wrote in certain years.',
};

const rooms = [
  {
    year: '2009',
    href: '/paperhouse/2009',
    blurb: 'First grade. My mom bought me a diary and said I could write anything I wanted in it.',
  },
  {
    year: '2016',
    href: '/paperhouse/2016',
    blurb: 'Middle school. I spent most of my time doing math olympiads, but my dream was to become a writer.',
  },
  {
    year: '2026',
    href: '/paperhouse/2026',
    blurb: 'Under construction. So is the Sagrada Família.',
  },
];

export default function PaperHousePage() {
  return (
    <main className={page.shell}>
      <div className={page.container}>
          <SiteHeader active="work" />

          <section className={`${layout.homeFirstSection} reveal`}>
            <h1 className={`${layout.sectionTitle} ${typeStyles.homeSectionTitle}`}>
              Time Machine
            </h1>
            <p className={`${page.contentMeasure} ${typeStyles.homeLead}`}>
              Every word you put down is a snapshot of a brain state that will
              never exist again. These are miscellaneous collections of what I
              wrote in certain years.
            </p>

            <div className="mt-12 space-y-10">
              {rooms.map((room) => (
                <Link
                  key={room.year}
                  href={room.href}
                  className="group block no-underline hover:no-underline"
                >
                  <span className="font-handwriting text-4xl text-text transition group-hover:text-brand">
                    PaperHouse {room.year}
                  </span>
                  <p className={`${typeStyles.description} max-w-xl`}>
                    {room.blurb}
                  </p>
                </Link>
              ))}
            </div>
          </section>
      </div>
    </main>
  );
}
