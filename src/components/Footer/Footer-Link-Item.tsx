import { ExternalLink } from "lucide-react";
import Link, { LinkProps } from "next/link";

interface FooterLinkItemProps extends LinkProps {
  link: string;
  href: string;
  externalLink?: boolean;
}

export function FooterLinkItem({
  link,
  href,
  externalLink,
}: FooterLinkItemProps) {
  return (
    <Link
      target={externalLink ? "_blank" : "_self"}
      className="flex items-center space-x-1 transition-all"
      href={href}
    >
      <span className="text-slate-200 block text-sm">{link}</span>
      {externalLink && <ExternalLink className="text-slate-200" size={14} />}
    </Link>
  );
}
