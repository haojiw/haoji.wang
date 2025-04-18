"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  slug: string;
  github?: string; // Optional GitHub URL
};

const ProjectCard = ({ title, description, slug, github }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      <Link 
        href={github || `/work/${slug}`} 
        className="block border border-text p-6 no-underline hover:no-underline hover:bg-accent hover:text-bg transition-all duration-300 h-full"
        target={github ? "_blank" : "_self"} // Open GitHub links in new tab
        rel={github ? "noopener noreferrer" : undefined}
      >
        <motion.h3 
          className="text-xl md:text-2xl font-serif mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="font-sans text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
      </Link>
    </motion.div>
  );
};

export default ProjectCard; 