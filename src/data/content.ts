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
  { value: "9", label: "third-party integrations in production" },
  { value: "54x", label: "faster AI price suggestions (245s to 4.5s)" },
];

// Short cards that summarise the AI work before the deep dive
export const highlights = [
  {
    title: "Multimodal identification",
    body: "Gemini on Vertex AI reads brand, category, colour, size and condition from item photos, label first, constrained to fixed vocabularies.",
  },
  {
    title: "Evaluation harness",
    body: "A hand-checked test set, scorer and before/after report. Raised colour accuracy from 90% to 98% with brand and category held at 100%.",
  },
  {
    title: "Grounded assistant",
    body: "An in-app AI help chat grounded in the editor it lives in, with rate limiting and prompt-injection hardening.",
  },
  {
    title: "Privacy-safe observability",
    body: "A fail-open tracer that records timing, model and token counts, never photos or personal data. 700+ traced calls at ~99.6% success and ~$0.003 each.",
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

// Third-party systems wired into Reviva, shown under its case study
export const integrations = [
  {
    name: "Stripe",
    body: "One-step checkout with Payment and Address Elements and wallet pay, refunds, store credit and Connect payouts to sellers.",
  },
  {
    name: "eBay",
    body: "Sales sync into orders with seller payout lines, cancellations and refunds void payouts, fee split per seller, and auto-delisting.",
  },
  {
    name: "Sendcloud",
    body: "Shipping and return labels, signed status webhooks, and a 6-hourly sweep that settles or flags cancelled shipments.",
  },
  {
    name: "SumUp",
    body: "Card reader at the in-store till, including split cash and card sales and refunds keyed to the original payment.",
  },
  {
    name: "Twilio WhatsApp",
    body: "Seller conversations and notifications over WhatsApp, with inbound webhook filtering.",
  },
  {
    name: "Klaviyo and Mailgun",
    body: "Consent-based marketing events and newsletter sign-ups, plus transactional email.",
  },
  {
    name: "PhotoRoom",
    body: "Automatic product photo editing that feeds straight into AI identification.",
  },
  {
    name: "ConsignCloud",
    body: "Migration of the client's live inventory with an idempotent, re-runnable import using deterministic ids.",
  },
];

// Screenshots of the integrations as staff and buyers see them in Reviva
export const integrationShots: Screenshot[] = [
  {
    src: "/projects/reviva-stripe-checkout.png",
    alt: "Guest checkout with Stripe address and card fields styled to match the shop, and an order summary",
    caption: "Stripe checkout with Address and Payment Elements",
  },
];

export type Project = {
  name: string;
  role: "Main contributor" | "Feature contributor" | "Personal project";
  period: string;
  summary: string;
  points: string[];
  stack: string[];
  screenshots?: Screenshot[];
  link?: { href: string; label: string }; // public source code, for personal projects
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
      "AI accuracy evaluation harness: colour accuracy 90% to 98%, brand and category held at 100%",
      "AI price suggestions cut from ~245s to ~4.5s and ~99.9% cheaper per call by capping Gemini's thinking budget after tracing exposed runaway reasoning",
      "Grounded AI help assistant with rate limiting and prompt-injection hardening",
      "Privacy-safe, fail-open AI tracing; Gemini model migration; data-residency regions",
      "Payments end to end: Stripe checkout with wallet pay, refunds, store credit and Stripe Connect payouts to sellers, plus a SumUp card reader at the in-store till",
      "Nine production integrations (Stripe, eBay, Sendcloud, SumUp, Twilio WhatsApp, Klaviyo, Mailgun, PhotoRoom, ConsignCloud) built on signed webhooks, idempotent processing and retry sweeps",
      "Migrated the client's live inventory from ConsignCloud with an idempotent, re-runnable import",
      "Dev, stage and production releases on Firebase and Google Cloud with GitHub Actions",
      "Worked directly with the client: feedback and decisions into user stories, plain-language release updates, live demos",
    ],
    stack: ["Gemini", "Vertex AI", "Genkit", "TypeScript", "React", "tRPC", "Firebase", "Stripe", "eBay API", "Sendcloud"],
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
      "Attendance-based payroll computation and payslips",
      "Role-based access for HR, manager, executive and admin users",
      "Staffing planner, skills rubrics and leaderboard, cohort enrollment and attendance exports",
      "Server-side cursor pagination for large lists",
    ],
    stack: ["TypeScript", "React", "tRPC", "Firebase", "Google Cloud"],
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
  {
    name: "nutrition-label-eval",
    role: "Personal project",
    period: "Oct 2026",
    summary:
      "Open-source evaluation of a Gemini feature that reads the nutrition table off food packaging photos, scored against a hand-checked answer key.",
    points: [
      "59 Open Food Facts labels checked value by value against their photos; 38 database errors corrected, each with a reason",
      "Scoring with label-rounding tolerance and named error types: per-serving reads, kJ for kcal, sodium for salt, '<0.1 g' read as 0.1, values from the wrong row",
      "Prompt rules plus a JSON schema took whole-label accuracy from 84.7% to 94.9% (98.9% of all values)",
      "Measured that thinking added ~50% cost and doubled latency with no accuracy gain, and that smaller photos saved no tokens",
      "SQLite storage with SQL reporting, a paced and resumable runner, a FastAPI results viewer, Docker Compose, and CI that never calls the model",
    ],
    stack: ["Python", "Gemini", "Pydantic", "SQLite", "FastAPI", "Docker", "pytest", "GitHub Actions"],
    link: { href: "https://github.com/JohnSmith545/nutrition-label-eval", label: "View the code on GitHub" },
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
    items: ["Node.js", "tRPC", "Zod", "Firebase", "Google Cloud", "PostgreSQL", "MySQL"],
  },
  {
    group: "Integrations",
    items: [
      "Stripe (Payments, Connect)",
      "eBay APIs",
      "Sendcloud",
      "SumUp",
      "Twilio WhatsApp",
      "Klaviyo",
      "Mailgun",
      "Webhooks",
      "Idempotent processing",
    ],
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
