export type Web = {
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
};
export type VA = {
  title: string;
  category: string;
  summary: string;
  url?: string;
  image?: string;
  pdfPath?: string;
  kind: string;
};
export const profile = {
  name: "Nwachukwu Mercy Chizaram",
  headline: "Web Developer / Virtual Assistant",
  location: "Nigeria (Open to Remote Opportunities)",
  email: "zarammercy03@gmail.com",
  phone: "09034782003",
  linkedin: "https://www.linkedin.com/in/mercy-chizaram-dev",
};
export const webProjects: Web[] = [
  {
    title: "Yirizizx House — Independent Fashion Brand Showcase",
    description:
      "Responsive fashion brand showcase and lookbook landing page built with Next.js and React, featuring collection highlights and WhatsApp Business catalog ordering flow.",
    image: "/project-assets/yirizizx-house.jpg",
    url: "https://yirizizx-house.vercel.app/",
    tags: ["Next.js", "React"],
  },
  {
    title: "Student Result & Staff Portal Dashboard",
    description:
      "Next.js staff and student management dashboard supporting 11 students, assignment creation, submission tracking, and grade persistence via browser localStorage.",
    image: "/project-assets/student-result-dashboard.png",
    url: "https://student-result-dashboard-taupe.vercel.app/",
    tags: ["Next.js", "Dashboard"],
  },
  {
    title: "Next.js API User Directory",
    description:
      "Dynamic user directory application built with Next.js App Router and external REST API integration, featuring user profile cards and dynamic routing.",
    image: "/project-assets/nextjs-api-integration.png",
    url: "https://my-nextjs-api-integration.vercel.app/",
    tags: ["Next.js", "REST API"],
  },
];
export const vaDeliverables: VA[] = [
  {
    title: "4-App Startup Feasibility & KPI Research Tracker (Google Sheets)",
    category: "Startup KPI & Feasibility Analysis",
    summary:
      "Pre-launch screening matrix, competitor benchmarking, 15-point feasibility scoring, and post-launch KPI targets across WapBiz (12/15 Greenlight), Medcore (11/15 Hold), Tukarmart (10/15 Pivot), and EduVibe LMS.",
    url: "https://docs.google.com/spreadsheets/d/1D9VcE9yTgnh-huC63v16jwUhBLvQLHXWjIqmTczXO7I/edit",
    kind: "Google Sheets",
  },
  {
    title:
      "4-App Startup Portfolio Feasibility & Strategic Direction Report (Google Docs)",
    category: "Startup KPI & Feasibility Analysis",
    summary:
      "Executive B2B one-time payment business model analysis, readiness matrix, and actionable go-to-market recommendations for WapBiz, Medcore, Tukarmart, and EduVibe LMS.",
    url: "https://docs.google.com/document/d/1HMi4EtAIDlGlOEZSfov7r1s_7JmBkJnS2nlnaWYhqZ4/edit",
    kind: "Google Docs",
  },
  {
    title:
      "6-App Startup Portfolio Feasibility Matrix & Business Tracker (Google Sheets)",
    category: "Startup KPI & Feasibility Analysis",
    summary:
      "Expanded 6-app evaluation matrix covering Wapbiz, BarbMe, Medcore, Hotel Management System, Tukarmart, and School Management System with CAC, LTV, churn, and 30-day beta targets.",
    url: "https://docs.google.com/spreadsheets/d/1zkWzGXupxcbRZ4i90vuFIWlaa-d9YBggJPFr5zyyfLw/edit",
    kind: "Google Sheets",
  },
  {
    title:
      "B2B Low-Barrier Entry ('Trojan Horse') Startup Evaluation Tracker (Google Sheets)",
    category: "Startup KPI & Feasibility Analysis",
    summary:
      "Rollout strategy and central data-collection pipeline evaluation across 6 B2B sectors: Healthcare, Hospitality, EdTech, E-Commerce, WhatsApp Automation, and Barbershop Booking.",
    url: "https://docs.google.com/spreadsheets/d/1dSR7n7znlunMnh-rwBN1XhQRNf7NvUeSxBFsu1jKYyk/edit",
    kind: "Google Sheets",
  },
  {
    title: "Client Research Report — Tasks 1–9 Executive Summary (Google Docs)",
    category: "Market & Operations Research",
    summary:
      "Briefing covering corporate laptop procurement, Lagos-to-London travel, B2B lead pitch angles, agency pricing, networking events, and project management software selection (ClickUp).",
    url: "https://docs.google.com/document/d/1k2kH734hXkGmJhWsX76Y1lbDE4lpdvWrQK3aAtwL57k/edit",
    kind: "Google Docs",
  },
  {
    title: "Product Market Research 2026 — Final Task (Google Sheets)",
    category: "Market & Operations Research",
    summary:
      "E-commerce product sourcing and analysis across 5 products with pricing, suppliers, pros/cons, and buyer personas.",
    url: "https://docs.google.com/spreadsheets/d/10f6-cCkjrOLLFedfXDAEzv3MXjMaMtL0MQlYXKRmgM8/edit",
    kind: "Google Sheets",
  },
  {
    title: "Weekly Digital Marketing & AI Search Research Report 2026",
    category: "Market & Operations Research",
    summary:
      "Industry briefing covering ChatGPT visual ads, Google Ads invalid traffic updates, Meta commercial terms, Demand Gen migration, and YouTube AI search retrieval.",
    url: "https://docs.google.com/spreadsheets/d/19rmOa2x5hEABniU-L2qW5YX_sh3BoG5gP4ifVNmiDfE/edit",
    kind: "Google Sheets",
  },
  {
    title: "Content Research & Social Strategy 2026",
    category: "Market & Operations Research",
    summary:
      "10 actionable social content formats backed by 2026 trend sources and tailored agency campaign ideas.",
    url: "https://docs.google.com/spreadsheets/d/1Cp5SMMBOnB8dSte8FKSkxNxTRnDvbtOG1_ldmvhlkmw/edit",
    kind: "Google Sheets",
  },
  {
    title: "Nigerian Tech & Business Event Research 2026",
    category: "Market & Operations Research",
    summary:
      "Directory of 10 Nigerian tech conferences, summits, and masterclasses with dates, venues, pricing, and registration links.",
    url: "https://docs.google.com/spreadsheets/d/1LpBn3hP3nfZjijeDT-C_bWb0_H-ft_m0FqkRKcBakwU/edit",
    kind: "Google Sheets",
  },
  {
    title: "Social Media Agency Competitor Price Comparison 2026",
    category: "Market & Operations Research",
    summary:
      "Pricing and service-tier benchmark across 5 Nigerian digital marketing agencies (₦50,000 to ₦550,000+/month).",
    url: "https://docs.google.com/spreadsheets/d/1NHAlaSL9ap3vhada0Q8rwKn7TGU5kIijPjIQOvrd68Q/edit",
    kind: "Google Sheets",
  },
  {
    title: "B2B Lead Generation Directory 2026 — 20 Verified Nigerian Leads",
    category: "Market & Operations Research",
    summary:
      "Structured B2B prospect list across Fitness, Healthcare, Real Estate, and Logistics with verified contact details.",
    url: "https://docs.google.com/spreadsheets/d/1e98Rw1ibSG5fY2jpehY4_o7_56cjEd85pUq5sxWyVaE/edit",
    kind: "Google Sheets",
  },
  {
    title: "Lagos–London Executive Travel Research 2026",
    category: "Market & Operations Research",
    summary: "Flight comparison and central London business hotel comparison.",
    url: "https://docs.google.com/spreadsheets/d/1Z0NlLn3rpi02NG105DuoB5q_VjDSRsDNAJxwjzxZEIQ/edit",
    kind: "Google Sheets",
  },
  {
    title: "Corporate Laptop Procurement Research 2026",
    category: "Market & Operations Research",
    summary:
      "Hardware specs, RAM/SSD benchmarks, battery ratings, and NGN pricing across Dell Latitude and HP EliteBook models.",
    url: "https://docs.google.com/spreadsheets/d/1iiZV79-7zvWtYADZ_U6r2jQsEm8N_82m8DTApQLiC0s/edit",
    kind: "Google Sheets",
  },
  {
    title: "Project Management Software Comparison 2026",
    category: "Market & Operations Research",
    summary:
      "Feature, user-limit, and pricing comparison across Asana, Trello, ClickUp, monday.com, and Basecamp.",
    url: "https://docs.google.com/spreadsheets/d/1ng_RbzffjW0yUfUbHCNIkjQfktSh_twG-CQyZXTwGEk/edit",
    kind: "Google Sheets",
  },
  {
    title: "Trello Workflow & Task Board Showcase",
    category: "Workflow & Trello Management",
    summary:
      "Visual Kanban task organization, client deliverable pipelines, and deadline tracking managed in Trello.",
    image: "/project-assets/va/trello-dashboard.png",
    kind: "Screenshot Slot",
  },
];
export const cv = {
  name: "NWACHUKWU MERCY CHIZARAM",
  headline:
    "Digital Operations & Virtual Assistant | Web Developer & AI Data Specialist",
  locationContact:
    "Nigeria | Open to Remote Opportunities | Phone: 09034782003 | Email: zarammercy03@gmail.com | LinkedIn: linkedin.com/in/mercy-chizaram-dev",
  summary:
    "Adaptable digital operations and technology professional with hands-on experience in virtual assistance, market research, KPI reporting, web development, and AI data annotation. Skilled in organizing multi-channel workflows, tracking project milestones, designing visual marketing assets, and translating research findings into structured spreadsheets and executive summaries.",
  experience: [
    {
      role: "Virtual Assistant & Research Operations",
      organization: "Jenga Tech & Independent Workflows",
      dates: "Jan 2026 – Present",
      bullets: [
        "Conduct market research, competitor benchmarking, and Key Performance Indicator (KPI) evaluations for early-stage startup web applications, compiling structured tracking reports in Google Sheets and concise executive summaries in Google Docs.",
        "Manage administrative workflows, calendar scheduling, task boards, and multi-item research deliverables using Google Workspace, Calendly, and project tracking tools.",
        "Created basic visual layouts and simple graphics in Canva as needed while focusing primarily on research, documentation, and workflow organization.",
      ],
    },
    {
      role: "Video Annotation Specialist – Training & Qualification",
      organization: "Softechub Limited",
      dates: "2026",
      bullets: [
        "Completed structured video annotation training and practical visual data labeling tasks using Encord/VLA workflows.",
        "Applied project-specific guidelines with strict adherence to data accuracy, consistency, and quality assurance standards.",
      ],
    },
    {
      role: "Web Developer & Digital Builder",
      organization: "Independent & Team Projects",
      dates: "2025 – Present",
      bullets: [
        "Build responsive websites and user interfaces using HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS.",
        "Maintain codebases, version control, and deployment workflows via Git, GitHub, and Vercel.",
      ],
    },
    {
      role: "Computer Systems Engineer",
      organization: "Computer Tech",
      dates: "November 2024 – July 2026",
      bullets: [
        "Performed computer hardware troubleshooting, system diagnostics, and Windows operating system installation and maintenance.",
      ],
    },
  ],
  education: [
    "National Diploma (ND) in Computer Engineering Technology — National Metallurgical Training Institute | 2023 – 2025",
    "Virtual Assistance Certification — Completed foundational Virtual Assistance training; currently completing advanced coursework in remote operations, scheduling, and research workflows | 2026",
  ],
  leadership: [
    "Departmental / Association President",
    "Hostel Senator",
    "Deputy Senate President",
  ],
};
export const skillGroups = [
  {
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
    ],
  },
  {
    title: "Virtual Assistance & Digital Operations",
    skills: [
      "Internet Research",
      "Market & Competitor Analysis",
      "Startup KPI Evaluation & Feasibility Reporting",
      "Calendar & Inbox Management",
      "Task & Workflow Coordination",
      "Executive Documentation",
    ],
  },
  {
    title: "Productivity, Design & Data Tools",
    skills: [
      "Google Workspace (Docs, Sheets, Forms, Calendar)",
      "Calendly",
      "Trello",
      "Microsoft Office",
      "Canva",
      "AI Video Annotation (Encord/VLA)",
      "Quality Assurance",
    ],
  },
];
