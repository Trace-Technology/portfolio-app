const stats = [
  { value: "12+", label: "Hardware Projects" },
  { value: "6+", label: "International Clients" },
  { value: "PCB→", label: "Prototype Experience" },
  { value: "100%", label: "Engineering-Led" },
  { value: "100%", label: "Client Delivery" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-navy-950/50 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-navy-500">
          Trusted Engineering Capability
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-navy-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
