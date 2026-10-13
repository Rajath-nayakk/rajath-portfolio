import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionManifesto from "@/components/SectionManifesto";
import HackHubShowcase from "@/components/HackHubShowcase";
import FinPilotShowcase from "@/components/FinPilotShowcase";
import MovieBookingShowcase from "@/components/MovieBookingShowcase";
import SectionCertificates from "@/components/SectionCertificates";
import SectionToolkit from "@/components/SectionToolkit";
import SectionJourney from "@/components/SectionJourney";
import SectionContact from "@/components/SectionContact";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="relative flex flex-col w-full bg-[#08090B]">
        <Hero />
        <SectionManifesto />
        <div id="projects" className="relative w-full">
          <HackHubShowcase />
          <FinPilotShowcase />
          <MovieBookingShowcase />
        </div>
        <SectionCertificates />
        <SectionToolkit />
        <SectionJourney />
        <SectionContact />
      </main>
    </SmoothScroll>
  );
}
