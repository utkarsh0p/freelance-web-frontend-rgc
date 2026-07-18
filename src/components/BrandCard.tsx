import { Link } from "react-router-dom";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { Brand } from "@/data/brands";
import { cn } from "@/lib/utils";

type Props = {
  brand: Brand;
  large?: boolean;
};

/** White logo plate on cream canvas; the treatment approved in the design demo. */
export default function BrandCard({ brand, large = false }: Props) {
  return (
    <Link
      to={`/brands/${brand.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-card border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(32_21_21/0.10)]",
        large && "md:col-span-2",
      )}
    >
      <div
        className={cn(
          "relative border-b border-line bg-white",
          large ? "aspect-[16/7]" : "aspect-[16/10]",
        )}
      >
        <img
          src={brand.image}
          alt={`${brand.name} logo`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain p-7 transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit rounded-full bg-peach px-3 py-1 text-xs font-semibold">
          {brand.sector}
        </span>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
          {brand.name}
        </h3>
        <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">
          {brand.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-saffron">
          View brand
          <IconArrowUpRight
            size={16}
            stroke={2.2}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
