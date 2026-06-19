import Link from 'next/link';
import { type as typeStyles } from '../theme';

function EmailIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        d="M4 6.5h16v11H4v-11Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="m4.5 7 7.5 6 7.5-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932Zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.49 11.49 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className={typeStyles.footer}>
      <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-3">
        <div className="flex items-center justify-center sm:justify-start">
          <a
            href="mailto:on3hodge@gmail.com"
            className="inline-flex h-6 w-6 items-center justify-center text-muted no-underline transition hover:text-brand hover:no-underline"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        </div>

        <div className="flex justify-center">
          <Link
            href="/legacy"
            className="text-sm lowercase text-muted no-underline transition hover:text-brand hover:no-underline"
          >
            view legacy
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 sm:justify-end">
          <a
            href="https://www.linkedin.com/in/haoji-wang/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-6 w-6 items-center justify-center text-muted no-underline transition hover:text-brand hover:no-underline"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://x.com/haoji_1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-6 w-6 items-center justify-center text-muted no-underline transition hover:text-brand hover:no-underline"
            aria-label="X"
          >
            <XIcon />
          </a>
          <a
            href="https://github.com/haojiw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-6 w-6 items-center justify-center text-muted no-underline transition hover:text-brand hover:no-underline"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
