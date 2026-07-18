import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { stats } from "@/data/site";

/** Count-up stat cards driven by GSAP ScrollTrigger (GSAP tree; no Motion here). */
export default function StatBand() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        const target = Number(el.dataset.value ?? 0);
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.4,
          ease: "power2.out",
          snap: { value: 1 },
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(counter.value));
          },
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-card border border-line bg-white px-8 py-9"
        >
          <div className="font-display text-[52px] font-extrabold leading-none tracking-tight">
            <span className="stat-num" data-value={stat.value}>
              {stat.value}
            </span>
            {stat.suffix && (
              <sup className="text-[24px] font-bold text-saffron">
                {stat.suffix}
              </sup>
            )}
          </div>
          <div className="mt-3 text-[14px] font-medium text-muted">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
