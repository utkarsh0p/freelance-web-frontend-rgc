import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { IconArrowRight } from "@tabler/icons-react";
import { gsap } from "@/lib/gsap";
import type { Brand } from "@/data/brands";
import BrandCard from "@/components/BrandCard";
import Button from "@/components/Button";
import SplitHeading from "@/components/SplitHeading";

/**
 * "The brand portfolio" — full-viewport pinned section for small screens
 * (<1024px; desktop uses BrandShowcase's crossfade instead). Vertical scroll
 * drives the card track horizontally (scrubbed) until the last card is
 * fully in view. Reduced motion: no pin; native overflow-x-auto strip.
 */
export default function BrandPortfolio({ items }: { items: Brand[] }) {
  const scope = useRef<HTMLElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = scope.current;
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!section || !wrap || !track) return;

      const mm = gsap.matchMedia();
      mm.add(
        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        () => {
          // Function-based so every ScrollTrigger.refresh() re-measures;
          // invalidateOnRefresh makes the tween re-read x().
          const distance = () =>
            Math.max(0, track.scrollWidth - wrap.clientWidth);

          gsap.to(track, {
            x: () => -distance(),
            ease: "none", // 1:1 scroll-to-travel mapping
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => "+=" + distance(),
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // One-time fade-up for the intro para (mirrors SectionHeading's lede).
          gsap.from(".bp-lede", {
            y: 22,
            autoAlpha: 0,
            duration: 0.65,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 80%", once: true },
          });
        },
      );
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      className="flex min-h-[100svh] flex-col gap-y-5 pt-[84px] pb-6 md:gap-y-6 md:pt-[92px] md:pb-8 [@media(max-height:730px)]:gap-y-2 [@media(max-height:730px)]:pt-[70px] [@media(max-height:730px)]:pb-4"
    >
      {/* Header row: heading left | para right (stacked on mobile) */}
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-12">
          <SplitHeading
            as="h2"
            mode="scroll"
            className="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl"
          >
            The brand portfolio
          </SplitHeading>
          <p className="bp-lede max-w-[38ch] text-[15px] leading-relaxed text-ink-soft md:pb-1.5 md:text-right md:text-lg">
            Nine brands across food, fitness, fashion, wellness, education and
            more.
          </p>
        </div>
      </div>

      {/* Track viewport: clipped while pinned; native swipe strip under reduced motion */}
      <div
        ref={wrapRef}
        className="flex min-h-0 flex-1 items-center overflow-x-clip motion-reduce:overflow-x-auto"
      >
        <div
          ref={trackRef}
          className="flex w-max gap-5 py-2 pl-5 pr-5 will-change-transform md:gap-6 md:pl-[max(2rem,calc((100vw_-_1200px)/2_+_2rem))] md:pr-[max(2rem,calc((100vw_-_1200px)/2_+_2rem))] [@media(max-height:730px)]:py-1"
        >
          {items.map((brand) => (
            <div
              key={brand.slug}
              className="grid w-[272px] shrink-0 md:w-[330px] [@media(max-height:730px)]:max-md:w-[248px] [@media(max-height:730px)]:md:w-[304px]"
            >
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <Button variant="dark" to="/brands">
          Explore all brands
          <IconArrowRight size={17} stroke={2.2} />
        </Button>
      </div>
    </section>
  );
}
