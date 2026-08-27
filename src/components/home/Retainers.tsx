"use client";

import { useState } from "react";
import { X, Mail, Copy, Check } from "lucide-react";
import Section from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/Section";

const plans = [
  {
    name: "Launch",
    description: "For startups and small projects getting off the ground.",
    features: [
      "Core engineering capacity",
      "PCB design & revisions",
      "Schematic support",
      "BOM assistance",
      "Monthly project reporting",
    ],
  },
  {
    name: "Scale",
    description: "For companies actively developing and iterating hardware.",
    features: [
      "Priority engineering capacity",
      "PCB design & revisions",
      "Schematic support",
      "DFM review",
      "BOM assistance",
      "Monthly project reporting",
      "Dedicated technical contact",
    ],
    highlighted: true,
  },
  {
    name: "Embedded",
    description: "For teams that need a full-time engineering extension.",
    features: [
      "Full engineering team extension",
      "Unlimited PCB & schematic work",
      "DFM & design review",
      "Component sourcing support",
      "Prototyping coordination",
      "Weekly reporting",
      "Dedicated project manager",
      "Priority response time",
    ],
  },
];

export default function Retainers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "info@tracetechnology.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${email}?subject=Engineering Retainer Inquiry`;
  };

  return (
    <>
      <Section className="bg-navy-950/50">
        <SectionHeader
          label="Engineering Retainers"
          title="Flexible Engagement Models"
          description="Continuous engineering capacity scaled to your development needs."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-accent-blue/30 bg-accent-blue/5 shadow-xl shadow-accent-blue/10"
                  : "border-white/5 bg-white/[0.02]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-blue px-4 py-1 text-xs font-bold text-navy-950">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-navy-400">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-navy-300"
                  >
                    <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-accent-green/20 flex items-center justify-center text-accent-green text-xs">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  onClick={() => setModalOpen(true)}
                  className={`w-full rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-accent-blue text-navy-950 hover:bg-accent-blue-dark"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-navy-400">
          Need a custom engineering capacity?{" "}
          <button
            onClick={() => setModalOpen(true)}
            className="text-accent-blue hover:underline"
          >
            Talk to us.
          </button>
        </p>
      </Section>

      {/* Email Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-navy-900 p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="rounded-lg p-1 text-navy-400 hover:bg-white/5 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-sm text-navy-400">
              Send us an email and we&apos;ll get back to you within 1 business
              day.
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Mail className="h-5 w-5 shrink-0 text-accent-blue" />
              <span className="flex-1 text-sm text-white font-mono">
                {email}
              </span>
              <button
                onClick={handleCopy}
                className="rounded-lg p-1.5 text-navy-400 hover:bg-white/10 hover:text-white transition-colors"
                title="Copy email"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-accent-green" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handleSendEmail}
                className="flex-1 rounded-lg bg-accent-blue px-4 py-3 text-sm font-semibold text-navy-950 hover:bg-accent-blue-dark transition-colors"
              >
                Send Email
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
