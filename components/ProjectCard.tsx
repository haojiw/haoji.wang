import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  slug: string;
};

const ProjectCard = ({ title, description, slug }: ProjectCardProps) => {
  return (
    <div className="border border-text p-6 hover:bg-white/5 transition-colors duration-300">
      <Link href={`/work/${slug}`} className="no-underline hover:no-underline">
        <h3 className="text-2xl md:text-3xl font-serif mb-3">{title}</h3>
        <p className="font-sans text-sm">{description}</p>
      </Link>
    </div>
  );
};

export default ProjectCard; 