import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between py-16 border-b border-border">
        <div className="w-full md:w-3/5 mb-10 md:mb-0">
          <h1 className="text-6xl md:text-7xl font-serif mb-8">
            <span className="block mt-6">Haoji Wang</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif tracking-wide">
            This site is kinda like me: <br />
            Still in progress, but you'll want to check back later.
          </p>
        </div>
        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <Image
              src="/profile3.jpg"
              alt="Haoji Wang"
              fill
              sizes="(max-width: 768px) 16rem, 20rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border py-6">
        <SectionTitle>BLOG</SectionTitle>
        <p className="text-lg md:text-xl mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auc a preitum enim, ut volutpat urna. Ullamcorper blandit nec semper, suvinas maulis ac oditus.
        </p>
      </section>

      <section className="border-b border-border py-6">
        <SectionTitle>WORK</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-6">
          <ProjectCard
            title="Project One"
            description="A short description of the project"
            slug="project-one"
          />
          <ProjectCard
            title="Project Two"
            description="A short description of the project"
            slug="project-two"
          />
          <ProjectCard
            title="Project Three"
            description="A short description of the project"
            slug="project-three"
          />
        </div>
      </section>

      <section className="py-6">
        <SectionTitle>ABOUT</SectionTitle>
        <p className="text-lg md:text-xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auc a preitum enim, ut volutpat urna. Ullamcorper blandit nec semper, suvinas maulis ac oditus.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-accent text-background py-3 px-6 font-sans text-sm uppercase tracking-wide no-underline hover:bg-text/75 transition-colors duration-300"
        >
          CONTACT ME
        </Link>
      </section>
    </>
  );
} 