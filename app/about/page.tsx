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
                Hi, I'm Haoji. I study Computer Science and Linguistics at UCLA. I care a lot about people, and think a lot about the world around me. The goal is to make both feel a little better.
              </p>
              <p>
                Right now, I am building a voice journal to help people find clarity and peace of mind. Before LA, I grew up in Wenzhou, China, and spent my high school years in Singapore.
              </p>
              <p>
                My free time usually means food, guitar, basketball, or good conversations with good people. Thanks for stopping by, feel free to look around!
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
