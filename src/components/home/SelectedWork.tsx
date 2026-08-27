import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import ImageCarousel from "@/components/ui/ImageCarousel";

export default function SelectedWork() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-24 px-6 bg-navy-950/50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent-blue">
              Commercial Track Record
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built. Tested. Delivered.
            </h2>
          </div>
          <Link
            href="/work"
            className="group flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-accent-blue-dark"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
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

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/5 px-2 py-0.5 text-xs text-navy-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
