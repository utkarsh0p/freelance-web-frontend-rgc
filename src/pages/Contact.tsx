import { useState } from "react";
import {
  IconBrandWhatsapp,
  IconClock,
  IconMapPin,
  IconSend,
} from "@tabler/icons-react";
import { site, whatsappHref, contactCopy } from "@/data/site";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please add your name and a short message before sending.");
      return;
    }
    setError("");
    const text = `Hello RAI Group, I'm ${name.trim()}. ${message.trim()}`;
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <PageMeta
        title="Contact | RAI Group of Companies"
        description="Reach RAI Group of Companies on WhatsApp at +91 95596 65789, open 09:00 am to 05:00 pm."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 lg:py-24">
          <Reveal>
            <h1 className="max-w-3xl font-display text-5xl font-extrabold tracking-tight text-balance md:text-6xl">
              {contactCopy.heading.replace("key", "")}
              <span className="text-saffron">key.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {contactCopy.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="space-y-5">
            <Reveal>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 rounded-card border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgb(32_21_21/0.08)]"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-peach text-saffron">
                  <IconBrandWhatsapp size={24} stroke={1.8} />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-[15px] text-ink-soft">
                    {site.whatsapp.number}
                  </span>
                  <span className="mt-2 block text-[13.5px] font-semibold text-saffron">
                    The fastest way to reach us
                  </span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="flex items-start gap-5 rounded-card border border-line bg-white p-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-peach text-saffron">
                  <IconClock size={24} stroke={1.8} />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold">
                    Hours
                  </span>
                  <span className="mt-1 block text-[15px] text-ink-soft">
                    Open {site.hours}
                  </span>
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-start gap-5 rounded-card border border-line bg-white p-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-peach text-saffron">
                  <IconMapPin size={24} stroke={1.8} />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold">
                    Where we are
                  </span>
                  <span className="mt-1 block text-[15px] text-ink-soft">
                    Bengaluru, Karnataka, India
                  </span>
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-card border border-line bg-white p-8 md:p-10"
              noValidate
            >
              <h2 className="font-display text-2xl font-bold">
                Send a message
              </h2>
              <p className="mt-2 text-[14.5px] text-ink-soft">
                Your message opens in WhatsApp, ready to send to our team.
              </p>

              <div className="mt-7 space-y-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[14px] font-semibold">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl border border-line bg-canvas px-4 py-3.5 text-[15px] outline-none transition-shadow focus:ring-2 focus:ring-saffron"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[14px] font-semibold">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none rounded-xl border border-line bg-canvas px-4 py-3.5 text-[15px] outline-none transition-shadow focus:ring-2 focus:ring-saffron"
                  />
                  {error && (
                    <p className="text-[13.5px] font-medium text-saffron-deep">
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-saffron-deep active:scale-[0.98]"
                >
                  <IconSend size={17} stroke={2} />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
