import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ImageCarousel from "@/components/ui/ImageCarousel";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <Button href="/work" variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>

        <div className="mt-8 flex flex-wrap gap-2">
          <Badge variant="blue">{project.category}</Badge>
          <Badge>{project.year}</Badge>
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          {project.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-6 text-sm text-navy-400">
          <span>
            <strong className="text-navy-300">Client:</strong> {project.client}
          </span>
          <span>
            <strong className="text-navy-300">Role:</strong> {project.role}
          </span>
        </div>

        <ImageCarousel
          images={project.images}
          alt={project.title}
          className="mt-8"
        />

        <div className="mt-12 space-y-12">
          <div>
            <h2 className="text-xl font-bold text-white">Overview</h2>
            <p className="mt-3 text-navy-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">Challenge</h2>
            <p className="mt-3 text-navy-400 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">Our Approach</h2>
            <ul className="mt-3 space-y-2">
              {project.approach.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-navy-400"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              Technical Highlights
            </h2>
            <ul className="mt-3 space-y-2">
              {project.technicalHighlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-navy-400"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">Deliverables</h2>
            <ul className="mt-3 space-y-2">
              {project.deliverables.map((d, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-navy-400"
                >
                  <span className="text-accent-green">✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
          <h3 className="text-xl font-bold text-white">
            Have a similar project?
          </h3>
          <p className="mt-2 text-sm text-navy-400">
            Let us help you engineer your next hardware product.
          </p>
          <Button href="/place-order" className="mt-6">
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
}
