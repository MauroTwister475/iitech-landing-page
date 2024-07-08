import { FooterHeader } from "./Footer-Header";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { FooterMediaLink } from "./Footer-Media-Link";

export function SocialMidia() {
  return (
    <FooterHeader className="w-auto block ">
      <div className="w-full flex items-center justify-center rev gap-4">
        <FooterMediaLink Icon={Facebook} href="https://www.facebook.com" />
        <FooterMediaLink Icon={Instagram} href="https://www.instagram.com" />
        <FooterMediaLink Icon={Linkedin} href="https://www.linkedin.com" />
      </div>
    </FooterHeader>
  );
}
