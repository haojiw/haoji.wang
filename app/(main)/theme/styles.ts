import { measure, minHeight, space } from './tokens';

export const page = {
  shell: `${minHeight.screen} bg-bg ${space.pageX} ${space.pageY} text-text`,
  container: `mx-auto ${measure.page}`,
  contentMeasure: measure.content,
  contentPage: `mx-auto ${measure.page} flex ${minHeight.contentPage} flex-col`,
};

export const layout = {
  headerRow: 'flex items-baseline justify-between',
  homeFirstSection: space.homeFirstSection,
  section: space.section,
  sectionTitle: space.sectionTitle,
  list: space.list,
  contentStack: `${measure.content} ${space.aboutParagraphs}`,
  articleHeader: space.articleHeader,
};

export const type = {
  nav: 'font-body text-base text-muted',
  headerLink: 'font-sans text-base text-text',
  meta: 'font-body text-base text-muted',
  homeTitle: 'font-body text-2xl leading-none text-text',
  homeLead: 'font-body text-lg leading-relaxed',
  homeSectionTitle: 'font-sans text-lg leading-snug text-text',
  chineseHomeSectionTitle: 'font-sans text-lg leading-snug text-text',
  footer: `${space.footerTop} border-t border-border py-6 font-body text-base text-muted`,
  sectionLabel: 'text-lg leading-none text-muted',
  pageLabel: 'mb-8 font-body text-lg text-muted',
  chinesePageLabel: 'mb-8 font-chinese text-lg text-muted',
  linkTitle: 'block font-body text-lg leading-relaxed no-underline transition hover:text-brand hover:no-underline',
  chineseLinkTitle: 'block font-chinese text-lg leading-relaxed no-underline transition hover:text-brand hover:no-underline',
  description: 'mt-2 font-body text-base leading-relaxed text-muted',
  chineseDescription: 'mt-2 font-chinese text-base leading-relaxed text-muted',
  articleTitle: 'mt-4 max-w-2xl font-body text-2xl leading-snug text-text md:text-3xl',
  chineseArticleTitle: 'mt-4 max-w-2xl font-chinese text-2xl leading-snug text-text md:text-3xl',
  articleBody: 'mt-8 max-w-2xl space-y-5 font-body text-lg leading-relaxed',
  chineseArticleBody: 'mt-8 max-w-2xl space-y-5 font-chinese text-lg leading-relaxed',
};

export const prose = {
  root: 'mt-8 max-w-2xl space-y-5 font-body text-lg leading-relaxed',
  chineseRoot: 'mt-8 max-w-2xl space-y-5 font-chinese text-lg leading-relaxed',
  paragraph: '',
  heading2: 'mt-12 font-body text-xl leading-snug text-text',
  chineseHeading2: 'mt-12 font-chinese text-xl leading-snug text-text',
  heading3: 'mt-8 font-body text-lg leading-snug text-text',
  chineseHeading3: 'mt-8 font-chinese text-lg leading-snug text-text',
  link: 'text-brand underline decoration-brand/30 underline-offset-4 transition hover:decoration-brand',
  list: 'my-5 space-y-2 pl-6',
  unorderedList: 'list-disc',
  orderedList: 'list-decimal',
  listItem: 'pl-1',
  quote: 'my-7 border-l border-border pl-5 text-muted',
  inlineCode: 'rounded bg-border/35 px-1 py-0.5 font-mono text-[0.9em]',
  codeBlock: 'my-7 overflow-x-auto rounded bg-border/25 p-4 font-mono text-sm leading-relaxed',
  rule: 'my-10 border-t border-border',
};
