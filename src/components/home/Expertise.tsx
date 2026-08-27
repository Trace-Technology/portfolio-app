const expertise = [
  {
    title: "PCB Engineering",
    items: ["Multi-layer", "RF", "High-speed", "DFM"],
    color: "blue" as const,
  },
  {
    title: "Power Electronics",
    items: ["Buck / Boost", "MPPT", "Battery Systems", "Thermal Design"],
    color: "purple" as const,
  },
  {
    title: "Embedded Hardware",
    items: ["STM32", "ESP32", "ATmega", "CAN / SPI / I²C"],
    color: "green" as const,
  },
  {
    title: "Energy Systems",
    items: ["BMS", "Solar", "Li-ion", "LiFePO4"],
    color: "amber" as const,
  },
  {
    title: "Aerospace & UAV",
    items: ["CubeSat", "Flight Electronics", "Drone Power", "Telemetry"],
    color: "blue" as const,
  },
  {
    title: "Validation",
    items: ["Bench Bring-up", "Testing", "Debugging", "Failure Analysis"],
    color: "purple" as const,
  },
];

const colorMap = {
  blue: "border-accent-blue/20 bg-accent-blue/5",
  purple: "border-accent-purple/20 bg-accent-purple/5",
  green: "border-accent-green/20 bg-accent-green/5",
  amber: "border-accent-amber/20 bg-accent-amber/5",
};

const dotColor = {
  blue: "bg-accent-blue",
  purple: "bg-accent-purple",
  green: "bg-accent-green",
  amber: "bg-accent-amber",
};

export default function Expertise() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent-blue">
            Technical Depth
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Engineering Expertise
          </h2>
          <p className="mt-4 text-lg text-navy-400 max-w-2xl mx-auto">
            Deep capability across the full hardware development stack.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.title}
              className={`rounded-xl border p-6 ${colorMap[item.color]}`}
            >
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.items.map((sub) => (
                  <span
                    key={sub}
                    className="flex items-center gap-1.5 text-sm text-navy-300"
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${dotColor[item.color]}`} />
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
