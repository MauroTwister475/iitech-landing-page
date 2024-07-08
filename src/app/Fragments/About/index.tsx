import { SectionContent } from "@/components/Section-Content";
import { Title } from "@/components/Title";
import { StatItem } from "./Stat-Item";
import { STATS } from "@/constants/stats";
import { HeroImage } from "@/components/Banner/Hero";
import { AboutContent } from "./About-Content";
import ImageAbout from "@/assets/hero1.svg";

export function About() {
  return (
    <SectionContent
      id="about"
      className="grid grid-cols-1 py-24 items-center lg:grid-cols-2 flex-wrap gap-8"
    >
      <HeroImage urlImage={ImageAbout} />
      <div className="flex flex-col justify-between">
        <AboutContent />
        <div className="w-full divide-x-[0.1rem] divide-slate-700 mt-6 flex items-center justify-center lg:space-x-4 flex-row lg:px-24 ">
          {STATS.map((stat) => (
            <StatItem key={stat.id} number={stat.number} stats={stat.stats} />
          ))}
        </div>
      </div>
    </SectionContent>
  );
}
