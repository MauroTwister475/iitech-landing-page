import { HeroImage } from "./Hero";
import { BannerContent } from "./Banner-Content";

export function Banner() {
  return (
    <div className="mt-12 lg:mt-20 w-full pb-10 lg:h-[34rem] px-14 lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center">
      <BannerContent />
      <HeroImage />
    </div>
  );
}
