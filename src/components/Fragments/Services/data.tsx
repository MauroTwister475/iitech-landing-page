import { Cable, Code, Figma, HardDrive, WalletIcon } from "lucide-react";
import { ElementType, ReactNode } from "react";

interface ServiceProps {
  title: string;
  description: string;
  Icon: ElementType;
  duration: number;
}

export const SERVICES: ServiceProps[] = [
  {
    title: "Programação",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    Icon: Code,
    duration: 2,
  },
  {
    title: "Consultoria TCC",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    Icon: WalletIcon,
    duration: 2.5,
  },
  {
    title: "Redes de Computadores",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    Icon: Cable,
    duration: 3,
  },
  {
    title: "Hardware e reparação",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    Icon: HardDrive,
    duration: 3.5,
  },
  {
    title: "Design Gráfico",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    Icon: Figma,
    duration: 4
  },
];
