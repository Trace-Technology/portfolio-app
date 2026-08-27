import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries — Trace Technology",
  description: "Hardware engineering for robotics, aerospace, IoT, energy, industrial and automotive sectors.",
};

const industries = [
  {
    icon: "🤖",
    title: "Robotics",
    description: "Motor controllers, sensor systems, power distribution and embedded control for autonomous and teleoperated robotic systems.",
    capabilities: [
      "Motor Controller Design",
      "Sensor Fusion Systems",
      "Power Distribution Boards",
      "Embedded Control Electronics",
      "Actuator Drive Stages",
      "Communication Bus Design",
    ],
  },
  {
    icon: "🚁",
    title: "Aerospace & UAV",
    description: "Flight electronics, power systems, telemetry and control electronics for drones, CubeSats and aerospace applications.",
    capabilities: [
      "Flight Controller PCB",
      "Power Conditioning & Distribution",
      "Telemetry & Communication",
      "EPS & Battery Management",
      "UWB & Direction Finding",
      "Ruggedized Electronics",
    ],
  },
  {
    icon: "📡",
    title: "IoT & Smart Devices",
    description: "Wireless devices, low-power systems, sensors and connected hardware for IoT deployments and smart products.",
    capabilities: [
      "BLE / Zigbee / LoRa Design",
      "Ultra-low Power Systems",
      "Sensor Node Hardware",
      "Gateway & Hub Design",
      "Printed Antenna Integration",
      "Energy Harvesting",
    ],
  },
  {
    icon: "⚡",
    title: "Energy & Power Electronics",
    description: "Solar, BMS, power conversion and energy storage systems for renewable energy and power infrastructure.",
    capabilities: [
      "MPPT Charge Controllers",
      "Battery Management Systems",
      "Solar Inverter Design",
      "Power Converter Topologies",
      "Energy Storage Systems",
      "Grid-tie Electronics",
    ],
  },
  {
    icon: "🏭",
    title: "Industrial Electronics",
    description: "Controllers, automation systems, instrumentation and power electronics for industrial environments.",
    capabilities: [
      "PLC & Controller Hardware",
      "Industrial Communication (CAN, Modbus)",
      "Instrumentation & Sensing",
      "Power Electronics Drives",
      "Automation Systems",
      "Ruggedized Design",
    ],
  },
  {
    icon: "🚗",
    title: "Automotive & EV",
    description: "BMS, motor controllers, vehicle electronics and power systems for automotive and electric vehicle applications.",
    capabilities: [
      "BMS Hardware Design",
      "Motor Controller PCB",
      "Vehicle Bus Electronics",
      "Charging Systems",
      "Power Distribution",
      "Thermal Management",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent-blue">
            Industries
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built for Hardware-Driven Industries
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-400">
            Engineering capability spanning the most demanding hardware sectors.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {industries.map((industry, i) => (
            <FadeIn key={industry.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                <div className="text-4xl">{industry.icon}</div>
                <h2 className="mt-4 text-xl font-bold text-white">
                  {industry.title}
                </h2>
                <p className="mt-3 text-sm text-navy-400 leading-relaxed">
                  {industry.description}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {industry.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2 text-sm text-navy-300"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-20">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Your industry not listed?
            </h2>
            <p className="mt-2 text-navy-400">
              We work across electronics domains. Tell us about your application.
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
