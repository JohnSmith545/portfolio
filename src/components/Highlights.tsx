import { highlights } from "@/data/content"; // AI feature summaries
import { Section } from "@/components/Section"; // Numbered section wrapper

// Four-card overview of the AI work, ahead of the project deep dive
export function Highlights() {
  return (
    <Section id="ai-work" index="01 ai work" title="AI features in production">
      <ul className="grid gap-4 sm:grid-cols-2">
        {highlights.map((item) => (
          <li key={item.title} className="rounded border border-border bg-surface p-6">
            <h3 className="font-mono text-base font-semibold text-accent">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
