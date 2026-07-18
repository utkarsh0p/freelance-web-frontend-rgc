import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { IconMenu2, IconX, IconBrandWhatsapp } from "@tabler/icons-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

// Adapted from 21st.dev "Header Navbar" (EldoraUI header-02): responsive
// header with animated mobile disclosure, ported from Next.js/headlessui
// to react-router + local state.

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/brands", label: "Brands" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-3" title="Home">
          <span className="block size-10 overflow-hidden rounded-full bg-[#0a0a0a]">
            <img
              src="/assets/images/logo-rai-group.jpg"
              alt=""
              className="size-full scale-[1.4] object-cover object-[50%_42%]"
            />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            RAI GROUP
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-[15px] font-medium transition-colors hover:bg-peach",
                  isActive ? "text-saffron" : "text-ink",
                )
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-canvas transition-colors hover:bg-ink-soft"
          >
            <IconBrandWhatsapp size={17} stroke={2} />
            Message us
          </a>
        </nav>

        <button
          className="flex size-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-peach md:hidden"
          aria-label={open ? "Close main menu" : "Open main menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
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
                        "block rounded-xl px-3 py-3 text-lg font-medium",
                        isActive ? "text-saffron" : "text-ink",
                      )
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 font-semibold text-canvas"
              >
                <IconBrandWhatsapp size={18} stroke={2} />
                Message us
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
