import Link from 'next/link';

export type NavPage = 'home' | 'work' | 'blog' | 'about';

const navItems: { id: NavPage; label: string; href: string }[] = [
  { id: 'home', label: 'home', href: '/' },
  { id: 'work', label: 'work', href: '/work' },
  { id: 'blog', label: 'blog', href: '/blog' },
  { id: 'about', label: 'about', href: '/about' },
];

export default function SiteHeader({ active }: { active?: NavPage }) {
  return (
    <header className="flex items-baseline justify-between">
      <Link
        href="/"
        className="font-handwriting text-3xl leading-none text-text no-underline hover:no-underline"
      >
        haoji.wang
      </Link>

      <nav className="flex items-baseline gap-5 sm:gap-7">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`font-body text-lg no-underline transition hover:text-brand hover:no-underline ${
              active === item.id ? 'text-text' : 'text-muted'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
