import type { Metadata } from "next"; // Page metadata type
import { Geist, Geist_Mono } from "next/font/google"; // Self-hosted sans and mono fonts
import "./globals.css"; // Theme tokens and base styles

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juch Guliquey | AI Engineer",
  description:
    "AI engineer and full-stack developer shipping LLM features into production with Gemini, Vertex AI and Genkit.",
};

// Root shell: fonts, theme and page background
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-bg font-sans text-text">{children}</body>
    </html>
  );
}
