import { FooterHeader } from "./Footer-Header";
import { HEADERLINKS } from "@/constants/header-links";
import { FooterLinkItem } from "./Footer-Link-Item";

export function UtilsLinks() {
  return (
    <FooterHeader title="Links Úteis" className="w-auto block space-y-2">
      {HEADERLINKS.map((link) => (
        <FooterLinkItem key={link.href} href={link.href} link={link.name} />
      ))}
    </FooterHeader>
  );
}
