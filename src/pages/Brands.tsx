import { brands } from "@/data/brands";
import BrandCard from "@/components/BrandCard";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";

export default function Brands() {
  return (
    <>
      <PageMeta
        title="Our Brands | RAI Group of Companies"
        description="Nine brands across food, fitness, fashion, wellness, education and more: Crushburg, AdVyantra, Gurukul, Baretha, Trishul Fitness, Kerabon Professional, Herbgiri, Kidora Fox and Foxic."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 lg:py-24">
          <Reveal>
            <h1 className="max-w-3xl font-display text-5xl font-extrabold tracking-tight text-balance md:text-6xl">
              Nine brands, <span className="text-saffron">one imperium.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              From American-style burgers to value-based education, each brand
              carries the same promise of quality and customer care.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, i) => (
            <Reveal key={brand.slug} delay={(i % 3) * 0.05}>
              <BrandCard brand={brand} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
