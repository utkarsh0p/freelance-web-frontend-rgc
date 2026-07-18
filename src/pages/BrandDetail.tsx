import { useParams, Link, Navigate } from "react-router-dom";
import {
  IconArrowLeft,
  IconBrandWhatsapp,
  IconExternalLink,
} from "@tabler/icons-react";
import { getBrand } from "@/data/brands";
import { whatsappHref } from "@/data/site";
import Button from "@/components/Button";
import SplitHeading from "@/components/SplitHeading";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";

export default function BrandDetail() {
  const { slug } = useParams();
  const brand = slug ? getBrand(slug) : undefined;

  if (!brand) return <Navigate to="/brands" replace />;

  return (
    <>
      <PageMeta
        title={`${brand.name} | RAI Group of Companies`}
        description={brand.description}
      />

      <section className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 lg:py-20">
        <Link
          to="/brands"
          className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-muted transition-colors hover:text-ink"
        >
          <IconArrowLeft size={17} stroke={2.2} />
          All brands
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center justify-center rounded-card border border-line bg-white p-12 lg:sticky lg:top-28">
              <img
                src={brand.image}
                alt={`${brand.name} logo`}
                className="max-h-[340px] w-full max-w-[420px] object-contain"
              />
            </div>
          </Reveal>

          <div>
            <span className="inline-flex rounded-full bg-peach px-3.5 py-1.5 text-[13px] font-semibold">
              {brand.sector}
            </span>
            <SplitHeading
              key={brand.slug}
              as="h1"
              mode="load"
              className="mt-4 font-display text-5xl font-extrabold tracking-tight md:text-6xl"
            >
              {brand.name}
            </SplitHeading>
            <Reveal delay={0.3}>
            <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-ink-soft">
              {brand.longDescription}
            </p>

            {brand.status === "coming-soon" && (
              <div className="mt-8 rounded-card border border-line bg-cream p-6">
                <p className="font-semibold">Brand website on its way</p>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">
                  {brand.name}'s own website is currently in the works. For
                  products, services or partnership enquiries, reach the group
                  directly and we'll connect you.
                </p>
              </div>
            )}

            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                variant="primary"
                href={whatsappHref(
                  `Hello RAI Group, I'd like to know more about ${brand.name}.`,
                )}
              >
                <IconBrandWhatsapp size={18} stroke={2} />
                Ask about {brand.name}
              </Button>
              {brand.website && (
                <Button variant="outline" href={brand.website.url}>
                  {brand.website.label}
                  <IconExternalLink size={16} stroke={2.2} />
                </Button>
              )}
            </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
