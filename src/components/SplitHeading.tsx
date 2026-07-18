import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsap";

type Props = {
  as?: "h1" | "h2" | "h3" | "blockquote";
  /** "load" plays immediately (above-the-fold titles); "scroll" waits for viewport entry. */
  mode?: "load" | "scroll";
  className?: string;
  children: React.ReactNode;
};

/**
 * The site's signature masked line-reveal for display type (same move as the
 * hero). Splits after fonts load so line breaks are final; renders plain and
 * visible under reduced motion or before hydration. GSAP tree only.
 */
export default function SplitHeading({
  as: Tag = "h2",
  mode = "scroll",
  className,
  children,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- polymorphic tag ref
  const ref = useRef<any>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let split: SplitText | undefined;
        let tween: gsap.core.Tween | undefined;
        let cancelled = false;

        gsap.set(el, { autoAlpha: 0 });
        // Race the font load so a stalled font can never leave headings hidden.
        Promise.race([
          document.fonts.ready,
          new Promise((resolve) => setTimeout(resolve, 700)),
        ]).then(() => {
          if (cancelled) {
            gsap.set(el, { autoAlpha: 1 });
            return;
          }
          split = SplitText.create(el, { type: "lines", mask: "lines" });
          gsap.set(el, { autoAlpha: 1 });
          tween = gsap.from(split.lines, {
            yPercent: 110,
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.out",
            ...(mode === "scroll"
              ? {
                  scrollTrigger: { trigger: el, start: "top 85%", once: true },
                }
              : {}),
          });
        });

        return () => {
          cancelled = true;
          tween?.scrollTrigger?.kill();
          tween?.kill();
          split?.revert();
          gsap.set(el, { autoAlpha: 1 });
        };
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
