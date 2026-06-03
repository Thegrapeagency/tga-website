// Bento rhythm for the work grid. Index 0 is the cinematic featured tile;
// the rest alternate tall / wide / default to keep the grid lively but tidy.
const PATTERN = ["feat", "tall", "default", "wide", "default", "tall", "default", "default", "wide", "tall", "default"];

export function bentoSpan(i) {
  if (i < PATTERN.length) return PATTERN[i] === "default" ? undefined : PATTERN[i];
  // graceful continuation for any extra cases added later
  const cycle = ["default", "tall", "default", "wide"];
  const v = cycle[i % cycle.length];
  return v === "default" ? undefined : v;
}
