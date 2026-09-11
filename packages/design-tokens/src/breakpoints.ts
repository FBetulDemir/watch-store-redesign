export const breakpoints = {
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1440,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const minWidth = (breakpoint: Breakpoint): string =>
  `(min-width: ${breakpoints[breakpoint]}px)`;

