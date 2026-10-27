import type { ReactNode } from "react"; // Children type
import { projects, type Project } from "@/data/content"; // Project list and type
import { Section } from "@/components/Section"; // Numbered section wrapper
import { EvaluationLoop, IdentificationPipeline } from "@/components/Diagrams"; // Reviva case study diagrams

// Small pill tags for the tech used on a project
function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
      {items.map((item) => (
        <li key={item} className="rounded bg-surface-2 px-2 py-1 font-mono text-xs text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

// One project: name, contribution badge, dates, summary and bullet points
function ProjectCard({ project, children }: { project: Project; children?: ReactNode }) {
  const main = project.role === "Main contributor";
  return (
    <article className="rounded border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-2xl font-semibold">{project.name}</h3>
        <span
          className={`rounded px-2 py-0.5 font-mono text-xs font-semibold uppercase tracking-wide ${
            main ? "bg-accent text-bg" : "border border-accent-dim text-accent"
          }`}
        >
          {project.role}
        </span>
        <span className="ml-auto font-mono text-sm text-muted">{project.period}</span>
      </div>
      <p className="mt-3 text-muted">{project.summary}</p>
      {children}
      <ul className="mt-6 space-y-2">
        {project.points.map((point) => (
          <li key={point} className="flex gap-3 leading-relaxed">
            <span aria-hidden className="font-mono text-accent">
              {">"}
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Stack items={project.stack} />
      </div>
    </article>
  );
}

// Projects, with Reviva expanded into a case study with diagrams
export function Projects() {
  const [reviva, ...rest] = projects;
  return (
    <Section id="projects" index="02 projects" title="Projects">
      <p className="mb-8 max-w-2xl text-muted">
        Client platforms I built at Hytel. Client names and data stay private, so the case study uses
        diagrams instead of screenshots.
      </p>
      <div className="space-y-6">
        <ProjectCard project={reviva}>
          <div className="mt-6 space-y-4">
            <IdentificationPipeline />
            <EvaluationLoop />
          </div>
        </ProjectCard>
        <div className="grid gap-6 lg:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
