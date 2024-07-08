export type LinkType = "#services" | "#about" | "#depoiments" | "#home"

export type LinkTypeProps = {
  name: string;
  href: LinkType,
}

export const HEADERLINKS: LinkTypeProps[] = [
  {
    href: "#home",
    name: "Home",
  },
  {
    href: "#about",
    name: "Sobre Nós",
  },
  {
    href: "#services",
    name: "Serviços",
  },
  {
    href: "#depoiments",
    name: "Depoimentos",
  },
]