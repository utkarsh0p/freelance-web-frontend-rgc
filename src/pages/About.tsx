import { site, aboutCopy, chairmanCopy, missionCopy } from "@/data/site";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";

export default function About() {
  return (
    <>
      <PageMeta
        title="About | RAI Group of Companies"
        description="The story of RESPLENDENT ADISHAKTI IMPERIUM GROUP: a visionary conglomerate built on innovation, integrity, and divine inspiration, led by Chairman Suraj Kumar Rai."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 lg:py-24">
          <Reveal>
            <h1 className="max-w-4xl font-display text-5xl font-extrabold tracking-tight text-balance md:text-6xl">
              A visionary conglomerate, guided by{" "}
              <span className="text-saffron">divine inspiration.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {site.fullName} ({site.name}) builds trusted, future-ready brands
              that enhance lifestyles and empower communities.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 lg:py-24">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            The group story
          </h2>
        </Reveal>
        <div className="mt-10 max-w-[70ch] space-y-6">
          {aboutCopy.paragraphs.map((para, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-[17px] leading-relaxed text-ink-soft">{para}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-[28px] border border-line">
                  <img
                    src="/assets/images/chairman-suraj-kumar-rai.jpg"
                    alt={chairmanCopy.name}
                    className="w-full object-cover"
                  />
                </div>
                <p className="mt-5 font-display text-xl font-bold">
                  {chairmanCopy.name}
                </p>
                <p className="text-[14px] font-medium text-muted">
                  {chairmanCopy.role}
                </p>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                  Our chairman
                </h2>
              </Reveal>
              <div className="mt-8 max-w-[68ch] space-y-6">
                {chairmanCopy.paragraphs.map((para, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p className="text-[17px] leading-relaxed text-ink-soft">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.1}>
                <blockquote className="mt-10 rounded-card border-l-4 border-saffron bg-white p-7 font-display text-[22px] font-semibold leading-snug tracking-tight">
                  "{chairmanCopy.quote}"
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 lg:py-24">
        <Reveal>
          <div className="rounded-[36px] bg-ink px-8 py-14 text-canvas md:px-16 md:py-18">
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Our mission
            </h2>
            <div className="mt-8 max-w-[68ch] space-y-6">
              {missionCopy.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-[17px] leading-relaxed text-cream-dark"
                >
                  {para}
                </p>
              ))}
            </div>
            <p className="mt-10 text-[14px] font-semibold tracking-[0.08em] text-[#ff8a50]">
              {site.motto.join(" · ").toUpperCase()}
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
