import { workStyle } from "@/data/content"; // Working-style cards
import { Section } from "@/components/Section"; // Numbered section wrapper

// Client communication and delivery habits, for teams that value more than code
export function HowIWork() {
  return (
    <Section id="how-i-work" index="03 how i work" title="How I work">
      <ul className="grid gap-4 md:grid-cols-3">
        {workStyle.map((item, i) => (
          <li
            key={item.title}
            className={`rounded border bg-surface p-6 ${i === 0 ? "border-accent" : "border-border"}`}
          >
            <h3 className="font-semibold text-text">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
