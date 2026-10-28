import { skills } from "@/data/content"; // Grouped skill lists
import { Section } from "@/components/Section"; // Numbered section wrapper
import { SkillIcon } from "@/components/SkillIcon"; // Brand or line icon per skill

// Skill groups rendered as rows of icon tags, AI first
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
                  <li
                    key={item}
                    className="group flex items-center gap-2 rounded border border-border bg-surface px-3 py-1.5 text-sm transition-colors duration-200 hover:border-accent-dim"
                  >
                    <SkillIcon name={item} />
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
