import { cn } from "@/lib/utils";

type Props = {
  title: string;
  lede?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  title,
  lede,
  align = "left",
  dark = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "font-display text-4xl font-bold tracking-tight text-balance md:text-5xl",
          dark ? "text-canvas" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-cream-dark" : "text-ink-soft",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
