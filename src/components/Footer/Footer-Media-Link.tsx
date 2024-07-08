import { ElementType } from "react";
import Link, { LinkProps } from "next/link";

interface FooterMediaLink extends LinkProps {
  href: string;
  Icon: ElementType;
}

export function FooterMediaLink({ href, Icon }: FooterMediaLink) {
  return (
    <Link
      target="_blank"
      className="flex items-center transition-all hover:opacity-40"
      href={href}
    >
      <Icon className="text-slate-400" size={22} />
    </Link>
  );
}
