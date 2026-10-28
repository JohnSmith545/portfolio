import { siGooglecloud, type SimpleIcon } from "simple-icons"; // Google Cloud brand mark (CC0)

export type OrgLogo = { src: string } | { brand: SimpleIcon };

// Issuer or organisation name (as written in content.ts) to its logo, from each one's own site
export const orgLogos: Record<string, OrgLogo> = {
  Hytel: { src: "/logos/hytel.png" },
  "Google Cloud": { brand: siGooglecloud },
  "EF SET": { src: "/logos/efset.png" },
  "Quadrant Information Services": { src: "/logos/quadrant.png" },
  "Emilio Aguinaldo College": { src: "/logos/eac.png" },
  "Village Gourmet Co. Inc.": { src: "/logos/village-gourmet.png" },
};
