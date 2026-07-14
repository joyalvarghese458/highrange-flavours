"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export function RouteScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.location.hash && !pathname.startsWith("/products/")) {
      const scrollToHashTarget = () => {
        const id = decodeURIComponent(window.location.hash.slice(1));
        const target = document.getElementById(id);

        if (!target) {
          return;
        }

        target.scrollIntoView({ block: "start", behavior: "instant" });
        window.dispatchEvent(
          new CustomEvent("highrange:scroll-target", { detail: target }),
        );
      };

      requestAnimationFrame(scrollToHashTarget);
      return;
    }

    const shouldResetScroll =
      !window.location.hash || pathname.startsWith("/products/");

    if (!shouldResetScroll) {
      return;
    }

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    window.dispatchEvent(new CustomEvent("highrange:scroll-top"));
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      window.dispatchEvent(new CustomEvent("highrange:scroll-top"));
    });
    root.style.scrollBehavior = previousScrollBehavior;
  }, [pathname]);

  return null;
}
