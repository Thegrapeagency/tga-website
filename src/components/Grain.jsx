// Fixed, full-screen film-grain overlay. Pure SVG turbulence, no asset.
// Sits above everything, ignores pointer events, blends softly.
export default function Grain() {
  return <div className="grain" aria-hidden="true" />;
}
