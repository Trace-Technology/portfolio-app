import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Contact — Trace Technology",
  description: "Get in touch with Trace Technology for hardware engineering inquiries.",
};

export default function ContactPage() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent-blue">
            Contact
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s Build Your Hardware
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-400">
            Have a product idea, PCB problem, or hardware project? We&apos;re
            here to help.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center">
              <div className="text-2xl">📧</div>
              <h3 className="mt-3 font-semibold text-white">Email</h3>
              <p className="mt-1 text-sm text-navy-400">
                info@tracetechnology.com
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center">
              <div className="text-2xl">📍</div>
              <h3 className="mt-3 font-semibold text-white">Location</h3>
              <p className="mt-1 text-sm text-navy-400">
                Bangladesh
                <br />
                Serving Clients Worldwide
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center">
              <div className="text-2xl">⏱️</div>
              <h3 className="mt-3 font-semibold text-white">Response Time</h3>
              <p className="mt-1 text-sm text-navy-400">
                Within 1 business day
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
