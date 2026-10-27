import { ImageResponse } from "next/og"; // Renders JSX to a PNG at build time
import { profile } from "@/data/content"; // Name and role for the card

export const alt = "Juch Guliquey, AI Engineer and Full-Stack Developer";
export const size = { width: 1200, height: 630 }; // Standard link-preview size
export const contentType = "image/png";

// Link-preview card shown when the site is shared on LinkedIn or chat apps
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0e11",
          color: "#e6edf0",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 32, color: "#3fd0bf" }}>$ whoami</div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24, fontFamily: "sans-serif" }}>{profile.name}</div>
        <div style={{ fontSize: 44, color: "#3fd0bf", marginTop: 16 }}>{profile.role}</div>
        <div style={{ fontSize: 30, color: "#93a4ad", marginTop: 40, fontFamily: "sans-serif" }}>
          LLM features in production with Gemini, Vertex AI and Genkit
        </div>
      </div>
    ),
    { ...size },
  );
}
