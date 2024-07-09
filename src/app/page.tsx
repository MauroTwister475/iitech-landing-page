import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Services } from "../components/Fragments/Services";
import { About } from "../components/Fragments/About";
import { Depoiments } from "../components/Fragments/Depoiments";
import { Footer } from "@/components/Footer";
import { ButtonBackTop } from "@/components/Buttons/Button-back-top";
import { FAQS } from "@/components/Fragments/FAQs";


export default function Home() {
  return (
    <main
      id="home"
      className="w-full h-full flex flex-col items-center bg-blue-600/5  overflow-x-hidden"
    >
      <Header />
      <Banner />
      <About />
      <Services />
      <Depoiments />
      <FAQS />
      <Footer />
      <ButtonBackTop />
    </main>
  );
}


export const metadata: Metadata = {
  title: "IItech | Home",
  description: "Its a homepage of IItech company",
};
