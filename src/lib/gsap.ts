import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Mobile address-bar show/hide fires resize; skip those refreshes.
ScrollTrigger.config({ ignoreMobileResize: true });

// On touch-only devices, drive scrolling on the JS thread so the browser
// chrome (address bar / bottom dock) never collapses mid-scroll — the
// resize that would otherwise shift layout and pinned sections.
if (ScrollTrigger.isTouch === 1) {
  ScrollTrigger.normalizeScroll(true);
}

let rafId = 0;
/** Coalesces same-frame refresh requests into one ScrollTrigger.refresh(). */
export function scheduleScrollTriggerRefresh() {
  if (typeof window === "undefined") return;
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => ScrollTrigger.refresh());
}

// Fonts can finish after ScrollTrigger's automatic window-load refresh;
// re-measure once metrics are final. Module scope = exactly one subscriber.
if (typeof document !== "undefined" && "fonts" in document) {
  document.fonts.ready.then(scheduleScrollTriggerRefresh);
}

export { gsap, ScrollTrigger, SplitText };
