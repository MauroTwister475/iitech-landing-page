import { FooterHeader } from "./Footer-Header";
import { SERVICES } from "@/constants/footer-info";
import { FooterLinkItem } from "./Footer-Link-Item";

export function Services() {
  return (
    <FooterHeader title="Serviços">
      {SERVICES["services"].map((service) => (
        <FooterLinkItem
          key={service.id}
          href={`/${service.href}`}
          link={service.service}
        />
      ))}
    </FooterHeader>
  );
}
