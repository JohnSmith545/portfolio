import { profile, stats } from "@/data/content"; // Name, pitch and headline numbers

// Opening screen: terminal prompt, name, role, pitch and calls to action
export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <p className="font-mono text-sm text-muted">
        <span className="text-accent">$</span> whoami<span className="cursor text-accent">_</span>
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
      <p className="mt-3 font-mono text-lg text-accent sm:text-xl">{profile.role}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.pitch}</p>
      <p className="mt-2 text-sm text-muted">{profile.location}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded bg-accent px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-90"
        >
          See my work
        </a>
        <a
          href={profile.resume}
          download
          className="rounded border border-border px-5 py-2.5 font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Download resume
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-border px-5 py-2.5 font-medium transition-colors hover:border-accent hover:text-accent"
        >
          LinkedIn
        </a>
      </div>

      <dl className="mt-14 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col rounded border border-border bg-surface p-5">
            <dt className="text-sm text-muted">{stat.label}</dt>
            <dd className="order-first font-mono text-3xl font-semibold text-accent">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
