import Image from 'next/image';
import Link from 'next/link';
import { layout, page } from './theme';

const links = [
  { label: 'work', href: '/work' },
  { label: 'blog', href: '/blog' },
  { label: 'about', href: '/about' },
];

export default function Home() {
  return (
    <main className={page.shell}>
      <div className={page.container}>
        <header>
          <span className="font-handwriting text-3xl leading-none text-text">
            haoji.wang
          </span>
        </header>

        <section
          className={`${layout.homeFirstSection} reveal flex min-h-[calc(100vh-16rem)] flex-col`}
        >
          <div className="space-y-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-body text-2xl text-text no-underline transition hover:text-brand hover:no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="https://paperhouse.ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit PaperHouse"
            className="mb-8 mt-auto block w-36 pt-16 no-underline hover:no-underline sm:w-44"
          >
            <Image
              src="/images/paperhouse-house-link.png"
              alt="PaperHouse"
              width={728}
              height={728}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </a>
        </section>
      </div>
    </main>
  );
}
