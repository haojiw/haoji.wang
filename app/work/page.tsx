import ProjectCard from '@/components/ProjectCard';

// This is a placeholder. In a real implementation, you'd fetch actual projects.
const PROJECTS = [
  {
    title: 'Project One',
    description: 'A short description of the project',
    slug: 'project-one',
  },
  {
    title: 'Project Two',
    description: 'A short description of the project',
    slug: 'project-two',
  },
  {
    title: 'Project Three',
    description: 'A short description of the project',
    slug: 'project-three',
  },
  {
    title: 'Project Four',
    description: 'A short description of the project',
    slug: 'project-four',
  },
  {
    title: 'Project Five',
    description: 'A short description of the project',
    slug: 'project-five',
  },
  {
    title: 'Project Six',
    description: 'A short description of the project',
    slug: 'project-six',
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <h2 className="text-4xl md:text-5xl text-accent font-serif2 font-bold mb-8 mt-16">
        WORK
      </h2>
      <p className="font-body text-lg mb-12">
        Things I've built.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard 
            key={project.slug}
            title={project.title}
            description={project.description}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
} 