import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Services from "@/components/home/Services";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import Expertise from "@/components/home/Expertise";
import SelectedWork from "@/components/home/SelectedWork";
import Industries from "@/components/home/Industries";
import WhyPartner from "@/components/home/WhyPartner";
import HowItWorks from "@/components/home/HowItWorks";
import Retainers from "@/components/home/Retainers";
import GlobalDelivery from "@/components/home/GlobalDelivery";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <ProcessTimeline />
      <Expertise />
      <SelectedWork />
      <Industries />
      <WhyPartner />
      <HowItWorks />
      <Retainers />
      <GlobalDelivery />
      <FAQ />
      <FinalCTA />
    </>
  );
}
