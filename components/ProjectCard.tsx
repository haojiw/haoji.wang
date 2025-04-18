import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  slug: string;
  github?: string; // Optional GitHub URL
};

const ProjectCard = ({ title, description, slug, github }: ProjectCardProps) => {
  return (
    <Link 
      href={github || `/work/${slug}`} 
      className="border border-text p-6 no-underline hover:no-underline hover:bg-accent hover:text-bg transition-colors duration-300"
      target={github ? "_blank" : "_self"} // Open GitHub links in new tab
      rel={github ? "noopener noreferrer" : undefined}
    >
      <h3 className="text-xl md:text-2xl font-serif mb-3">{title}</h3>
      <p className="font-sans text-sm">{description}</p>
    </Link>
  );
};

export default ProjectCard; 