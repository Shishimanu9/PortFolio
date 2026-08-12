/** Minimal classnames joiner — avoids pulling in a dependency for
 * one function. Falsy values are filtered out. */
export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}
