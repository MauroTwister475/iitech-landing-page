import { Phone, ArrowRight } from "lucide-react";
import { ButtonPrimary } from "../Buttons/primary";

export function BannerContent() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
      <h1 className="font-semibold text-3xl lg:text-4xl text-center lg:text-justify">
        Serviços personalizados? A{" "}
        <span className="text-blue-600 ">IItech</span> é a sua solução nesse
         e muitos outros casos!
      </h1>
      <p className="text-center lg:text-justify text-gray-700">
        Na IItech oferecemos serviços completos de programação, redes e design.
        Nosso objetivo é ajudar-te a alcançar seus objetivos através de soluções
        tecnológicas inovadoras e personalizadas.
      </p>
      <div className="w-full flex items-center justify-center lg:justify-start gap-3">
        <ButtonPrimary title="Começar" />
        <ButtonPrimary
          Icon={ArrowRight}
          title="Solicitar Serviço"
          variant="outline"
        />
      </div>
    </div>
  );
}
