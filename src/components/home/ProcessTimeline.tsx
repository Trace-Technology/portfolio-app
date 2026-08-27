"use client";

import FadeIn from "@/components/ui/FadeIn";

const steps = [
  { num: "01", title: "Requirements", description: "Understanding your product vision, technical constraints and performance targets." },
  { num: "02", title: "Circuit & Hardware Design", description: "Architecture, component selection, schematic capture and power design." },
  { num: "03", title: "PCB Engineering", description: "Multi-layer layout, signal integrity, thermal management and DRC." },
  { num: "04", title: "Design Verification", description: "DFM checks, design review, simulation and validation." },
  { num: "05", title: "Prototype", description: "Fabrication, assembly, bring-up and functional testing." },
  { num: "06", title: "Component Sourcing", description: "BOM optimization, supplier selection and procurement." },
  { num: "07", title: "Manufacturing", description: "PCBA, testing, quality control and production coordination." },
  { num: "08", title: "Testing & Delivery", description: "Final validation, documentation and handover." },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 px-6 bg-navy-950/50">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent-blue">
              Our Process
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              From Concept to Production
            </h2>
            <p className="mt-4 text-lg text-navy-400 max-w-2xl mx-auto">
              One engineering partner. From first schematic to finished hardware.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/50 via-accent-purple/50 to-accent-blue/50 md:left-1/2" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1.5 rounded-full border-2 border-accent-blue bg-navy-950 md:left-1/2" />

                {/* Content */}
                <div
                  className={`ml-12 flex-1 md:ml-0 ${
                    i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div className="text-xs font-bold text-accent-blue">
                    STEP {step.num}
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-navy-400">
                    {step.description}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
