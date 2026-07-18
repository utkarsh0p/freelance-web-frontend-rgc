import { useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap, scheduleScrollTriggerRefresh } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Brands from "@/pages/Brands";
import BrandDetail from "@/pages/BrandDetail";
import Crushburg from "@/pages/Crushburg";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

// Must stay rendered before <main>: tree order makes this layout effect run
// before any page useGSAP, so ScrollTriggers are created at scrollY 0.
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce || !mainRef.current) return;
      gsap.fromTo(
        mainRef.current,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          clearProps: "all",
          onComplete: scheduleScrollTriggerRefresh,
        },
      );
    },
    { dependencies: [pathname] },
  );

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ScrollToTop />
      <Navbar />
      <main ref={mainRef} className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/crushburg" element={<Crushburg />} />
          <Route path="/brands/:slug" element={<BrandDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
