import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { brands, type Brand } from "@/data/brands";
import { cn } from "@/lib/utils";

const colA = brands.filter((_, i) => i % 2 === 0);
const colB = brands.filter((_, i) => i % 2 === 1);

function Card({ brand, tilt }: { brand: Brand; tilt: "left" | "right" }) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-white p-5 shadow-[0_16px_36px_rgb(32_21_21/0.08)]",
        tilt === "left" ? "-rotate-[1.2deg]" : "rotate-[1.2deg]",
      )}
    >
      <div className="relative aspect-[5/4]">
        <img
          src={brand.image}
          alt={`${brand.name} logo`}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
      <p className="mt-3 text-center text-[13px] font-semibold text-ink-soft">
        {brand.name}
      </p>
    </div>
  );
}

/**
 * Infinite dual-column brand marquee for the hero: columns drift in opposite
 * directions, edges dissolve via mask. All nine brands cycle through.
 * Pauses to a slow drift on hover; static under reduced motion.
 */
export default function HeroMarquee() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const up = gsap.to(".marquee-up", {
          yPercent: -50,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
        const down = gsap.fromTo(
          ".marquee-down",
          { yPercent: -50 },
          { yPercent: 0, duration: 36, ease: "none", repeat: -1 },
        );

        const el = scope.current!;
        const slow = () => {
          gsap.to(up, { timeScale: 0.25, duration: 0.6 });
          gsap.to(down, { timeScale: 0.25, duration: 0.6 });
        };
        const resume = () => {
          gsap.to(up, { timeScale: 1, duration: 0.6 });
          gsap.to(down, { timeScale: 1, duration: 0.6 });
        };
        el.addEventListener("mouseenter", slow);
        el.addEventListener("mouseleave", resume);
        return () => {
          el.removeEventListener("mouseenter", slow);
          el.removeEventListener("mouseleave", resume);
        };
      });
    },
    { scope },
  );

  const mask =
    "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)";

  return (
    <div
      ref={scope}
      className="relative hidden h-[600px] overflow-hidden lg:block"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
      aria-hidden
    >
      <div className="grid grid-cols-2 gap-6 px-2">
        <div className="marquee-up flex flex-col gap-6">
          {[...colA, ...colA].map((brand, i) => (
            <Card key={`${brand.slug}-${i}`} brand={brand} tilt="left" />
          ))}
        </div>
        <div className="-mt-20">
          <div className="marquee-down flex flex-col gap-6">
            {[...colB, ...colB].map((brand, i) => (
              <Card key={`${brand.slug}-${i}`} brand={brand} tilt="right" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
