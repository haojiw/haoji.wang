import { MDXRemote } from 'next-mdx-remote/rsc';
import { prose } from '../theme';
import Video from './Video';

type MarkdownRendererProps = {
  source: string;
  language?: 'en' | 'zh';
};

function Scan({
  src,
  alt,
  tilt,
}: {
  src: string;
  alt: string;
  tilt?: 'left' | 'right';
}) {
  const rotation =
    tilt === 'left' ? '-rotate-1' : tilt === 'right' ? 'rotate-1' : '';

  return (
    <figure className={`my-10 ${rotation}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-[3px] border border-border bg-white p-2 shadow-[0_18px_40px_-18px_rgba(37,34,31,0.4)] sm:p-3"
      />
    </figure>
  );
}

function ScanRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-3 [&_figure]:my-0">
      {children}
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-8 font-handwriting text-xl leading-relaxed text-accent sm:text-2xl">
      {children}
    </aside>
  );
}

function Signature({ name, date }: { name: string; date: string }) {
  return (
    <div className="!mt-20 text-right">
      <p className="font-handwriting text-2xl text-text sm:text-3xl">{name}</p>
      <p className="mt-1 font-body text-base text-muted">{date}</p>
    </div>
  );
}

type SpacerSize = 'sm' | 'md' | 'lg';

const spacerHeights: Record<SpacerSize, string> = {
  sm: 'h-4',
  md: 'h-8',
  lg: 'h-12',
};

function Spacer({ size = 'md' }: { size?: SpacerSize }) {
  return (
    <div
      aria-hidden="true"
      className={`!my-0 ${spacerHeights[size] ?? spacerHeights.md}`}
    />
  );
}

function PdfEmbed({ src, title }: { src: string; title: string }) {
  return (
    <figure className="!my-8 overflow-hidden rounded-[3px] border border-border bg-white shadow-[0_18px_40px_-18px_rgba(37,34,31,0.4)]">
      <figcaption className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 font-body text-sm text-muted sm:px-5">
        <span>{title}</span>
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-brand underline decoration-brand/30 underline-offset-4 transition hover:decoration-brand"
        >
          Open PDF
        </a>
      </figcaption>
      <iframe
        src={`${src}#view=FitH`}
        title={title}
        loading="lazy"
        className="h-[72vh] min-h-[34rem] w-full bg-white sm:min-h-[42rem]"
      />
    </figure>
  );
}

function createComponents(language: 'en' | 'zh') {
  const isChinese = language === 'zh';

  return {
    h1: (props: any) => (
      <h1 {...props} className={isChinese ? prose.chineseHeading1 : prose.heading1} />
    ),
    h2: (props: any) => (
      <h2 {...props} className={isChinese ? prose.chineseHeading2 : prose.heading2} />
    ),
    h3: (props: any) => (
      <h3 {...props} className={isChinese ? prose.chineseHeading3 : prose.heading3} />
    ),
    p: (props: any) => <p {...props} className={prose.paragraph} />,
    a: (props: any) => <a {...props} className={prose.link} />,
    ul: (props: any) => (
      <ul {...props} className={`${prose.list} ${prose.unorderedList}`} />
    ),
    ol: (props: any) => (
      <ol {...props} className={`${prose.list} ${prose.orderedList}`} />
    ),
    li: (props: any) => <li {...props} className={prose.listItem} />,
    blockquote: (props: any) => (
      <blockquote
        {...props}
        className={isChinese ? prose.chineseQuote : prose.quote}
      />
    ),
    code: ({ className, ...props }: any) => (
      <code className={className ?? prose.inlineCode} {...props} />
    ),
    pre: (props: any) => <pre {...props} className={prose.codeBlock} />,
    hr: (props: any) => <hr {...props} className={prose.rule} />,
    img: ({ src, alt }: any) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt ?? ''}
        loading="lazy"
        className="my-10 w-full rounded-[3px] border border-border bg-white p-2 shadow-[0_18px_40px_-18px_rgba(37,34,31,0.4)] sm:p-3"
      />
    ),
    Video,
    Scan,
    ScanRow,
    Note,
    Signature,
    PdfEmbed,
    Spacer,
    Space: Spacer,
  };
}

export default function MarkdownRenderer({
  source,
  language = 'en',
}: MarkdownRendererProps) {
  return (
    <div className={language === 'zh' ? prose.chineseRoot : prose.root}>
      <MDXRemote source={source} components={createComponents(language)} />
    </div>
  );
}
