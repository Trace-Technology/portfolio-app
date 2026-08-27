import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — Trace Technology",
  description: "Making high-quality hardware engineering accessible to ambitious companies worldwide.",
};

export default function AboutPage() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent-blue">
            About
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Engineering the Hardware
            <br />
            Behind What&apos;s Next
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 space-y-8 text-lg text-navy-400 leading-relaxed">
            <p>
              <strong className="text-white">Our Mission</strong>
              <br />
              To make high-quality hardware engineering accessible to ambitious
              companies worldwide — from early-stage startups to established
              product companies.
            </p>

            <p>
              Hardware development is fragmented. Companies need separate
              engineers, PCB designers, sourcing companies and manufacturers.
              We bring these capabilities together under one roof.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <h2 className="text-2xl font-bold text-white">Where We&apos;re Going</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10 text-sm font-bold text-accent-blue">
                  Now
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    PCB & Hardware Engineering
                  </h3>
                  <p className="text-sm text-navy-400">
                    Core design, layout, schematic and DFM services
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10 text-sm font-bold text-accent-blue">
                  Next
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Sourcing + Prototyping
                  </h3>
                  <p className="text-sm text-navy-400">
                    Component sourcing, prototype builds and iteration support
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-purple/10 text-sm font-bold text-accent-purple">
                  Future
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    End-to-End Hardware Development
                  </h3>
                  <p className="text-sm text-navy-400">
                    Full manufacturing coordination and production support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-navy-400">
              Let&apos;s build something great together.
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
