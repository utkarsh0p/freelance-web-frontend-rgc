import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { IconArrowRight, IconBrandWhatsapp } from "@tabler/icons-react";
import { gsap, SplitText } from "@/lib/gsap";
import { site, aboutCopy, chairmanCopy, contactCopy } from "@/data/site";
import { brands } from "@/data/brands";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import SplitHeading from "@/components/SplitHeading";
import Reveal from "@/components/Reveal";
import BrandPortfolio from "@/components/BrandPortfolio";
import BrandShowcase from "@/components/BrandShowcase";
import { useMediaQuery } from "@/lib/useMediaQuery";
import DivisionsGrid from "@/components/DivisionsGrid";
import HeroMarquee from "@/components/HeroMarquee";
import StatBand from "@/components/StatBand";
import PageMeta from "@/components/PageMeta";

function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(".hero-title", {
          type: "lines",
          mask: "lines",
        });
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(split.lines, {
            yPercent: 110,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
          })
          .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.45")
          .from(".hero-cta", { y: 16, opacity: 0, duration: 0.5 }, "-=0.35")
          .from(
            ".hero-visual",
            { y: 44, opacity: 0, duration: 0.9 },
            "-=0.4",
          );
        return () => split.revert();
      });
    },
    { scope },
  );

  return (
    <section ref={scope} className="mx-auto max-w-[1200px] px-5 md:px-8">
      <div className="grid items-center gap-12 pb-16 pt-12 md:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:pb-24">
        <div>
          <h1 className="hero-title font-display text-[44px] font-extrabold leading-[1.02] tracking-tight md:text-[76px]">
            Building brands with <span className="text-saffron">purpose.</span>
          </h1>
          <p className="hero-sub mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
            A visionary conglomerate built on innovation, integrity, and divine
            inspiration. Ten industries, nine brands, one vision.
          </p>
          <div className="hero-cta mt-9 flex flex-wrap gap-4">
            <Button variant="primary" to="/brands">
              Explore our brands
              <IconArrowRight size={17} stroke={2.2} />
            </Button>
            <Button variant="outline" href={site.whatsapp.href}>
              <IconBrandWhatsapp size={18} stroke={2} />
              Message us
            </Button>
          </div>
        </div>

        <div className="hero-visual min-w-0">
          <HeroMarquee />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  // Conditional mount (not CSS hiding) so only the active variant's GSAP
  // runs and SplitText never measures a display:none heading.
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <PageMeta
        title="RAI Group of Companies | Building brands with purpose"
        description="RESPLENDENT ADISHAKTI IMPERIUM GROUP is a diversified Indian conglomerate operating across ten industries with nine brands, from Crushburg to Gurukul."
      />

      <Hero />

      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          <div>
            <SectionHeading
              title="A conglomerate rooted in values"
              lede={aboutCopy.paragraphs[0]}
            />
            <Reveal delay={0.25}>
              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-1.5 font-semibold text-saffron hover:underline hover:underline-offset-4"
              >
                About the group
                <IconArrowRight size={16} stroke={2.2} />
              </Link>
            </Reveal>
          </div>
          <StatBand />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 lg:py-24">
        <SectionHeading
          title="Ten sectors. One vision."
          lede="Every venture is driven by a passion for quality, customer satisfaction, and sustainable growth."
        />
        <div className="mt-12">
          <DivisionsGrid />
        </div>
      </section>

      {isDesktop ? (
        <section className="mx-auto max-w-[1200px] px-5 py-20 md:px-8">
          <SectionHeading
            title="The brand portfolio"
            lede="Nine brands across food, fitness, fashion, wellness, education and more."
          />
          <BrandShowcase items={brands} />
        </section>
      ) : (
        <BrandPortfolio items={brands} />
      )}

      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[360px_1fr] lg:gap-20">
          <Reveal>
            <div className="overflow-hidden border border-line">
              <img
                src="/assets/images/chairman-suraj-kumar-rai.jpg"
                alt={chairmanCopy.name}
                width={1024}
                height={1536}
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="font-display text-[28px] font-semibold leading-[1.35] tracking-tight md:text-[34px]">
              "Growth with purpose, strength with values, and success with{" "}
              <span className="text-saffron">gratitude.</span>"
            </blockquote>
            <p className="mt-6 text-[14px] font-semibold uppercase tracking-[0.06em] text-muted">
              {chairmanCopy.name} · {chairmanCopy.role}
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-saffron hover:underline hover:underline-offset-4"
            >
              Read the chairman's story
              <IconArrowRight size={16} stroke={2.2} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 lg:py-24">
        <div className="bg-ink px-8 py-16 text-center text-canvas md:px-16">
          <SplitHeading
            as="h2"
            mode="scroll"
            className="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl"
          >
            {contactCopy.heading}
          </SplitHeading>
            <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-relaxed text-cream-dark">
              Have a question about our business, or want to see if we match
              your needs? We're always happy to meet new customers.
            </p>
            <div className="mt-9 flex justify-center">
              <Button variant="primary" href={site.whatsapp.href}>
                <IconBrandWhatsapp size={18} stroke={2} />
                Message us
              </Button>
            </div>
          <p className="mt-6 text-[13.5px] text-cream-dark">
            Open {site.hours}
          </p>
        </div>
      </section>
    </>
  );
}
