// Tiny module-level store for the "card-expand" transition: the viewport rect
// of the tile that was tapped to open a case. The case sheet reads it to grow
// out of that tile (and shrink back into it on close). Falls back gracefully
// when empty (e.g. deep-links) — the sheet then uses a plain slide-up.

let origin = null; // { slug, rect: {top,left,width,height} } | null

export function setOpenOrigin(slug, el) {
  if (!el) { origin = null; return; }
  const r = el.getBoundingClientRect();
  origin = { slug, rect: { top: r.top, left: r.left, width: r.width, height: r.height } };
}

export function takeOpenOrigin(slug) {
  // Consume the stored origin if it matches the requested slug.
  if (origin && origin.slug === slug) return origin.rect;
  return null;
}

// Best-effort current rect of a tile in the DOM (used to shrink back on close).
export function currentTileRect(slug) {
  const el = document.querySelector(`[data-tile="${slug}"]`);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { top: r.top, left: r.left, width: r.width, height: r.height };
}
