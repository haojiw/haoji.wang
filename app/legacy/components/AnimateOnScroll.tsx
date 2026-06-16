"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

type AnimateOnScrollProps = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  duration?: number;
  /** How much of the element must be in view (0 – 1, "some", or "all") */
  amount?: number | "some" | "all";
  once?: boolean;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimateOnScroll = ({
  children,
  variants = defaultVariants,
  className = "",
  delay = 0,
  duration = 0.5,
  amount = 0.1,
  once = true,
}: AnimateOnScrollProps) => {
  const ref = useRef(null);

  // framer‑motion v7: use “amount”, not “threshold”
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
