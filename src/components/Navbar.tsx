import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

// Adapted from 21st.dev "Header Navbar" (EldoraUI header-02): responsive
// header with animated mobile disclosure, ported from Next.js/headlessui
// to react-router + local state.

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/brands", label: "Brands" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5 md:px-8">
        <Link
          to="/"
          className="flex items-baseline font-display text-[22px] font-extrabold tracking-tight text-ink"
          title="Home"
        >
          <span
            aria-hidden
            className="mb-[3px] mr-0.5 inline-block h-[3px] w-3.5 self-end bg-saffron"
          />
          raigroup
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 font-condensed text-[14px] font-semibold uppercase tracking-wider transition-colors hover:bg-peach",
                  isActive ? "text-saffron" : "text-ink",
                )
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center bg-saffron px-5 py-2.5 font-condensed text-[13px] font-semibold uppercase tracking-wider text-white shadow-paper-sm transition-all duration-200 hover:bg-saffron-deep active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Contact us
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center bg-saffron px-4 py-2 font-condensed text-[12.5px] font-semibold uppercase tracking-wider text-white shadow-paper-sm transition-all duration-200 hover:bg-saffron-deep active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Contact us
          </Link>
          <button
            className="flex size-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-peach"
            aria-label={open ? "Close main menu" : "Open main menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map(({ to, label, end }, i) => (
                <motion.div
                  key={to}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.06 }}
                >
                  <NavLink
                    to={to}
                    end={end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-xl px-3 py-3 font-condensed text-lg font-semibold uppercase tracking-wider",
                        isActive ? "text-saffron" : "text-ink",
                      )
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
