import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import ImageCarousel from "@/components/ui/ImageCarousel";

export const metadata: Metadata = {
  title: "Our Work — Trace Technology",
  description: "12+ hardware projects — architecture to production. PCB design, power electronics, aerospace and IoT.",
};

export default function WorkPage() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-white">Our Work</h1>
        <p className="mt-4 text-lg text-navy-400">
          {projects.length} hardware projects — architecture to production.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.id} href={`/work/${project.slug}`}>
              <Card hover className="group h-full">
                <ImageCarousel
                  images={project.images}
                  alt={project.title}
                  className="mb-4"
                />
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="blue">{project.category}</Badge>
                  <Badge>{project.year}</Badge>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-navy-400 line-clamp-2">
                  {project.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
