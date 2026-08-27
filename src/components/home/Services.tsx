"use client";

import { Cpu, Layers, Settings, Wrench, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

const services = [
  {
    icon: Cpu,
    number: "01",
    title: "Hardware Engineering",
    description:
      "Circuit architecture, component selection, schematic design, power architecture — from first principles to production-ready design.",
    href: "/services#hardware",
    details: [
      "Circuit Architecture",
      "Component Selection",
      "Schematic Design",
      "Power Architecture",
    ],
  },
  {
    icon: Layers,
    number: "02",
    title: "PCB Engineering",
    description:
      "Multi-layer PCB, HDI, RF, high-speed, power electronics — layout optimized for signal integrity, thermal performance and manufacturability.",
    href: "/services#pcb",
    details: [
      "Multi-layer PCB",
      "RF & High-speed",
      "Power Electronics",
      "Layout Optimization",
    ],
  },
  {
    icon: Settings,
    number: "03",
    title: "Design for Manufacturing",
    description:
      "DFM, BOM optimization, design verification, manufacturing documentation — designed with fabrication, assembly and production in mind.",
    href: "/services#dfm",
    details: [
      "DFM Review",
      "BOM Optimization",
      "Design Verification",
      "Manufacturing Docs",
    ],
  },
  {
    icon: Wrench,
    number: "04",
    title: "Prototype & Production",
    description:
      "PCB fabrication, component sourcing, PCBA, testing, manufacturing — from prototype through to production-ready hardware.",
    href: "/services#prototyping",
    details: [
      "PCB Fabrication",
      "Component Sourcing",
      "PCBA & Assembly",
      "Testing & Delivery",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent-blue">
              What We Do
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              End-to-End Hardware Engineering
            </h2>
            <p className="mt-4 text-lg text-navy-400 max-w-2xl mx-auto">
              Four integrated service areas delivering complete hardware
              development capability.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.1}>
              <Card hover className="group h-full">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 text-xs font-semibold text-navy-500">
                    {service.number}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-navy-400">
                {service.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {service.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-navy-300"
                  >
                    {detail}
                  </span>
                ))}
              </div>

              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue transition-colors group-hover:text-accent-blue-dark"
              >
                Explore {service.title}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
