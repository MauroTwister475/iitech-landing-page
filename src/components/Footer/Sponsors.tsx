import { SPONSORS } from "@/constants/footer-info";
import { FooterHeader } from "./Footer-Header";
import { FooterLinkItem } from "./Footer-Link-Item";

export function Sponsors() {
  return (
    <FooterHeader title="Parceiros">
      {SPONSORS["sponsors"].map((sponsor) => (
        <FooterLinkItem
          externalLink
          key={sponsor.id}
          href={sponsor.website}
          link={sponsor.company}
        />
      ))}
    </FooterHeader>
  );
}
