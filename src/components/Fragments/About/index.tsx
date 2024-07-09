import { SectionContent } from "@/components/Section-Content";
import { AboutContent } from "./About-Content";
import { AboutImage } from "./Image-About";
import { Stats } from "./Stats";

export function About() {
  return (
    <SectionContent
      id="about"
      className="grid grid-cols-1 py-24 items-center lg:grid-cols-2 flex-wrap gap-8"
    >
      <AboutImage />
      <div className="flex flex-col justify-between">
        <AboutContent />
        <Stats />
      </div>
    </SectionContent>
  );
}
