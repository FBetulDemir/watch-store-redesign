export function cx(...classNames: Array<string | undefined>): string {
  return classNames.filter(Boolean).join(" ");
}

