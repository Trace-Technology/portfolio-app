"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent-blue/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-purple/5 blur-[100px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-sm font-medium text-accent-green">
              Available for new projects
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            DESIGN.
            <br />
            ENGINEER.
            <br />
            <span className="text-accent-blue">BUILD.</span>{" "}
            SCALE.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy-300 sm:text-xl">
            Hardware engineering for companies building the next generation of
            connected products. We turn electronic product ideas into
            production-ready hardware through PCB design, hardware engineering,
            prototyping, and manufacturing support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/place-order" size="lg">
              Place Order
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              View Our Work
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-navy-400">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              PCB Engineering
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              Hardware Development
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              DFM
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              Prototyping
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              Sourcing
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-navy-500" />
      </div>
    </section>
  );
}
