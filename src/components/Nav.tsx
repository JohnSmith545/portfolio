import { profile } from "@/data/content"; // Resume link
import { MobileMenu } from "@/components/MobileMenu"; // Section links on phones

const links = [
  { href: "#ai-work", label: "AI work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certs" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

// Sticky top bar with section links (a menu on phones) and a resume download
export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/85 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm font-semibold text-text">
          <span className="text-accent">juch</span>@portfolio:~$
        </a>
        <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="rounded border border-accent px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            resume.pdf
          </a>
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}
