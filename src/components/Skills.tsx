import { skills } from "@/data/content"; // Grouped skill lists
import { Section } from "@/components/Section"; // Numbered section wrapper

// Skill groups rendered as rows of tags, AI first
export function Skills() {
  return (
    <Section id="skills" index="04 skills" title="Skills">
      <dl className="space-y-6">
        {skills.map((group) => (
          <div key={group.group} className="grid gap-3 sm:grid-cols-[12rem_1fr]">
            <dt className="font-mono text-sm text-accent">{group.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded border border-border bg-surface px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
