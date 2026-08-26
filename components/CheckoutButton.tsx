"use client";

import type { MouseEvent, ReactNode } from "react";
import { withTracking } from "@/lib/checkout";

type CheckoutButtonProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function CheckoutButton({
  href,
  className,
  children,
}: CheckoutButtonProps) {
  // O href renderizado no servidor já leva ao checkout certo. As tags de
  // campanha só existem no navegador, então entram no clique — assim a página
  // continua estática e o link segue funcionando sem JS.
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const opensInAnotherTab =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.defaultPrevented || opensInAnotherTab || event.button !== 0) {
      return;
    }

    event.preventDefault();
    window.location.assign(
      withTracking(href, new URLSearchParams(window.location.search)),
    );
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
