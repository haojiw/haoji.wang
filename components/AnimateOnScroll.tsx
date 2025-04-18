"use client";

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type AnimateOnScrollProps = {
  children: ReactNode;
  variants?: {
    hidden: object;
    visible: object;
  };
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
};

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const AnimateOnScroll = ({
  children,
  variants = defaultVariants,
  className = "",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true
}: AnimateOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll; 