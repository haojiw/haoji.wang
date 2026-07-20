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

        <section className={`${layout.homeFirstSection} reveal`}>
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
        </section>
      </div>
    </main>
  );
}
