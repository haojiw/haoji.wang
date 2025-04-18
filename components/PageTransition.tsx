"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  
  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ 
        type: 'tween', 
        duration: 0.4,
        ease: 'easeInOut'
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 