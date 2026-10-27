import type { ReactNode } from "react"; // Children type

type Props = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

// Page section with a terminal-style numbered label above the heading
export function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="font-mono text-sm text-accent">
          {"// "}
          {index}
        </p>
        <h2 id={`${id}-title`} className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
