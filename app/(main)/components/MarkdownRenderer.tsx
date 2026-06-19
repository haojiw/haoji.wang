import { MDXRemote } from 'next-mdx-remote/rsc';
import { prose } from '../theme';
import Video from './Video';

type MarkdownRendererProps = {
  source: string;
  language?: 'en' | 'zh';
};

function createComponents(language: 'en' | 'zh') {
  const isChinese = language === 'zh';

  return {
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
      <blockquote {...props} className={prose.quote} />
    ),
    code: ({ className, ...props }: any) => (
      <code className={className ?? prose.inlineCode} {...props} />
    ),
    pre: (props: any) => <pre {...props} className={prose.codeBlock} />,
    hr: (props: any) => <hr {...props} className={prose.rule} />,
    Video,
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
