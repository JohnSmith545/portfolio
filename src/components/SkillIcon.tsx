import type { CSSProperties } from "react"; // Inline style type for the hover colour
import { Sparkles } from "lucide-react"; // Fallback for a skill without a mapped icon
import { skillIcons } from "@/data/skillIcons"; // Skill name to icon

// Brand colours too dark to see on the dark theme hover to near-white instead
function hoverColour(hex: string): string {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.25 ? "#e6edf0" : `#${hex}`;
}

// Small icon for one skill: grey at rest, brand colour (or accent) when its chip is hovered
export function SkillIcon({ name }: { name: string }) {
  const icon = skillIcons[name];
  if (icon && "brand" in icon) {
    const style = { "--hover": hoverColour(icon.brand.hex) } as CSSProperties;
    return (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        style={style}
        className="h-4 w-4 shrink-0 fill-current text-muted transition-colors duration-200 group-hover:text-(--hover)"
      >
        <path d={icon.brand.path} />
      </svg>
    );
  }
  const Line = icon && "line" in icon ? icon.line : Sparkles;
  return (
    <Line
      aria-hidden
      size={16}
      strokeWidth={1.75}
      className="shrink-0 text-muted transition-colors duration-200 group-hover:text-accent"
    />
  );
}
