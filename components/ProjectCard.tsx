import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  slug: string;
};

const ProjectCard = ({ title, description, slug }: ProjectCardProps) => {
  return (
    <Link 
      href={`/work/${slug}`} 
      className="border border-text p-6 no-underline hover:no-underline hover:bg-accent hover:text-bg transition-colors duration-300"
    >
      <h3 className="text-2xl md:text-3xl font-serif mb-3">{title}</h3>
      <p className="font-sans text-sm">{description}</p>
    </Link>
  );
};

export default ProjectCard; 