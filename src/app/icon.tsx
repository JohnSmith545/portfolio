import { ImageResponse } from "next/og"; // Renders JSX to a PNG at build time

export const size = { width: 64, height: 64 }; // Crisp on high-DPI browser tabs
export const contentType = "image/png";

// Browser-tab icon: teal "J" monogram on the site's dark background
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0e11",
          color: "#3fd0bf",
          fontSize: 48,
          fontWeight: 700,
          fontFamily: "monospace",
          borderRadius: 12,
        }}
      >
        J
      </div>
    ),
    { ...size },
  );
}
