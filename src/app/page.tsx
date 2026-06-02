import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBanner } from "@/components/StatsBanner";
import { About } from "@/components/About";
import { Courses } from "@/components/Courses";
import { WhyDIATM } from "@/components/WhyDIATM";
import { Placements } from "@/components/Placements";
import { Testimonials } from "@/components/Testimonials";
import { CampusLife } from "@/components/CampusLife";
import { News } from "@/components/News";
import { AdmissionCTA } from "@/components/AdmissionCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBanner />
      <About />
      <Courses />
      <WhyDIATM />
      <Placements />
      <Testimonials />
      <CampusLife />
      <News />
      <AdmissionCTA />
      <Footer />
    </main>
  );
}
