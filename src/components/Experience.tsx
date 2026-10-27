import { experience } from "@/data/content"; // Work and education timeline
import { Section } from "@/components/Section"; // Numbered section wrapper

// Vertical timeline of roles and education, newest first
export function Experience() {
  return (
    <Section id="experience" index="06 experience" title="Experience and education">
      <ol className="relative space-y-8 border-l border-border pl-6">
        {experience.map((item) => (
          <li key={`${item.org}-${item.role}`} className="relative">
            <span aria-hidden className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <p className="font-mono text-sm text-muted">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold">
              {item.role} <span className="text-muted">· {item.org}</span>
            </h3>
            {item.note && <p className="mt-2 max-w-2xl leading-relaxed text-muted">{item.note}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}
