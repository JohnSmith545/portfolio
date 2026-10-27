// All portfolio copy in one place, so updates never touch the layout

export const profile = {
  name: "Juch Guliquey",
  role: "AI Engineer | Full-Stack Developer",
  location: "Imus, Cavite, Philippines",
  pitch:
    "I build AI features that real users depend on, and the full-stack product around them. I ship LLM features into production, measure them, and keep them fast, cheap and safe.",
  email: "guliqueyjuch@gmail.com",
  linkedin: "https://www.linkedin.com/in/juch-guliquey-b78277376/",
  github: "https://github.com/JohnSmith545",
  resume: "/Juch_Guliquey_Resume.pdf",
};

// Headline numbers shown under the hero
export const stats = [
  { value: "2", label: "client platforms as main contributor" },
  { value: "6", label: "AI features shipped on Reviva" },
  { value: "4", label: "certifications (Google Cloud, Hytel, EF SET)" },
];

// Short cards that summarise the AI work before the deep dive
export const highlights = [
  {
    title: "Multimodal identification",
    body: "Gemini on Vertex AI reads brand, category, colour, size and condition from item photos, label first, constrained to fixed vocabularies.",
  },
  {
    title: "Evaluation harness",
    body: "A test-set reader, scorer and report that measure accuracy, then drive tuning of token caps and thinking level.",
  },
  {
    title: "Grounded assistant",
    body: "An in-app AI help chat grounded in the editor it lives in, with rate limiting and prompt-injection hardening.",
  },
  {
    title: "Privacy-safe observability",
    body: "A fail-open tracer that records timing, model and token counts, never photos or personal data.",
  },
];

// How I work with clients and teams, beyond the code
export const workStyle = [
  {
    title: "Direct client communication",
    body: "I work with the client week to week: turning their feedback and business decisions into user stories, explaining each release in plain language, and running live demos.",
  },
  {
    title: "Test-driven and measured",
    body: "Backend work starts with a failing test, AI features ship with an evaluation harness, and production behaviour is traced.",
  },
  {
    title: "Ship, then verify",
    body: "Dev, stage and production releases with CI, written QA steps for testers, and retests before anything is called done.",
  },
];

export type Project = {
  name: string;
  role: "Main contributor" | "Feature contributor";
  period: string;
  summary: string;
  points: string[];
  stack: string[];
  screenshots?: Screenshot[];
};

// A product screenshot taken with test data and client branding blurred
export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

export const projects: Project[] = [
  {
    name: "Reviva",
    role: "Main contributor",
    period: "Apr 2026 - Present",
    summary:
      "Resale and consignment marketplace with staff, seller and buyer portals, an online shop and an in-store till.",
    points: [
      "Multimodal AI product identification with Gemini on Vertex AI through Genkit",
      "AI accuracy evaluation harness used to tune accuracy, latency and cost",
      "AI retail price suggestions with timeouts, retries and plausibility checks",
      "Grounded AI help assistant with rate limiting and prompt-injection hardening",
      "Privacy-safe, fail-open AI tracing; Gemini model migration; data-residency regions",
      "Stripe payments, refunds, store credit and payouts, plus eBay, shipping and email marketing integrations",
      "Dev, stage and production releases on Firebase and Google Cloud with GitHub Actions",
      "Worked directly with the client: feedback and decisions into user stories, plain-language release updates, live demos",
    ],
    stack: ["Gemini", "Vertex AI", "Genkit", "TypeScript", "React", "tRPC", "Firebase", "Stripe"],
    screenshots: [
      {
        src: "/projects/reviva-ai-identify.png",
        alt: "Staff item form with brand, category, colour, material and condition filled in by AI from a photo",
        caption: "AI fills the item form from a single photo",
      },
      {
        src: "/projects/reviva-ai-listing.png",
        alt: "Listing section with an AI-written SEO title and a held-back AI description with a brand mismatch warning",
        caption: "AI listing copy, held back when its brand reading disagrees with staff",
      },
      {
        src: "/projects/reviva-ai-price.png",
        alt: "AI suggested retail price with a low-confidence label, reasoning and a one-click Use button",
        caption: "AI retail price suggestion with a confidence label",
      },
      {
        src: "/projects/reviva-product.png",
        alt: "Buyer product page showing a tan leather satchel, price, item details and a virtual try-on button",
        caption: "Buyer product page with virtual try-on",
      },
    ],
  },
  {
    name: "TMS",
    role: "Main contributor",
    period: "Mar 2026 - Jun 2026",
    summary: "Internal HR and operations platform covering people, payroll, attendance, staffing and skills.",
    points: [
      "Payroll computation and payslips, including mid-period salary changes and late, undertime and absence deductions",
      "Role-based access for HR, manager, executive and admin users",
      "Staffing planner, skills rubrics and leaderboard, cohort enrollment and attendance exports",
      "Server-side cursor pagination for large lists",
    ],
    stack: ["TypeScript", "React", "tRPC", "Firebase", "Google Cloud"],
    screenshots: [
      {
        src: "/projects/tms-payroll.png",
        alt: "Payroll run table with working days, minutes rendered, overtime, late, absence, gross and net pay per employee",
        caption: "Monthly payroll run with attendance-based adjustments",
      },
      {
        src: "/projects/tms-payslip.png",
        alt: "Payslip showing time rendered and late and absence deductions itemised against gross pay",
        caption: "Payslip with itemised late and absence deductions",
      },
    ],
  },
  {
    name: "Flinki",
    role: "Feature contributor",
    period: "Jun 2026",
    summary: "Social platform where I built the direct messaging feature.",
    points: [
      "Direct messaging: message requests, blocking, an age gate and a real-time inbox",
      "Push and email notifications with device token management",
      "Rate limiting and security fixes from code review",
    ],
    stack: ["TypeScript", "React", "Firebase", "FCM"],
  },
];

// Skill groups, ordered by relevance to AI roles
export const skills = [
  {
    group: "AI and LLMs",
    items: [
      "Gemini",
      "Vertex AI",
      "Genkit",
      "Multimodal models",
      "Prompt engineering",
      "Structured output validation",
      "RAG",
      "LLM evaluation",
      "AI observability",
      "Cost and latency tuning",
    ],
  },
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "PHP"] },
  { group: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "TanStack Query"] },
  {
    group: "Backend and cloud",
    items: ["Node.js", "tRPC", "Zod", "Firebase", "Google Cloud", "PostgreSQL", "MySQL", "Stripe"],
  },
  {
    group: "Quality and delivery",
    items: ["Vitest", "Playwright", "TDD", "GitHub Actions", "Turborepo", "Claude Code (multi-agent, MCP)"],
  },
];

export const certifications = [
  {
    name: "RAG Application Specialist",
    issuer: "Hytel",
    date: "Feb 2026",
    url: null,
  },
  {
    name: "Attention Mechanism",
    issuer: "Google Cloud",
    date: "May 2026",
    url: "https://www.skills.google/public_profiles/5ad6bafa-9a79-4c07-9060-3a61b91081ee/badges/24319246",
  },
  {
    name: "Encoder-Decoder Architecture",
    issuer: "Google Cloud",
    date: "May 2026",
    url: "https://www.skills.google/public_profiles/5ad6bafa-9a79-4c07-9060-3a61b91081ee/badges/24483008",
  },
  {
    name: "EF SET English Certificate, 74/100 (C2 Proficient)",
    issuer: "EF SET",
    date: "Aug 2025",
    url: "https://cert.efset.org/xdjcFZ",
  },
];

// Timeline, newest first
export const experience = [
  {
    role: "AI Engineer | Full-Stack Developer",
    org: "Hytel",
    period: "Mar 2026 - Present",
    note: "Software consultancy building client platforms. Main contributor to Reviva and TMS, feature contributor to Flinki. Completed the Hytel AI Enablement Program (RAG final project and an enterprise RAG assistant capstone).",
  },
  {
    role: "Rate Programmer",
    org: "Quadrant Information Services",
    period: "Oct 2025 - Nov 2025",
    note: "",
  },
  {
    role: "BS Computer Science, Cum Laude",
    org: "Emilio Aguinaldo College",
    period: "2021 - 2025",
    note: "",
  },
  {
    role: "Software Developer (OJT)",
    org: "Village Gourmet Co. Inc.",
    period: "Jun 2024 - Jul 2024",
    note: "",
  },
];
