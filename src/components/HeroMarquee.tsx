import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { brands, type Brand } from "@/data/brands";
import { cn } from "@/lib/utils";

const colA = brands.filter((_, i) => i % 2 === 0);
const colB = brands.filter((_, i) => i % 2 === 1);

/** Desktop column card: logo plate + brand name. */
function ColumnCard({ brand, tilt }: { brand: Brand; tilt: "left" | "right" }) {
  return (
    <div
      className={cn(
        "border-2 border-ink bg-white p-5 shadow-paper-sm",
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
      <p className="mt-3 text-center font-condensed text-[12px] font-semibold uppercase tracking-wider text-ink-soft">
        {brand.name}
      </p>
    </div>
  );
}

/** Mobile track tile: small logo only. */
function Tile({ brand }: { brand: Brand }) {
  return (
    <div className="w-[92px] shrink-0 border-2 border-ink bg-white p-3 shadow-paper-sm">
      <div className="relative aspect-square">
        <img
          src={brand.image}
          alt={`${brand.name} logo`}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

function TileSet({ items }: { items: Brand[] }) {
  return (
    <div className="flex gap-4 pr-4">
      {items.map((brand) => (
        <Tile key={brand.slug} brand={brand} />
      ))}
    </div>
  );
}

/**
 * Hero brand marquee.
 * Desktop (lg+): two vertical columns drifting in opposite directions
 * beside the hero copy (the original approved treatment).
 * Mobile (<lg): two horizontal tracks of small logo tiles flowing in
 * opposite directions below the CTAs.
 * Hover slows desktop columns; reduced motion leaves everything static.
 */
export default function HeroMarquee() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
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
        },
      );

      mm.add(
        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.to(".track-left", {
            xPercent: -50,
            duration: 26,
            ease: "none",
            repeat: -1,
          });
          gsap.fromTo(
            ".track-right",
            { xPercent: -50 },
            { xPercent: 0, duration: 30, ease: "none", repeat: -1 },
          );
        },
      );
    },
    { scope },
  );

  const vMask =
    "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)";
  const hMask =
    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)";

  return (
    <div ref={scope}>
      {/* ---- Mobile: two opposite horizontal tracks ---- */}
      <div className="space-y-4 lg:hidden" aria-hidden>
        <div
          className="overflow-hidden py-1"
          style={{ maskImage: hMask, WebkitMaskImage: hMask }}
        >
          <div className="track-left flex w-max">
            <TileSet items={colA} />
            <TileSet items={colA} />
          </div>
        </div>
        <div
          className="overflow-hidden py-1"
          style={{ maskImage: hMask, WebkitMaskImage: hMask }}
        >
          <div className="track-right flex w-max">
            <TileSet items={colB} />
            <TileSet items={colB} />
          </div>
        </div>
      </div>

      {/* ---- Desktop: two opposite vertical columns ---- */}
      <div
        className="relative hidden h-[600px] overflow-hidden lg:block"
        style={{ maskImage: vMask, WebkitMaskImage: vMask }}
        aria-hidden
      >
        <div className="grid grid-cols-2 gap-6 px-2">
          <div className="marquee-up flex flex-col gap-6">
            {[...colA, ...colA].map((brand, i) => (
              <ColumnCard key={`${brand.slug}-${i}`} brand={brand} tilt="left" />
            ))}
          </div>
          <div className="-mt-20">
            <div className="marquee-down flex flex-col gap-6">
              {[...colB, ...colB].map((brand, i) => (
                <ColumnCard
                  key={`${brand.slug}-${i}`}
                  brand={brand}
                  tilt="right"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
