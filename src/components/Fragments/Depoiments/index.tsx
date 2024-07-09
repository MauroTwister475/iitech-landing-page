import { SectionContent } from "@/components/Section-Content";
import { Title } from "@/components/Title";
import { IItech } from "@/components/IItech";
import { DepoimentsList } from "./depoiments";

export function Depoiments() {
  return (
    <SectionContent id="depoiments">
      <Title size="md" title="Depoimentos dos Clientes" />
      <p className="w-full text-lg text-muted-foreground pt-4 pb-8 text-center lg:text-start">
        Esses são alguns dos depoiments dos clientes e de alguns parceiros da{" "}
        <IItech />
      </p>
      <DepoimentsList />
    </SectionContent>
  );
}
