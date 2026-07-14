"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    const scrollToTop = () => {
      lenis.scrollTo(0, { force: true, immediate: true });
    };

    const scrollToTarget = (event: Event) => {
      const target = (event as CustomEvent<HTMLElement>).detail;

      if (target) {
        lenis.scrollTo(target, { force: true, immediate: true });
      }
    };

    window.addEventListener("highrange:scroll-top", scrollToTop);
    window.addEventListener("highrange:scroll-target", scrollToTarget);

    return () => {
      window.removeEventListener("highrange:scroll-top", scrollToTop);
      window.removeEventListener("highrange:scroll-target", scrollToTarget);
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
