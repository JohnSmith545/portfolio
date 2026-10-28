"use client";

import { useEffect, useRef, useState } from "react"; // Open state and outside-click handling
import { Menu, X } from "lucide-react"; // Hamburger and close icons

type Link = { href: string; label: string };

// Phone-only menu: a toggle that slides the section links down below the nav bar
export function MobileMenu({ links }: { links: Link[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Closes on Esc or a tap anywhere outside the menu
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-9 w-9 items-center justify-center rounded border border-border text-text transition-colors hover:border-accent hover:text-accent"
      >
        {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
      </button>
      <ul
        id="mobile-menu"
        hidden={!open}
        className="mobile-menu absolute inset-x-0 top-14 border-b border-border bg-bg px-4 py-2 shadow-lg shadow-black/40"
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 font-mono text-sm text-muted transition-colors last:border-0 hover:text-accent"
            >
              <span className="text-accent">{"> "}</span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
