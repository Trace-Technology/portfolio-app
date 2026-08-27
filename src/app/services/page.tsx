import type { Metadata } from "next";
import { Cpu, Layers, Settings, Wrench, Search, Package } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services — Trace Technology",
  description: "PCB design, hardware engineering, DFM, prototyping, component sourcing and manufacturing support.",
};

const services = [
  {
    id: "hardware",
    icon: Cpu,
    title: "Hardware Engineering",
    description: "From first principles to production-ready design. We handle circuit architecture, component selection, schematic capture and power architecture for complex electronic systems.",
    details: [
      "Circuit Architecture & System Design",
      "Component Selection & Sourcing Strategy",
      "Schematic Capture & Design Review",
      "Power Architecture & Distribution",
      "Signal Integrity Analysis",
      "Thermal Management Design",
    ],
  },
  {
    id: "pcb",
    icon: Layers,
    title: "PCB Design & Layout",
    description: "Multi-layer PCB engineering optimized for signal integrity, thermal performance and manufacturability. From 2-layer boards to complex HDI and flex-rigid designs.",
    details: [
      "Multi-layer PCB (2 to 16+ layers)",
      "RF & Microwave Layout",
      "High-speed Digital Design",
      "Power Electronics Layout",
      "HDI & Fine-pitch BGA",
      "Impedance Control & Length Matching",
      "EMI/EMC-Aware Design",
    ],
  },
  {
    id: "dfm",
    icon: Settings,
    title: "Design for Manufacturing",
    description: "Designed with fabrication, assembly and production in mind. We optimize your design for yield, cost and reliability before it hits the fab house.",
    details: [
      "DFM & DRC Review",
      "BOM Optimization & Cost Reduction",
      "Design Verification & Validation",
      "Manufacturing Documentation",
      "Assembly Drawing Generation",
      "Test Point Strategy",
    ],
  },
  {
    id: "prototyping",
    icon: Wrench,
    title: "Prototyping & Testing",
    description: "From PCB fabrication coordination to assembly, bring-up and functional testing. We get your hardware from design to physical prototype.",
    details: [
      "PCB Fabrication Coordination",
      "Component Sourcing & Kitting",
      "PCBA Assembly Management",
      "Bench Bring-up & Debug",
      "Functional Testing",
      "Design Iteration Support",
    ],
  },
  {
    id: "sourcing",
    icon: Search,
    title: "Component Sourcing",
    description: "BOM optimization, supplier selection and procurement support. We ensure your components are available, cost-effective and delivery-ready.",
    details: [
      "BOM Cost Analysis & Optimization",
      "Supplier Selection & Qualification",
      "Alternative Component Identification",
      "Lead Time Analysis",
      "Bulk Pricing Negotiation",
      "Inventory Planning",
    ],
  },
  {
    id: "manufacturing",
    icon: Package,
    title: "Manufacturing Support",
    description: "Coordinating prototyping through production with selected manufacturing partners. Scaling your hardware from prototype to volume.",
    details: [
      "Manufacturer Selection",
      "Production Coordination",
      "Quality Control Oversight",
      "Yield Optimization",
      "Supply Chain Management",
      "Logistics & Delivery",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent-blue">
            What We Do
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Engineering Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-400">
            End-to-end hardware engineering capability — from first schematic to
            finished production hardware.
          </p>
        </FadeIn>

        <div className="mt-20 space-y-16">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.05}>
              <div
                id={service.id}
                className="scroll-mt-24 rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-12"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-navy-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {service.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                      <span className="text-sm text-navy-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-20">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Not sure what you need?
            </h2>
            <p className="mt-2 text-navy-400">
              Tell us about your project. We&apos;ll determine the right
              engineering path.
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
