import Image from 'next/image';
import Link from 'next/link';
import ScrapbookSection from '@/components/ScrapbookSection';

export default function AboutPage() {
  return (
    <div className="py-10 md:py-16">
      <h2 className="text-4xl md:text-5xl text-accent font-serif font-normal mb-8 mt-16">
        ABOUT ME
      </h2>
      
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
            Right now, I'm building an AI wellness assistant to help people untangle their minds. 
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
            src="/about.webp"
            alt="About me"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="mb-16">
        <Link 
          href="/resume.pdf" // or change this to wherever your resume lives
          className="inline-block bg-accent text-bg py-3 px-6 font-sans text-sm uppercase tracking-wide no-underline hover:bg-accent/75 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </Link>
      </div>

      {/* Scrapbook Section */}
      <ScrapbookSection />
    </div>
  );
} 