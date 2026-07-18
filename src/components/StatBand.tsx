import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { stats } from "@/data/site";

/**
 * Borderless stat strip: hairline-topped numbers that count up on scroll.
 * GSAP tree (entrance + count-up); keep Motion wrappers out of this.
 */
export default function StatBand() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".stat-cell", {
          y: 26,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        });

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
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="grid grid-cols-2 gap-x-10 gap-y-12">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-cell border-t border-ink/15 pt-6">
          <div className="font-condensed text-5xl font-semibold leading-none md:text-[56px]">
            <span className="stat-num" data-value={stat.value}>
              {stat.value}
            </span>
            {stat.suffix && (
              <sup className="text-[24px] font-bold text-saffron">
                {stat.suffix}
              </sup>
            )}
          </div>
          <div className="mt-3 font-condensed text-[13px] font-semibold uppercase tracking-wider text-muted">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
