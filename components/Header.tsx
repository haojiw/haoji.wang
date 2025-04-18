"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-8 md:py-12 sticky top-0 z-50 bg-bg/80 backdrop-blur-sm transition-all duration-300 ${scrollY > 20 ? 'py-4 md:py-6' : ''}`}>
      <nav className="flex items-center justify-between">
        <div className="text-xl md:text-xl font-body font-bold">
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
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-accent mb-1.5 transform origin-center"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-accent mb-1.5"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-accent transform origin-center"
          />
        </button>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 w-3/4 h-screen bg-bg shadow-lg z-40 flex flex-col items-center justify-center"
            >
              <motion.ul 
                className="flex flex-col space-y-8 font-sans text-xl tracking-wide text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <li>
                  <Link 
                    href="/blog" 
                    className="hover:underline block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/work" 
                    className="hover:underline block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    WORK
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="hover:underline block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    ABOUT
                  </Link>
                </li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header; 