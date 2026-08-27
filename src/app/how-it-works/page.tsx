import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How It Works — Trace Technology",
  description: "Simple process from your hardware idea to production-ready design. Submit, review, quote, engineer, validate, deliver.",
};

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Project",
    description:
      "Submit your requirements, schematic, PCB files, BOM, mechanical constraints, or even just your product idea. No file? No problem — describe what you need.",
    details: [
      "Existing files welcome (schematics, BOMs, drawings)",
      "Or just describe your product idea",
      "No commitment required",
    ],
  },
  {
    num: "02",
    title: "Engineering Review",
    description:
      "Our technical team reviews your requirements and identifies the scope, complexity, risks and deliverables. We may ask clarifying questions to ensure we understand your needs.",
    details: [
      "Technical scope assessment",
      "Risk identification",
      "Deliverable definition",
      "Timeline estimation",
    ],
  },
  {
    num: "03",
    title: "Receive Your Proposal",
    description:
      "You receive a transparent proposal covering scope, timeline, deliverables, pricing and engineering assumptions. No hidden costs.",
    details: [
      "Clear scope definition",
      "Fixed timeline",
      "Transparent pricing",
      "Engineering assumptions documented",
    ],
  },
  {
    num: "04",
    title: "Engineering Begins",
    description:
      "Your project is assigned to the appropriate engineer and tracked through defined milestones. You receive regular progress updates.",
    details: [
      "Dedicated engineer assigned",
      "Milestone-based tracking",
      "Regular progress updates",
      "Direct communication channel",
    ],
  },
  {
    num: "05",
    title: "Review & Validation",
    description:
      "We perform design reviews, DFM checks and required verification before final release. Your approval is required at key checkpoints.",
    details: [
      "Design review sessions",
      "DFM & DRC verification",
      "Simulation where applicable",
      "Client approval at milestones",
    ],
  },
  {
    num: "06",
    title: "Production Support",
    description:
      "When required, we coordinate prototyping, component sourcing, manufacturing and delivery. Your design moves from screen to physical hardware.",
    details: [
      "Prototype coordination",
      "Component sourcing",
      "Manufacturing management",
      "Quality oversight",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent-blue">
            How It Works
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From Idea to Hardware
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-400">
            A straightforward path from your product idea to production-ready
            hardware.
          </p>
        </FadeIn>

        <div className="mt-20 space-y-12">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.05}>
              <div className="relative flex gap-8">
                {/* Number */}
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-blue/10 text-lg font-bold text-accent-blue">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mx-auto mt-4 h-16 w-px bg-gradient-to-b from-accent-blue/30 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h2 className="text-xl font-bold text-white">{step.title}</h2>
                  <p className="mt-2 text-navy-400 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.details.map((d) => (
                      <span
                        key={d}
                        className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs text-navy-300"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
            <h2 className="text-2xl font-bold text-white">Ready to start?</h2>
            <p className="mt-2 text-navy-400">
              Submit your project details and we&apos;ll get back to you within
              1 business day.
            </p>
            <Button href="/place-order" className="mt-6">
              Place Order
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
