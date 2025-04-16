import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-8 md:py-12">
      <nav className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="text-xl md:text-xl font-body font-bold mb-4 md:mb-0">
          <Link href="/" className="no-underline hover:no-underline text-accent">
            haoji.wang
          </Link>
        </div>
        <ul className="flex space-x-8 font-sans text-lg tracking-wide">
          <li>
            <Link href="/blog" className="hover:underline">
              BLOG
            </Link>
          </li>
          <li>
            <Link href="/work" className="hover:underline">
              WORK
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 