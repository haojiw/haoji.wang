import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import { layout, page, type as typeStyles } from '../theme';

export const metadata: Metadata = {
  title: 'About | Haoji Wang',
  description: 'This page is built for Haoji Wang.',
};

const linkRows = [
  [
    { label: 'twitter', href: 'https://x.com/haoji_w' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/haoji-wang/' },
    { label: 'github', href: 'https://github.com/haojiw' },
  ],
  [
    { label: 'instagram', href: 'https://www.instagram.com/haoji.wang' },
    { label: 'youtube', href: 'https://www.youtube.com/@HaojiGuitar' },
    {
      label: 'xiaohongshu',
      href: 'https://www.xiaohongshu.com/user/profile/5e6b003d000000000100a2ec',
    },
  ],
];

export default function AboutPage() {
  return (
    <main className={page.shell}>
      <div className={page.container}>
        <SiteHeader active="about" />

        <section className={`${layout.homeFirstSection} reveal`}>
          <h1 className={`${layout.sectionTitle} ${typeStyles.homeSectionTitle}`}>
            About
          </h1>
          <div className={`${layout.contentStack} ${typeStyles.homeLead}`}>
            <p>This page is built for Haoji Wang.</p>
            <p>
              Haoji was born and raised in Wenzhou, China. As the son of two
              math teachers, he spent much of his childhood training for Math
              Olympiads. The only extracurricular his mom sent him to was
              public speaking, and he loved anything that involves a stage and
              an audience, be it singing, presenting, speeches, or standup
              comedy.
            </p>
            <p>
              At 15, he took a scholarship to study in Singapore. Those years
              introduced him to the big world outside. The blend of Eastern
              and Western perspectives, and the art in translating his
              thoughts, made him utterly fascinated with storytelling and the
              human mind.
            </p>
            <p>
              Haoji recently graduated from UCLA with a degree in Computer
              Science &amp; Linguistics, and a minor in Data Science. He finds
              AI exciting, since it bridges his interests in systems and
              humans. What we build in this frontier will define our times.
            </p>
          </div>

          <div className="mt-12 mr-auto grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4">
            <figure className="relative aspect-square overflow-hidden bg-black/5">
              <Image
                src="/images/haoji/pic1.jpg"
                alt="Haoji in graduation regalia by a campus fountain"
                fill
                unoptimized
                sizes="(max-width: 640px) 46vw, 360px"
                className="object-cover object-[75%_center] transition-transform duration-500 hover:scale-[1.02]"
              />
            </figure>
            <figure className="relative aspect-square overflow-hidden bg-black/5">
              <Image
                src="/images/haoji/pic2.jpg"
                alt="Haoji in graduation regalia beside a campus archway"
                fill
                unoptimized
                sizes="(max-width: 640px) 46vw, 360px"
                className="object-cover object-[30%_center] transition-transform duration-500 hover:scale-[1.02]"
              />
            </figure>
          </div>

          <div className="mt-20">
            <p className="font-body text-lg text-muted">
              email:{' '}
              <a
                href="mailto:haoji.one@gmail.com"
                className="text-brand no-underline hover:underline"
              >
                haoji.one@gmail.com
              </a>
            </p>
            <div className="mt-5 space-y-2">
              {linkRows.map((row, index) => (
                <div key={index} className="flex flex-wrap gap-x-6">
                  {row.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-lg text-text no-underline transition hover:text-brand"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block font-body text-lg text-brand underline decoration-brand/30 underline-offset-4 transition hover:decoration-brand"
          >
            download resume
          </Link>
        </section>
      </div>
    </main>
  );
}
