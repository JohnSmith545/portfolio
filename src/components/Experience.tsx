import { experience } from "@/data/content"; // Work and education timeline
import { Section } from "@/components/Section"; // Numbered section wrapper
import { OrgLogo } from "@/components/OrgLogo"; // Employer or school logo tile
import { reveal } from "@/components/reveal"; // Fade-up on scroll

// Vertical timeline of roles and education with each organisation's logo, newest first
export function Experience() {
  return (
    <Section id="experience" index="06 experience" title="Experience and education">
      <ol data-reveal="" className="timeline relative space-y-8 pl-6">
        {/* The line draws downward when the timeline comes into view */}
        <span aria-hidden className="timeline-line absolute bottom-0 left-0 top-0 w-px bg-border" />
        {experience.map((item, i) => (
          <li key={`${item.org}-${item.role}`} {...reveal(i)} className="relative flex gap-4">
            <span aria-hidden className="timeline-dot absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <OrgLogo name={item.org} size={44} />
            <div className="min-w-0">
              <p className="font-mono text-sm text-muted">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold">
                {item.role} <span className="text-muted">· {item.org}</span>
              </h3>
              {item.note && <p className="mt-2 max-w-2xl leading-relaxed text-muted">{item.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
