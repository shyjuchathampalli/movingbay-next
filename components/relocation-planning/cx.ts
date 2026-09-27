/** Tiny helper to join class names, ignoring falsy values. */
export const cx = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");
