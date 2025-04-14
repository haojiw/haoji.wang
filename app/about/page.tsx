import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="py-16">
      <SectionTitle>ABOUT ME</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 mb-10">
        <div>
          <p className="font-body text-lg mb-6">
            Hi, I'm Haoji.
          </p>
          <p className="font-body text-lg mb-6">
            I study Computer Science and Linguistics at UCLA.
          </p>
          <p className="font-body text-lg mb-6">
            I care a lot about people, and think a lot about the world around me. The goal is to make both feel a little better. 
            Right now, I’m building an AI wellness assistant to help people untangle their minds. 
          </p>
          <p className="font-body text-lg mb-6">
            Before LA, I grew up in Wenzhou, China, and spent my high school years in Singapore. 
            My free time usually means food, guitar, basketball, or good conversations with good people.
          </p>
          <p className="font-body text-lg">
            Thanks for stopping by, feel free to look around!
          </p>
        </div>
        <div className="relative h-80 md:h-auto">
          <Image
            src="/about.jpg"
            alt="About me"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="border-t border-text pt-16">
        <div className="mb-16">
          <Link 
            href="/resume.pdf" // or change this to wherever your resume lives
            className="inline-block bg-accent text-background py-3 px-6 font-sans text-sm uppercase tracking-wide no-underline hover:bg-text/75 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </Link>
        </div>
        <h3 className="text-2xl md:text-3xl font-serif mb-6">SKILLS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-serif text-xl mb-4">Frontend</h4>
            <ul className="font-sans text-sm space-y-2">
              <li>HTML5 / CSS3</li>
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-4">Backend</h4>
            <ul className="font-sans text-sm space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>REST API Design</li>
              <li>GraphQL</li>
              <li>MongoDB / PostgreSQL</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-4">Tools & Others</h4>
            <ul className="font-sans text-sm space-y-2">
              <li>Git / GitHub</li>
              <li>Figma / Design Systems</li>
              <li>CI/CD</li>
              <li>Jest / Testing Library</li>
              <li>Accessibility (a11y)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 