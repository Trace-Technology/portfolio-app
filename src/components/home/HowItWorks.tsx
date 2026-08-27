import Section from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Project",
    description:
      "Submit your requirements, schematic, PCB files, BOM, mechanical constraints, or even just your product idea.",
  },
  {
    num: "02",
    title: "Engineering Review",
    description:
      "Our technical team reviews your requirements and identifies the scope, complexity, risks and deliverables.",
  },
  {
    num: "03",
    title: "Receive Your Proposal",
    description:
      "You receive scope, timeline, deliverables, pricing, and engineering assumptions — all transparent.",
  },
  {
    num: "04",
    title: "Engineering Begins",
    description:
      "Your project is assigned to the appropriate engineer and tracked through defined milestones.",
  },
  {
    num: "05",
    title: "Review & Validation",
    description:
      "We perform design reviews, DFM checks and required verification before final release.",
  },
  {
    num: "06",
    title: "Production Support",
    description:
      "When required, we coordinate prototyping, component sourcing, manufacturing and delivery.",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          label="How It Works"
          title="Simple Process, Exceptional Results"
          description="A straightforward path from your idea to production-ready hardware."
        />
      </FadeIn>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <FadeIn key={step.num} delay={i * 0.05}>
            <div className="relative">
              <div className="mb-4 text-4xl font-black text-accent-blue/20">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-navy-400">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
