import Section from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

const reasons = [
  {
    title: "Engineering-First",
    description:
      "Every project is approached from an engineering and manufacturability perspective — not simply PCB routing.",
  },
  {
    title: "Production-Aware Design",
    description:
      "We design with fabrication, assembly, component availability and future production in mind.",
  },
  {
    title: "Global Delivery",
    description:
      "Work remotely with engineering teams and product companies worldwide.",
  },
  {
    title: "Cost-Efficient Engineering",
    description:
      "Access experienced hardware engineering capability without the overhead of building a large in-house team.",
  },
  {
    title: "Confidential by Design",
    description:
      "NDA-driven projects, controlled file access and disciplined handling of client IP.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We aim to become an extension of your engineering team — not simply a one-time vendor.",
  },
];

export default function WhyPartner() {
  return (
    <Section className="bg-navy-950/50">
      <FadeIn>
        <SectionHeader
          label="Why Partner With Us"
          title="Why Trace Technology"
          description="Six reasons to choose us as your hardware engineering partner."
        />
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, i) => (
          <FadeIn key={reason.title} delay={i * 0.05}>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 h-full">
              <div className="mb-3 text-xs font-bold text-accent-blue">
                0{i + 1}
              </div>
              <h3 className="text-lg font-bold text-white">{reason.title}</h3>
              <p className="mt-2 text-sm text-navy-400">{reason.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
