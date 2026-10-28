import { profile, stats } from "@/data/content"; // Name, pitch and headline numbers

// Opening screen: terminal prompt, name, role, pitch and calls to action
export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-24">
      <p className="font-mono text-sm text-muted">
        <span className="text-accent">$</span> whoami<span className="cursor text-accent">_</span>
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
      <p className="mt-3 font-mono text-lg text-accent sm:text-xl">{profile.role}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.pitch}</p>
      <p className="mt-2 text-sm text-muted">{profile.location}</p>

      {/* Phones: full-width primary button with the other two side by side; wider screens: one row */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
        <a
          href="#projects"
          className="col-span-2 rounded bg-accent px-5 py-2.5 text-center font-medium text-bg transition-opacity hover:opacity-90"
        >
          See my work
        </a>
        <a
          href={profile.resume}
          download
          className="rounded border border-border px-4 py-2.5 text-center font-medium transition-colors hover:border-accent hover:text-accent sm:px-5"
        >
          <span className="sm:hidden">Resume</span>
          <span className="hidden sm:inline">Download resume</span>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-border px-4 py-2.5 text-center font-medium transition-colors hover:border-accent hover:text-accent sm:px-5"
        >
          LinkedIn
        </a>
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col rounded border border-border bg-surface p-4 sm:p-5">
            <dt className="text-xs leading-snug text-muted sm:text-sm">{stat.label}</dt>
            <dd className="order-first font-mono text-2xl font-semibold text-accent sm:text-3xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
