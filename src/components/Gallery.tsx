"use client";

import { useEffect, useRef, useState } from "react"; // Lightbox state and dialog handle
import Image from "next/image"; // Optimised, lazy-loaded screenshots
import { X } from "lucide-react"; // Close icon
import type { Screenshot } from "@/data/content"; // Screenshot type

// Captioned screenshots; clicking one opens it full size in an on-page lightbox
export function Gallery({ shots }: { shots: Screenshot[] }) {
  const [active, setActive] = useState<Screenshot | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Opens the native modal dialog (focus trap and Esc for free) and locks page scroll behind it
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !active) return;
    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [active]);

  const close = () => dialogRef.current?.close();

  return (
    <>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {shots.map((shot) => (
          <figure key={shot.src}>
            <button
              type="button"
              onClick={() => setActive(shot)}
              aria-label={`Enlarge: ${shot.caption}`}
              className="group block w-full cursor-zoom-in overflow-hidden rounded border border-border transition-colors hover:border-accent"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={1440}
                height={900}
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>
            <figcaption className="mt-2 font-mono text-xs text-muted">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        aria-label={active?.caption}
        className="lightbox"
      >
        {active && (
          // Clicking anywhere outside the image (the padded area around it) closes the lightbox
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-3 p-4 sm:p-10"
            onClick={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="fixed right-3 top-3 rounded-full border border-border bg-surface/90 p-2 text-text transition-colors hover:border-accent hover:text-accent sm:right-6 sm:top-6"
            >
              <X size={22} aria-hidden />
            </button>
            <Image
              src={active.src}
              alt={active.alt}
              width={1440}
              height={900}
              sizes="100vw"
              className="lightbox-image h-auto max-h-[80vh] w-auto max-w-full rounded border border-border object-contain"
            />
            <p className="max-w-3xl text-center font-mono text-xs text-muted sm:text-sm">
              {active.caption}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
