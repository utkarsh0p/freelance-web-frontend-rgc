import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { Brand } from "@/data/brands";

/**
 * Brand portfolio scroll-tell.
 * Desktop: pinned left card crossfades as each brand's text block crosses
 * the viewport center.
 * Mobile: sticky-stack deck; each card pins near the top and scales/dims as
 * the next card slides over it (scrubbed by scroll).
 */
export default function BrandShowcase({ items }: { items: Brand[] }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Mobile deck: covered card recedes as the next one arrives.
      mm.add(
        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        () => {
          const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
          cards.forEach((card, i) => {
            const next = cards[i + 1];
            if (!next) return;
            gsap.to(card.querySelector(".stack-inner"), {
              scale: 0.93,
              opacity: 0.5,
              transformOrigin: "center top",
              ease: "none",
              scrollTrigger: {
                trigger: next,
                start: "top bottom",
                end: "top 88px",
                scrub: true,
              },
            });
          });
        },
      );

      // Desktop: pinned card crossfades with the aligned block.
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
            scale: 0.94,
            y: -18,
            rotate: -2,
            duration: 0.35,
            ease: "power2.in",
            overwrite: true,
          });
          gsap.fromTo(
            slides[next],
            { autoAlpha: 0, scale: 1.06, y: 26, rotate: 2 },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              rotate: 0,
              duration: 0.55,
              ease: "power3.out",
              delay: 0.12,
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
    <div ref={scope} className="mt-10 lg:mt-12">
      {/* ---- Mobile: sticky-stack deck ---- */}
      <div className="space-y-8 lg:hidden">
        {items.map((brand, i) => (
          <div
            key={brand.slug}
            className="stack-card sticky top-[88px]"
            style={{ zIndex: i + 1 }}
          >
            <div className="stack-inner border border-line bg-white p-6 shadow-[0_18px_40px_rgb(32_21_21/0.10)]">
              <div className="relative h-36 border border-line">
                <img
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  className="absolute inset-0 h-full w-full object-contain p-4"
                />
              </div>
              <span className="mt-5 inline-flex w-fit rounded-full bg-peach px-3 py-1 text-[12px] font-semibold">
                {brand.sector}
              </span>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">
                {brand.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {brand.description}
              </p>
              <Link
                to={`/brands/${brand.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 font-semibold text-saffron"
              >
                View brand
                <IconArrowUpRight size={16} stroke={2.2} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ---- Desktop: pinned crossfade showcase ---- */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <div className="sticky top-28 aspect-square overflow-hidden border border-line bg-white shadow-[0_24px_48px_rgb(32_21_21/0.08)]">
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
              className="showcase-block flex min-h-[62vh] flex-col justify-center border-t border-line py-10 first:border-t-0"
            >
              <span className="inline-flex w-fit rounded-full bg-peach px-3.5 py-1.5 text-[13px] font-semibold">
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
                className="group mt-7 inline-flex items-center gap-1.5 font-semibold text-saffron hover:underline hover:underline-offset-4"
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
