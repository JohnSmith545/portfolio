import type { ReactNode } from "react"; // Children type
import Image from "next/image"; // Optimised, lazy-loaded screenshots
import { integrations, projects, type Project, type Screenshot } from "@/data/content"; // Project list, integrations and types
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

// Captioned screenshots; each opens full size in a new tab
function Gallery({ shots }: { shots: Screenshot[] }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {shots.map((shot) => (
        <figure key={shot.src}>
          <a
            href={shot.src}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded border border-border transition-colors hover:border-accent"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1440}
              height={900}
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </a>
          <figcaption className="mt-2 font-mono text-xs text-muted">{shot.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

// Third-party systems wired into Reviva, one small card each
function Integrations() {
  return (
    <div className="rounded border border-border bg-surface-2 p-5">
      <p className="font-mono text-xs uppercase tracking-wide text-muted">
        Production integrations: signed webhooks, idempotent processing, retry sweeps
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {integrations.map((item) => (
          <li key={item.name} className="rounded border border-border bg-surface p-4">
            <h4 className="font-mono text-sm font-semibold text-accent">{item.name}</h4>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
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
      {project.screenshots && <Gallery shots={project.screenshots} />}
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
        Client platforms I built at Hytel. Screenshots use test data with client branding blurred.
      </p>
      <div className="space-y-6">
        <ProjectCard project={reviva}>
          <div className="mt-6 space-y-4">
            <IdentificationPipeline />
            <EvaluationLoop />
            <Integrations />
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
