import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { Brand } from "@/data/brands";

/**
 * Brand portfolio scroll-tell (desktop only — small screens use
 * BrandPortfolio's pinned horizontal track instead). Pinned left card
 * crossfades as each brand's text block crosses the viewport center.
 */
export default function BrandShowcase({ items }: { items: Brand[] }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        const slides = gsap.utils.toArray<HTMLElement>(".showcase-slide");
        slides.forEach((slide, i) =>
          gsap.set(slide, { autoAlpha: i === 0 ? 1 : 0 }),
        );

        let active = 0;
        const setActive = (next: number) => {
          if (next === active || !slides[next]) return;
          const prev = active;
          active = next;
          if (reduce) {
            gsap.set(slides[prev], { autoAlpha: 0 });
            gsap.set(slides[next], { autoAlpha: 1, scale: 1, rotate: 0, y: 0 });
            return;
          }
          gsap.to(slides[prev], {
            autoAlpha: 0,
            scale: 0.97,
            y: -10,
            rotate: 0,
            duration: 0.3,
            ease: "power2.in",
            overwrite: true,
          });
          // No delay: overlap with the outgoing tween so there is never a
          // blank frame between slides (replays on scroll-up via onEnterBack).
          gsap.fromTo(
            slides[next],
            { autoAlpha: 0, scale: 1.02, y: 12, rotate: 0 },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              rotate: 0,
              duration: 0.5,
              ease: "power3.out",
              overwrite: true,
            },
          );
        };

        gsap.utils
          .toArray<HTMLElement>(".showcase-block")
          .forEach((block, i) => {
            ScrollTrigger.create({
              trigger: block,
              start: "top 55%",
              end: "bottom 55%",
              onEnter: () => setActive(i),
              onEnterBack: () => setActive(i),
            });
          });
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className="mt-12">
      <div className="grid grid-cols-[1fr_1.05fr] gap-20">
        <div>
          <div className="sticky top-28 aspect-square overflow-hidden border-2 border-ink bg-white shadow-paper">
            {items.map((brand) => (
              <div
                key={brand.slug}
                className="showcase-slide absolute inset-0 flex flex-col items-center justify-center p-12"
              >
                <div className="relative w-full flex-1">
                  <img
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </div>
                <p className="mt-6 font-display text-xl font-bold">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          {items.map((brand) => (
            <div
              key={brand.slug}
              className="showcase-block flex min-h-[62svh] flex-col justify-center border-t border-line py-10 first:border-t-0"
            >
              <span className="inline-flex w-fit rounded-full bg-peach px-3.5 py-1.5 font-condensed text-[13px] font-semibold uppercase tracking-wider">
                {brand.sector}
              </span>
              <h3 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                {brand.name}
              </h3>
              <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-ink-soft">
                {brand.longDescription}
              </p>
              <Link
                to={`/brands/${brand.slug}`}
                className="group mt-7 inline-flex items-center gap-1.5 font-condensed text-[14px] font-semibold uppercase tracking-wider text-saffron hover:underline hover:underline-offset-4"
              >
                View brand
                <IconArrowUpRight
                  size={17}
                  stroke={2.2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
