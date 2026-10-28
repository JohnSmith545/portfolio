import type { CSSProperties } from "react"; // Inline style type for the stagger index

// Props that make an element fade up on scroll; index staggers siblings by 70ms each
export function reveal(index = 0) {
  return { "data-reveal": "", style: { "--i": index } as CSSProperties };
}
