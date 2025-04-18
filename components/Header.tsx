"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <header className={`py-8 md:py-12 sticky top-0 z-50 bg-bg/90 backdrop-blur-sm transition-all duration-300 ${scrollY > 20 ? 'py-4 md:py-6' : ''}`}>
      <nav className="flex items-center justify-between relative" ref={navRef}>
        <div className="text-xl md:text-xl font-body font-bold px-2">
          <Link href="/" className="no-underline hover:no-underline text-accent">
            haoji.wang
          </Link>
        </div>

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

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50 relative"
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