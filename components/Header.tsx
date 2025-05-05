"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll → decide once, with hysteresis
  useEffect(() => {
    const SHRINK_AT = 60;  // scrollY where we shrink
    const GROW_AT   = 10;  // scrollY where we grow back

    const onScroll = () => {
      const y = window.scrollY;

      if (!isShrunk && y > SHRINK_AT)   setIsShrunk(true);
      if ( isShrunk && y < GROW_AT)     setIsShrunk(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isShrunk]);

  // Close drawer on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen]);

  return (
    <header
      className={`
        sticky top-0 z-50 bg-bg/90 backdrop-blur-sm transition-all duration-300
        ${isShrunk ? "py-4 md:py-6" : "py-8 md:py-12"}
      `}
    >
      <nav className="flex items-center justify-between relative" ref={navRef}>
        <div className="text-xl md:text-xl font-body font-bold px-2">
          <Link href="/" className="no-underline hover:no-underline text-accent">
            haoji.wang
          </Link>
        </div>

        <div className="flex items-center">
          {/* Chinese Blog Button - Always visible on desktop */}
          <a 
            href="https://haojiw.notion.site/1ea1103b16ef807db204f3a8591f220d?pvs=4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block bg-accent hover:bg-brand hover:no-underline text-bg px-3 py-1 mr-9 rounded-lg transition-colors"
          >
            中文
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 font-sans text-lg tracking-wide">
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

          {/* Mobile: Chinese Blog Button + Hamburger */}
          <div className="md:hidden flex items-center">
            {/* Mobile Chinese Blog Button - visible when drawer is closed */}
            {!isOpen && (
              <a 
                href="https://haojiw.notion.site/1ea1103b16ef807db204f3a8591f220d?pvs=4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-brand hover:no-underline text-bg px-3 py-1 mr-4 rounded-lg transition-colors"
              >
                中文
              </a>
            )}
            
            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 z-50 relative"
              aria-label="Toggle Menu"
            >
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-accent mb-1.5 transform origin-center"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-accent mb-1.5"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-accent transform origin-center"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              /* slide in from right → left */
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}

              /* position absolute to overlay the logo */
              className="absolute top-0 left-0 w-full h-full
                        bg-bg/95 backdrop-blur-sm z-40 flex items-center"
            >
              {/* Links in one row, centred vertically */}
              <ul className="mx-auto flex flex-row gap-10 font-sans text-lg tracking-wide">
                <li>
                  <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:underline">
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link href="/work" onClick={() => setIsOpen(false)} className="hover:underline">
                    WORK
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={() => setIsOpen(false)} className="hover:underline">
                    ABOUT
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header; 