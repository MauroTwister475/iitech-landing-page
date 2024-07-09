import { SectionContent } from "@/components/Section-Content";
import { Title } from "@/components/Title";
import { IItech } from "@/components/IItech";
import { ServiceCard } from "./service-card";
import { ImageServices } from "./Image-services";

export function Services() {
  return (
    <SectionContent id="services" className="bg-gray-50">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <Title size="md" title="Nossos Serviços" />
          <p className="text-muted-foreground text-lg mt-4 mb-8 text-center lg:text-start">
            Na <IItech /> damos assistências aos seguintes serviços...
          </p>
          <ServiceCard />
        </div>
        <ImageServices />
      </div>
    </SectionContent>
  );
}