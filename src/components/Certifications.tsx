import { certifications } from "@/data/content"; // Certificates with issuers and links
import { Section } from "@/components/Section"; // Numbered section wrapper
import { OrgLogo } from "@/components/OrgLogo"; // Issuer logo tile
import { reveal } from "@/components/reveal"; // Fade-up on scroll

// Certificate cards with the issuer's logo, each linking to its public credential when one exists
export function Certifications() {
  return (
    <Section id="certifications" index="05 certifications" title="Certifications">
      <ul className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <li
            key={cert.name}
            {...reveal(i)}
            className="card-hover flex gap-4 rounded border border-border border-l-4 border-l-accent bg-surface p-5"
          >
            <OrgLogo name={cert.issuer} />
            <div className="flex min-w-0 flex-col">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                {cert.issuer} · {cert.date}
              </p>
              <h3 className="mt-1 font-semibold">{cert.name}</h3>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 self-start font-mono text-sm text-accent hover:underline"
                >
                  View credential ↗
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
