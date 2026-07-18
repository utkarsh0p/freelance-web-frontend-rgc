import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import { site } from "@/data/site";

/**
 * The one deliberate dark color-block on each page that uses it: the group
 * emblem has a black background, so it lives here where that background
 * dissolves into the ink panel.
 */
export default function EmblemSection() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px] rounded-[36px] bg-ink text-canvas">
        <div className="grid items-center gap-10 px-8 py-14 md:grid-cols-[280px_1fr] md:gap-16 md:px-16 md:py-20">
          <img
            src="/assets/images/logo-rai-group.jpg"
            alt="RAI Group emblem of Maa Adishakti"
            className="mx-auto w-56 mix-blend-screen md:w-full"
          />
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-[42px] md:leading-[1.1]">
              Guided by the spiritual strength of Maa Adishakti.
            </h2>
            <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-cream-dark">
              The group is committed to creating impactful businesses that
              enhance lifestyles, empower communities, and set new benchmarks
              across industries.
            </p>
            <p className="mt-7 text-[14px] font-semibold tracking-[0.08em] text-[#ff8a50]">
              {site.motto.join(" · ").toUpperCase()}
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-canvas/25 px-6 py-3 text-[15px] font-semibold transition-colors hover:border-canvas hover:bg-canvas hover:text-ink"
            >
              Read the group story
              <IconArrowRight size={17} stroke={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
