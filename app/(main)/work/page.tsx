import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import WorkCarousel from '../components/WorkCarousel';
import { layout, page, type as typeStyles } from '../theme';

export const metadata: Metadata = {
  title: 'Work | Haoji Wang',
  description:
    'PaperHouse — the unifying notebook, the interface of thought, the time machine of mind.',
};

const whyReasons = [
  {
    summary: 'I want the best writing tool.',
    detail:
      "Existing writing tools are not good enough. I'm talking about docs, notion, ulysses, typora, etc. Do not overlook this reason. Creatives are sensitive to interfaces; that's the space they live in and the brush they create with. As McLuhan said, the medium is the message. The tool you think with shapes what you can think. I see so much friction in today's creative process, and I hope to reduce that friction so humans can unlock more creative potential.",
  },
  {
    summary: "I want an unified personal Google",
    detail:
      "An idea I can't find again is an idea I effectively never had. I write a lot but my writings are everywhere. Yes I had an inspiration and wrote it down somewhere; where is it? Apple Notes, my notebook, Google Doc, …, Claude? There should be one unifying database for everything you've ever written, with seamless search and a connected graph. Good ideas can compound, which is why they must be in one place. If we can build that corpus, it will be the strongest personal context layer.",
  },
  {
    summary:
      'I want a time machine of my mind.',
    detail:
      "Every word you put down is a snapshot of a brain state that will never exist again. Brains are powerful, but they forget and they change shape. My family preserved a few writings from my childhood; reading them now I go like “How on earth did my thoughts go there?” I was visiting a fascinating mind that I no longer recognize. Thank God I still have that access; had we lost the writing, I would have lost the portal to go back in time. I believe my stories, my words, deserve the utmost respect. But that is too much work and responsibility on my shoulder, so I'd want a personal AI to help me with organizing and remembering. The more vividly we can reconstruct the brain state behind what we wrote, the closer we get to accessing a literal time machine.",
  },
];

const timeMachine = [
  { year: '2009', href: '/paperhouse/2009' },
  { year: '2016', href: '/paperhouse/2016' },
  { year: '2026', href: '/paperhouse/2026' },
];

export default function WorkPage() {
  return (
    <main className={page.shell}>
      <div className={page.container}>
        <SiteHeader active="work" />

        <section className={`${layout.homeFirstSection} reveal reveal-1`}>
          <h1 className={`${layout.sectionTitle} ${typeStyles.homeSectionTitle}`}>
            Work
          </h1>

          <div>
            <p className={typeStyles.homeLead}>
              I&apos;m building{' '}
              <a
                href="https://paperhouse.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand no-underline hover:underline"
              >
                PaperHouse
              </a>
              , a digital notebook.
            </p>

            <WorkCarousel />

            <p className="mt-10 font-body text-lg text-text">Why?</p>
            <ol className="mt-4 space-y-4">
              {whyReasons.map((reason, index) => (
                <li key={index}>
                  <details className="group">
                    <summary className="cursor-pointer list-none font-body text-lg leading-relaxed text-text transition hover:text-brand [&::-webkit-details-marker]:hidden">
                      <span className="mr-2 inline-block text-muted transition-transform group-open:rotate-90">
                        ›
                      </span>
                      {reason.summary}
                    </summary>
                    <p className="mt-3 pl-6 font-body text-lg leading-relaxed text-text/80">
                      {reason.detail}
                    </p>
                  </details>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${layout.section} reveal reveal-2 pb-16 md:pb-24`}>
          <h2 className={`${layout.sectionTitle} ${typeStyles.homeSectionTitle}`}>
            Time Machine
          </h2>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-muted">
            To illustrate the concept of “time machine,” below are miscellaneous
            collections of what I wrote in certain years. Each era felt
            distinctively different.
          </p>
          <div className="mt-6 flex flex-col items-start gap-6">
            {timeMachine.map((room) => (
              <Link
                key={room.year}
                href={room.href}
                className="font-handwriting text-3xl text-text no-underline transition hover:text-brand hover:no-underline"
              >
                PaperHouse {room.year}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
