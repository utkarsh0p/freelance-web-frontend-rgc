import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SplitHeading from "@/components/SplitHeading";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  lede?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

/**
 * Section header with the signature line-reveal title (on scroll) and a
 * GSAP fade-up lede. Callers must NOT wrap this in a Motion Reveal.
 */
export default function SectionHeading({
  title,
  lede,
  align = "left",
  dark = false,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!lede) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".sh-lede", {
          y: 22,
          autoAlpha: 0,
          duration: 0.65,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <SplitHeading
        as="h2"
        mode="scroll"
        className={cn(
          "font-display text-4xl font-bold tracking-tight text-balance md:text-5xl",
          dark ? "text-canvas" : "text-ink",
        )}
      >
        {title}
      </SplitHeading>
      {lede && (
        <p
          className={cn(
            "sh-lede mt-5 text-lg leading-relaxed",
            dark ? "text-cream-dark" : "text-ink-soft",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
