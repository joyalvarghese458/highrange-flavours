"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    const scrollToTarget = (event: Event) => {
      const target = (event as CustomEvent<HTMLElement>).detail;

      if (target) {
        target.scrollIntoView({ block: "start", behavior: "instant" });
      }
    };

    window.addEventListener("highrange:scroll-top", scrollToTop);
    window.addEventListener("highrange:scroll-target", scrollToTarget);

    return () => {
      window.removeEventListener("highrange:scroll-top", scrollToTop);
      window.removeEventListener("highrange:scroll-target", scrollToTarget);
    };
  }, []);

  return null;
}
