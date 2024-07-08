import Image, { StaticImageData } from "next/image";
import heroImage from "@/assets/hero.svg";

export function HeroImage({ urlImage = heroImage }: { urlImage?: StaticImageData }) {
  return (
    <div className="hidden w-full h-full lg:flex items-center justify-center">
      <Image src={urlImage} alt="hero image" />
    </div>
  );
}
