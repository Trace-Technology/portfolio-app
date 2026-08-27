import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

const industries = [
  {
    icon: "🤖",
    title: "Robotics",
    items: ["Motor Controllers", "Sensor Systems", "Power Distribution", "Embedded Control"],
  },
  {
    icon: "🚁",
    title: "Aerospace & UAV",
    items: ["Flight Electronics", "Power Systems", "Telemetry", "Control Electronics"],
  },
  {
    icon: "📡",
    title: "IoT & Smart Devices",
    items: ["Wireless Devices", "Low-power Systems", "Sensors", "BLE / Zigbee"],
  },
  {
    icon: "⚡",
    title: "Energy & Power",
    items: ["Solar", "BMS", "Power Conversion", "Energy Storage"],
  },
  {
    icon: "🏭",
    title: "Industrial Electronics",
    items: ["Controllers", "Automation", "Instrumentation", "Power Electronics"],
  },
  {
    icon: "🚗",
    title: "Automotive & EV",
    items: ["BMS", "Motor Controllers", "Vehicle Electronics", "Power Systems"],
  },
];

export default function Industries() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent-blue">
              Industries
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built for Hardware-Driven Industries
            </h2>
            <p className="mt-4 text-lg text-navy-400 max-w-2xl mx-auto">
              Engineering capability spanning the most demanding hardware sectors.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <FadeIn key={industry.title} delay={i * 0.05}>
              <Card hover className="h-full">
              <div className="text-3xl">{industry.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-white">
                {industry.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {industry.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-navy-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
