export const typography = {
  family: {
    sans: '"Inter", "Helvetica Neue", Arial, sans-serif',
    serif: '"Cormorant Garamond", Georgia, serif',
  },
  size: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "clamp(2rem, 4vw, 3.5rem)",
    display: "clamp(3rem, 7vw, 6.5rem)",
  },
  lineHeight: {
    tight: 1.05,
    heading: 1.15,
    body: 1.6,
  },
  letterSpacing: {
    normal: "0",
    caps: "0.18em",
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },
} as const;

