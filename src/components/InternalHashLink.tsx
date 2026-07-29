"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type InternalHashLinkProps = ComponentProps<typeof Link> & {
  href: string;
};

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  window.dispatchEvent(new CustomEvent("highrange:scroll-top"));
}

function scrollToHash(id: string) {
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  target.scrollIntoView({ block: "start", behavior: "instant" });
  window.dispatchEvent(
    new CustomEvent("highrange:scroll-target", { detail: target }),
  );
}

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  );
}

export function InternalHashLink({
  href,
  onClick,
  scroll = false,
  ...props
}: InternalHashLinkProps) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || isModifiedClick(event)) {
      return;
    }

    const url = new URL(href, window.location.origin);

    if (url.origin !== window.location.origin) {
      return;
    }

    const targetPathname = url.pathname || "/";

    if (targetPathname !== pathname) {
      return;
    }

    event.preventDefault();

    if (url.hash) {
      window.history.pushState(null, "", `${targetPathname}${url.hash}`);
      requestAnimationFrame(() =>
        scrollToHash(decodeURIComponent(url.hash.slice(1))),
      );
      return;
    }

    window.history.pushState(null, "", targetPathname);
    requestAnimationFrame(scrollToTop);
  };

  return <Link href={href} scroll={scroll} onClick={handleClick} {...props} />;
}
