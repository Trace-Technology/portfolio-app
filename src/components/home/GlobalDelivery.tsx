import Section from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

const regions = [
  { flag: "🇧🇩", location: "Bangladesh", role: "Engineering Hub" },
  { flag: "🌏", location: "Asia Pacific", role: "Manufacturing & Supply Chain" },
  { flag: "🇬🇧", location: "United Kingdom", role: "Engineering Clients" },
  { flag: "🇺🇸", location: "United States", role: "Global Clients" },
  { flag: "🇪🇺", location: "Europe", role: "Engineering Clients" },
  { flag: "🇰🇷", location: "South Korea", role: "Engineering Clients" },
];

export default function GlobalDelivery() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          label="Global Reach"
          title="Engineering Without Borders"
          description="Based in Bangladesh. Serving hardware companies worldwide."
        />
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regions.map((region, i) => (
          <FadeIn key={region.location} delay={i * 0.05}>
            <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 h-full">
              <span className="text-3xl">{region.flag}</span>
              <div>
                <div className="font-bold text-white">{region.location}</div>
                <div className="text-sm text-navy-400">{region.role}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
          <h3 className="text-xl font-bold text-white">
            From Engineering to Manufacturing
          </h3>
          <p className="mt-2 text-sm text-navy-400 max-w-2xl mx-auto">
            As your product moves toward production, our manufacturing network can
            support component sourcing, PCB fabrication, assembly, prototyping and
            production coordination.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <span className="rounded-lg bg-accent-blue/10 px-4 py-2 text-sm font-medium text-accent-blue">
              Engineering
            </span>
            <span className="text-navy-500">→</span>
            <span className="rounded-lg bg-accent-blue/10 px-4 py-2 text-sm font-medium text-accent-blue">
              Sourcing
            </span>
            <span className="text-navy-500">→</span>
            <span className="rounded-lg bg-accent-blue/10 px-4 py-2 text-sm font-medium text-accent-blue">
              Prototyping
            </span>
            <span className="text-navy-500">→</span>
            <span className="rounded-lg bg-accent-amber/10 px-4 py-2 text-sm font-medium text-accent-amber">
              Manufacturing
            </span>
          </div>
          <p className="mt-3 text-xs text-navy-500">
            Manufacturing available for selected projects — scaling in 2026
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
