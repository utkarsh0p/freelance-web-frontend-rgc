import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "outline";

const styles: Record<Variant, string> = {
  primary: "bg-saffron text-white hover:bg-saffron-deep",
  dark: "bg-ink text-canvas hover:bg-ink-soft",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-canvas",
};

type ButtonProps = {
  variant?: Variant;
  to?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  variant = "primary",
  to,
  href,
  className,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-all duration-200 active:scale-[0.98]",
    styles[variant],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
