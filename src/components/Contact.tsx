import { profile } from "@/data/content"; // Email and profile links
import { Section } from "@/components/Section"; // Numbered section wrapper

// Closing call to action with email, LinkedIn, GitHub and resume
export function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", value: "juch-guliquey", href: profile.linkedin },
    { label: "GitHub", value: "JohnSmith545", href: profile.github },
    { label: "Resume", value: "Download PDF", href: profile.resume },
  ];
  return (
    <Section id="contact" index="07 contact" title="Let's talk">
      <p className="max-w-2xl text-lg text-muted">
        Open to AI Engineer, LLM Engineer and AI-focused full-stack roles, remote or in the Philippines.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {links.map((link) => {
          const external = link.href.startsWith("http");
          return (
            <li key={link.label}>
              <a
                href={link.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(link.label === "Resume" ? { download: true } : {})}
                className="block rounded border border-border bg-surface p-5 transition-colors hover:border-accent"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-muted">{link.label}</span>
                <span className="mt-1 block break-all text-lg text-accent">{link.value}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <footer className="mt-20 font-mono text-xs text-muted">
        © 2026 {profile.name}. Built with Next.js and Tailwind, deployed on Vercel.
      </footer>
    </Section>
  );
}
