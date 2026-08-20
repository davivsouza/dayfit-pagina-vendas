import { ScarcityBar } from "@/components/ScarcityBar";
import { Hero } from "@/components/Hero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Testimonials } from "@/components/Testimonials";
import { Methodology } from "@/components/Methodology";
import { Authority } from "@/components/Authority";
import { AppTour } from "@/components/AppTour";
import { Offer } from "@/components/Offer";
import { Guarantee } from "@/components/Guarantee";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScarcityBar />
      <main>
        <Hero />
        <BeforeAfter />
        <Testimonials />
        <Methodology />
        <Authority />
        <AppTour />
        <Offer />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
