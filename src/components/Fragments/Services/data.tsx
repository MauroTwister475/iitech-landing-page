import { Cable, Code, Figma, HardDrive, WalletIcon } from "lucide-react";
import { ElementType } from "react";

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
      "Desenvolvimento de software personalizado utilizando as tecnologias mais modernas para atender às necessidades específicas do seu negócio.",
    Icon: Code,
    duration: 2,
  },
  {
    title: "Consultoria TCC",
    description:
      "Orientação especializada para a elaboração e desenvolvimento do seu Trabalho de Conclusão de Curso (TCC), garantindo qualidade e excelência.",
    Icon: WalletIcon,
    duration: 2.5,
  },
  {
    title: "Redes de Computadores",
    description:
      "Configuração e manutenção de redes de computadores, garantindo conectividade e segurança para sua infraestrutura de TI.",
    Icon: Cable,
    duration: 3,
  },
  {
    title: "Hardware e reparação",
    description:
      "Serviços de diagnóstico e reparo de hardware, assegurando que seus equipamentos funcionem de maneira eficiente e confiável.",
    Icon: HardDrive,
    duration: 3.5,
  },
  {
    title: "Design Gráfico",
    description:
      "Criação de designs gráficos profissionais para promover sua marca, incluindo logotipos, materiais de marketing e mais.",
    Icon: Figma,
    duration: 4
  },
];
