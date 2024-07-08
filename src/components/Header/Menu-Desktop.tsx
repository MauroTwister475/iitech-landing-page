"use client";
import { HEADERLINKS, LinkType } from "@/constants/header-links";
import { NextLink } from "@/components/Link-Item";
import { useState } from "react";

export function MenuDesktop() {
  const [isActive, setIsActive] = useState<LinkType>("#home");

  return (
    <ul className="hidden lg:flex items-center gap-10 py-2 transition-all">
      {HEADERLINKS.map((link) => (
        <NextLink
          key={link.href}
          href={link.href}
          isActive={isActive === link.href}
          onClick={() => setIsActive(link.href)}
        >
          {link.name}
        </NextLink>
      ))}
    </ul>
  );
}
