import { motion, useReducedMotion } from "motion/react";
import { divisions } from "@/data/site";
import { cn } from "@/lib/utils";

// Desktop grid adapted from 21st.dev "Feature Section with hover effects"
// (Aceternity, @manuarora700): bordered grid, gradient wash + growing
// indicator bar on hover. Re-skinned to the cream/ink/saffron tokens.
// Mobile gets a compact 2-column cell grid instead of the long list.

export default function DivisionsGrid() {
  return (
    <>
      {/* Mobile / tablet: compact 2-col grid, icon + name only */}
      <div className="grid grid-cols-2 overflow-hidden border-2 border-ink bg-white shadow-paper lg:hidden">
        {divisions.map((division, index) => (
          <MobileCell key={division.name} index={index} {...division} />
        ))}
      </div>

      {/* Desktop: full bordered hover grid */}
      <div className="hidden grid-cols-5 overflow-hidden border-2 border-ink bg-white shadow-paper lg:grid">
        {divisions.map((division, index) => (
          <Division key={division.name} index={index} {...division} />
        ))}
      </div>
    </>
  );
}

function MobileCell({
  name,
  icon: Icon,
  index,
}: (typeof divisions)[number] & { index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.45,
        delay: (index % 2) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "flex items-center gap-3 border-line p-4 transition-colors duration-150 active:bg-peach",
        index % 2 === 0 && "border-r",
        index < divisions.length - 2 && "border-b",
      )}
    >
      <span className="text-saffron">
        <Icon size={22} stroke={1.6} />
      </span>
      <span className="font-display text-[13.5px] font-bold leading-tight">
        {name}
      </span>
    </motion.div>
  );
}

function Division({
  name,
  blurb,
  icon: Icon,
  index,
}: (typeof divisions)[number] & { index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        delay: (index % 5) * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group/division relative flex flex-col border-line py-9 lg:border-r",
        index % 5 === 4 && "lg:border-r-0",
        index < 5 && "border-b",
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
    </motion.div>
  );
}
