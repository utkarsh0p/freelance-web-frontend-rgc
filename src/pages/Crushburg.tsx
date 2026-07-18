import { Link } from "react-router-dom";
import {
  IconArrowLeft,
  IconExternalLink,
  IconMapPin,
  IconMail,
  IconPhone,
  IconClock,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { getBrand } from "@/data/brands";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";

const menu = [
  { name: "CB Burgers", count: "7 signature builds" },
  { name: "CB Sandwiches", count: "3 stacked classics" },
  { name: "CB Fries", count: "4 loaded styles" },
  { name: "CB Sides", count: "9 crunchy picks" },
  { name: "Wraps & Desserts", count: "Fresh rolls, sweet ends" },
  { name: "Shakes & Cold Drinks", count: "Thick, cold, generous" },
];

const facts = [
  { value: "2022", label: "Founded in February" },
  { value: "13+", label: "Outlets and growing" },
  { value: "153+", label: "Menu items" },
  { value: "2+", label: "Awards won" },
];

export default function Crushburg() {
  const brand = getBrand("crushburg")!;

  return (
    <>
      <PageMeta
        title="Crushburg | RAI Group of Companies"
        description="Crushburg brings American-style burgers to India: 13+ outlets, 153+ menu items, dine-in, delivery and franchise opportunities. Love at first bite."
      />

      <section className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 lg:py-20">
        <Link
          to="/brands"
          className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-muted transition-colors hover:text-ink"
        >
          <IconArrowLeft size={17} stroke={2.2} />
          All brands
        </Link>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center justify-center rounded-card border border-line bg-white p-12">
              <img
                src={brand.image}
                alt="Crushburg logo"
                className="max-h-[320px] w-full max-w-[380px] object-contain"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="inline-flex rounded-full bg-peach px-3.5 py-1.5 text-[13px] font-semibold">
              Foods & Beverages · Flagship brand
            </span>
            <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight md:text-6xl">
              Crushburg
            </h1>
            <p className="mt-4 font-display text-2xl font-semibold text-saffron">
              Love at first bite.
            </p>
            <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-ink-soft">
              Bringing the best from the U.S. to India: a quick service
              restaurant chain serving American-style burgers adapted for
              Indian tastes, with dine-in, delivery and franchise models.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" href="https://crushburg.com">
                Visit crushburg.com
                <IconExternalLink size={16} stroke={2.2} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-6 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.05}>
              <div className="rounded-card border border-line bg-white px-8 py-8">
                <div className="font-display text-[44px] font-extrabold leading-none tracking-tight">
                  {fact.value}
                </div>
                <div className="mt-2.5 text-[14px] font-medium text-muted">
                  {fact.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 lg:py-20">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            On the menu
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 0.05}>
              <div className="group rounded-card border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgb(32_21_21/0.08)]">
                <h3 className="font-display text-xl font-bold">{item.name}</h3>
                <p className="mt-1.5 text-[14.5px] text-muted">{item.count}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Own a Crushburg
              </h2>
              <p className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-ink-soft">
                Crushburg offers Cafe and Cafeteria franchise models built on
                fresh ingredients, quick service and a menu Indians love. Reach
                the team to talk territories and formats.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-card border border-line bg-white p-8">
                <h3 className="font-display text-xl font-bold">
                  Crushburg contact
                </h3>
                <ul className="mt-5 space-y-4 text-[15px] text-ink-soft">
                  <li className="flex items-start gap-3">
                    <IconMapPin size={19} stroke={1.8} className="mt-0.5 shrink-0 text-saffron" />
                    Aadishakti Complex, Sahakar Nagar, Bengaluru 560092
                  </li>
                  <li className="flex items-start gap-3">
                    <IconMail size={19} stroke={1.8} className="mt-0.5 shrink-0 text-saffron" />
                    <a href="mailto:connect@crushburg.com" className="hover:text-ink">
                      connect@crushburg.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconPhone size={19} stroke={1.8} className="mt-0.5 shrink-0 text-saffron" />
                    <a href="tel:+919559665789" className="hover:text-ink">
                      +91 95596 65789
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconClock size={19} stroke={1.8} className="mt-0.5 shrink-0 text-saffron" />
                    9:30 am to 8:30 pm, Monday to Friday
                  </li>
                  <li className="flex items-start gap-3">
                    <IconBrandInstagram size={19} stroke={1.8} className="mt-0.5 shrink-0 text-saffron" />
                    <a
                      href="https://instagram.com/crushburgindia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ink"
                    >
                      @crushburgindia
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
