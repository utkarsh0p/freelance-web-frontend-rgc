import { divisions } from "@/data/site";
import { cn } from "@/lib/utils";

// Adapted from 21st.dev "Feature Section with hover effects" (Aceternity,
// @manuarora700): bordered grid where each cell gets a gradient wash and a
// growing indicator bar on hover. Re-skinned to the cream/ink/saffron tokens.

export default function DivisionsGrid() {
  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-card border border-line bg-white sm:grid-cols-2 lg:grid-cols-5">
      {divisions.map((division, index) => (
        <Division key={division.name} index={index} {...division} />
      ))}
    </div>
  );
}

function Division({
  name,
  blurb,
  icon: Icon,
  index,
}: (typeof divisions)[number] & { index: number }) {
  return (
    <div
      className={cn(
        "group/division relative flex flex-col border-line py-9 lg:border-r",
        index % 5 === 4 && "lg:border-r-0",
        index < 5 && "border-b",
        "max-lg:border-b max-lg:last:border-b-0 max-sm:border-r-0 sm:max-lg:[&:nth-child(odd)]:border-r",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 size-full opacity-0 transition duration-200 group-hover/division:opacity-100",
          index < 5
            ? "bg-gradient-to-t from-cream to-transparent"
            : "bg-gradient-to-b from-cream to-transparent",
        )}
      />
      <div className="relative z-10 mb-4 px-7 text-ink-soft">
        <Icon size={28} stroke={1.5} />
      </div>
      <div className="relative z-10 mb-2 px-7">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-line transition-all duration-200 group-hover/division:h-8 group-hover/division:bg-saffron" />
        <span className="inline-block font-display text-[17px] font-bold tracking-tight transition duration-200 group-hover/division:translate-x-2">
          {name}
        </span>
      </div>
      <p className="relative z-10 px-7 text-[13.5px] leading-relaxed text-muted">
        {blurb}
      </p>
    </div>
  );
}
