import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from './data';

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <h2 className="text-4xl md:text-5xl text-accent font-serif2 font-bold mb-8 mt-16">
        WORK
      </h2>
      <p className="font-body text-lg mb-12">
        Some things I've worked on
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard 
            key={project.slug}
            title={project.title}
            description={project.description}
            slug={project.slug}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
} 