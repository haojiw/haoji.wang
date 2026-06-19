import type { CSSProperties } from 'react';
import { colorVars } from './tokens';

export const siteThemeStyle = {
  '--color-bg': colorVars.bg,
  '--color-text': colorVars.text,
  '--color-muted': colorVars.muted,
  '--color-accent': colorVars.accent,
  '--color-brand': colorVars.brand,
  '--color-border': colorVars.border,
} as CSSProperties;
