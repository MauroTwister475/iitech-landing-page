import { FooterHeader } from "./Footer-Header";
import { Logo } from "../Logo";
import { Sponsors } from "./Sponsors";
import { Services } from "./Services";
import { CopyRight } from "./Copy-Right";
import { UtilsLinks } from "./Utils-Links";

export function Footer() {
  return (
    <footer className="w-full flex flex-col bg-slate-900 py-12 px-14 lg:px-24 gap-10">
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 lg:space-y-8">
        <FooterHeader className="mt-4 ">
          <Logo color="white" size={60} />
        </FooterHeader>
        <Sponsors />
        <Services />
        <UtilsLinks />
      </div>
      <CopyRight />
    </footer>
  );
}
