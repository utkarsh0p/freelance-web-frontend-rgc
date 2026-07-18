import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  paragraphs: string[];
  /** Paragraphs always visible on mobile before "Read more". */
  initial?: number;
  className?: string;
};

/**
 * Full prose on md+; on mobile only the first paragraph(s) show with a
 * "Read the full story" toggle, so phone readers aren't hit with a wall of text.
 */
export default function ExpandableProse({
  paragraphs,
  initial = 1,
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <div className="space-y-6">
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className={cn(
              "text-[17px] leading-relaxed text-ink-soft",
              i >= initial && !open && "hidden md:block",
            )}
          >
            {para}
          </p>
        ))}
      </div>
      {paragraphs.length > initial && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-5 font-semibold text-saffron md:hidden"
        >
          {open ? "Show less" : "Read the full story"}
        </button>
      )}
    </div>
  );
}
