import { Link } from "react-router-dom";
import { IconBrandWhatsapp, IconClock, IconMapPin } from "@tabler/icons-react";
import { site } from "@/data/site";
import { brands } from "@/data/brands";

export default function Footer() {
  return (
    <footer className="bg-ink text-canvas">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-baseline font-display text-[22px] font-extrabold tracking-tight text-canvas">
              <span
                aria-hidden
                className="mb-[3px] mr-0.5 inline-block h-[3px] w-3.5 self-end bg-saffron"
              />
              raigroup
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-cream-dark">
              {site.fullName} is a visionary conglomerate building trusted,
              future-ready brands across ten industries.
            </p>
            <p className="mt-4 font-condensed text-[13px] font-semibold uppercase tracking-wider text-[#ff8a50]">
              {site.motto.join(" · ")}
            </p>
          </div>

          <div>
            <h3 className="font-condensed text-[14px] font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-cream-dark">
              <li><Link to="/" className="transition-colors hover:text-canvas">Home</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-canvas">About the group</Link></li>
              <li><Link to="/brands" className="transition-colors hover:text-canvas">Our brands</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-canvas">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-condensed text-[14px] font-semibold uppercase tracking-wider">Brands</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-cream-dark">
              {brands.slice(0, 5).map((b) => (
                <li key={b.slug}>
                  <Link
                    to={`/brands/${b.slug}`}
                    className="transition-colors hover:text-canvas"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/brands"
                  className="font-semibold text-canvas underline decoration-[#ff8a50] underline-offset-4"
                >
                  All nine brands
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-condensed text-[14px] font-semibold uppercase tracking-wider">Get in touch</h3>
            <ul className="mt-4 space-y-4 text-[15px] text-cream-dark">
              <li className="flex items-start gap-3">
                <IconBrandWhatsapp size={19} stroke={1.8} className="mt-0.5 shrink-0" />
                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-canvas"
                >
                  {site.whatsapp.number}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IconClock size={19} stroke={1.8} className="mt-0.5 shrink-0" />
                <span>Open {site.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <IconMapPin size={19} stroke={1.8} className="mt-0.5 shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-[13.5px] text-cream-dark">
          {site.copyright}
        </div>
      </div>
    </footer>
  );
}
