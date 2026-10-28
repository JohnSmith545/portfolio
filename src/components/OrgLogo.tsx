import Image from "next/image"; // Optimised logo images
import { Building2 } from "lucide-react"; // Fallback for an organisation without a logo
import { orgLogos } from "@/data/orgLogos"; // Organisation name to logo

// Square logo tile for an employer, school or certificate issuer; light so dark logos stay visible
export function OrgLogo({ name, size = 40 }: { name: string; size?: number }) {
  const logo = orgLogos[name];
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-md bg-[#f2f5f7] p-1"
      style={{ width: size, height: size }}
    >
      {logo && "src" in logo ? (
        <Image
          src={logo.src}
          alt={`${name} logo`}
          width={size}
          height={size}
          className="h-full w-full object-contain"
        />
      ) : logo ? (
        <svg
          role="img"
          aria-label={`${name} logo`}
          viewBox="0 0 24 24"
          className="h-full w-full"
          fill={`#${logo.brand.hex}`}
        >
          <path d={logo.brand.path} />
        </svg>
      ) : (
        <Building2 aria-hidden className="h-full w-full text-muted" strokeWidth={1.5} />
      )}
    </span>
  );
}
