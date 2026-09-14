export type ValueIconName = "people" | "target" | "leaf";

interface ValueIconProps {
  name: ValueIconName;
}

export function ValueIcon({ name }: ValueIconProps) {
  if (name === "people") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="14" r="6" strokeWidth="1.5" />
        <circle cx="10" cy="19" r="4" strokeWidth="1.5" />
        <circle cx="38" cy="19" r="4" strokeWidth="1.5" />
        <path d="M13 38v-4c0-6 5-10 11-10s11 4 11 10v4" strokeWidth="1.5" />
        <path d="M4 37v-3c0-4 3-7 7-7 2 0 4 1 5 2" strokeWidth="1.5" />
        <path d="M44 37v-3c0-4-3-7-7-7-2 0-4 1-5 2" strokeWidth="1.5" />
      </svg>
    );
  }

  if (name === "target") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 48 48">
        <circle cx="22" cy="26" r="15" strokeWidth="1.5" />
        <circle cx="22" cy="26" r="9" strokeWidth="1.5" />
        <circle cx="22" cy="26" r="3" strokeWidth="1.5" />
        <path d="m24 24 15-15M32 9h7v7" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 48 48">
      <path
        d="M39 8C23 10 12 18 12 30c0 6 4 10 10 10 12 0 18-13 17-32Z"
        strokeWidth="1.5"
      />
      <path d="M8 42c5-10 13-18 25-26" strokeWidth="1.5" />
      <path d="M22 28c0 3 1 6 3 8M25 24h8" strokeWidth="1.5" />
    </svg>
  );
}

