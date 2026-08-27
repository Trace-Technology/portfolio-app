import Section from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/Section";

const founders = [
  {
    name: "Benzir Ahammed",
    role: "Co-Founder & CTO",
    responsibilities: [
      "Technical Leadership",
      "Hardware Engineering",
      "PCB Design",
      "Quality & R&D",
    ],
    credentials: [
      "BSc Aeronautical Engineering (Avionics)",
      "Space Power Electronics",
      "12+ Hardware Projects",
    ],
  },
  {
    name: "[Co-Founder Name]",
    role: "Co-Founder — Business & Partnerships",
    responsibilities: [
      "Business Development",
      "Client Relationships",
      "Strategic Partnerships",
      "Global Expansion",
    ],
    credentials: [
      "Business Strategy",
      "Client Acquisition",
      "Partnership Development",
      "Market Expansion",
    ],
  },
];

export default function Founders() {
  return (
    <Section className="bg-navy-950/50">
      <SectionHeader
        label="Our Team"
        title="Meet the Founders"
        description="Building Trace Technology on a foundation of deep technical expertise and business vision."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {founders.map((founder) => (
          <div
            key={founder.name}
            className="rounded-2xl border border-white/5 bg-white/[0.02] p-8"
          >
            {/* Avatar placeholder */}
            <div className="mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {founder.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">{founder.name}</h3>
            <p className="text-sm text-accent-blue">{founder.role}</p>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                Focus Areas
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {founder.responsibilities.map((r) => (
                  <span
                    key={r}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-navy-300"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                Credentials
              </h4>
              <ul className="mt-2 space-y-1">
                {founder.credentials.map((c) => (
                  <li key={c} className="text-sm text-navy-400">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
