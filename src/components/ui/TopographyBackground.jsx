/**
 * A quiet topographic contour-line motif in the hero background — a nod to
 * Dhiraj's home in Nepal's hills, rendered like elevation lines on a map.
 * Pure CSS/SVG, no images, respects prefers-reduced-motion by simply not
 * animating (the lines are static; only opacity breathes very slowly).
 */
export default function TopographyBackground() {
  const lines = [
    "M-100,120 C150,60 350,180 650,90 S950,40 1300,140",
    "M-100,220 C120,150 380,260 620,180 S980,130 1300,240",
    "M-100,320 C160,260 340,360 660,270 S960,220 1300,340",
    "M-100,60 C130,10 360,110 640,30 S940,-10 1300,70",
  ];
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35] dark:opacity-[0.25]"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {lines.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity={0.12 + i * 0.03}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
