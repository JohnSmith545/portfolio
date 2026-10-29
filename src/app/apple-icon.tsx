import { ImageResponse } from "next/og"; // Renders JSX to a PNG at build time

export const size = { width: 180, height: 180 }; // Apple touch icon size
export const contentType = "image/png";

// Home-screen icon on iPhone and iPad: same "J" monogram as the browser tab
export default function AppleIcon() {
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
          fontSize: 132,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        J
      </div>
    ),
    { ...size },
  );
}
