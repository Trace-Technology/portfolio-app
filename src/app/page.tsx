import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import SelectedWork from "@/components/home/SelectedWork";
import Services from "@/components/home/Services";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import Expertise from "@/components/home/Expertise";
import Industries from "@/components/home/Industries";
import WhyPartner from "@/components/home/WhyPartner";
import Retainers from "@/components/home/Retainers";
import GlobalDelivery from "@/components/home/GlobalDelivery";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SelectedWork />
      <Services />
      <ProcessTimeline />
      <Expertise />
      <Industries />
      <WhyPartner />
      <Retainers />
      <GlobalDelivery />
      <FAQ />
      <FinalCTA />
    </>
  );
}
