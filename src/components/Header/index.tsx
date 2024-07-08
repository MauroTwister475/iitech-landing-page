import { Logo } from "@/components/Logo";
import { MenuMobile } from "./Menu-Mobile";
import { MenuDesktop } from "./Menu-Desktop";

export function Header() {
  return (
    <header className=" sticky z-40 w-full top-0 bg-white border-b py-4 px-6 lg:px-24 flex items-center justify-between">
      <Logo size={40} />
      <MenuMobile />
      <MenuDesktop />
    </header>
  );
}
