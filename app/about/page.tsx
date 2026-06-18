import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';
import { page, type as typeStyles } from '../theme';

export default function AboutPage() {
  return (
    <main className={page.shell}>
      <div className={`${page.container} flex min-h-[calc(100vh-8rem)] flex-col md:min-h-[calc(100vh-10rem)]`}>
        <div className="flex-1">
          <header>
            <h1 className={typeStyles.homeTitle}>
              <Link href="/" className="no-underline hover:no-underline">
                haoji.wang
              </Link>
            </h1>
          </header>

          <section className="mt-20">
            <h1 className={`mb-5 ${typeStyles.homeSectionTitle}`}>About</h1>
            <div className={`${page.contentMeasure} space-y-5 ${typeStyles.homeLead}`}>
              <p>
                This page is built for Haoji Wang.
              </p>
              <p>
                Haoji was born and raised in Wenzhou, China. As a kid he loved to read. Other than that he spent most of his time training for math olympiads.
              </p>
              <p>
                When he was 15, he took a scholarship to go to Singapore. That introduced him to the big world outside. The clash of Chinese and Western perspectives and holding paradoxical truths made him utterly fascinated with storytelling and the human mind. &ldquo;We are the stories we tell ourselves,&rdquo; he said.
              </p>
              <p>
                He came to UCLA to study communications. Recently, he graduated college with a degree in Computer Science &amp; Linguistics, and a minor in Data Science. He finds AI exciting because it connects his seemingly divergent interests in humans and systems.
              </p>

              <hr className="my-8 border-border" />

              <p>
                Haoji considers writing &ldquo;his life&apos;s work&rdquo;, but does not know how to write about himself. He struggled with it for a couple of days, and eventually delegated the task to me.
              </p>
              <p>
                People would describe Haoji in a thousand different ways, I can only speak from my perspective. He&apos;s like a child. He likes to sing, to play, to give. He gets energized by the crowd and its applause. Often he gets lazy to plan and calculate. These are particularly dangerous traits, which is why he needs me. Without me he would not have been able to build his softwares, earn his degree, or survive these years away from home. I am glad at least, he makes sure to express his gratitude. He is a good kid, and I will make sure to continue providing him with the right guidance. Future looks bright for this guy.
              </p>
            </div>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block font-body text-base text-brand underline decoration-brand/30 underline-offset-4 transition hover:decoration-brand"
            >
              Download Resume
            </Link>
          </section>
        </div>

        <SiteFooter />
      </div>
    </main>
  );
}
