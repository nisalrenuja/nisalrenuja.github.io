export const PROFILE = {
  name: "Nisal Palliyaguru",
  firstName: "Nisal",
  lastName: "Palliyaguru",
  tagline: "AI & Cloud-Native Engineering",
  title: "AI & Cloud-Native Software Engineer",
  badge: "Available for new projects",
  location: "Attidiya, Dehiwala, Sri Lanka",
  /** Short location line for the hero credibility strip. */
  base: "Colombo, Sri Lanka, working remotely worldwide",
  contact: {
    email: "nrenuja@gmail.com",
    phone: "+94 77 865 5349",
  },
  socials: {
    github: "https://github.com/nisalrenuja",
    linkedin: "https://linkedin.com/in/nisalrenuja",
  },
  /** Hero headline. Also the backbone of the site's SEO title. */
  headline: "I build AI-powered systems that actually ship to production.",
  /** Hero sub-headline and the source of the site meta description. */
  pitch: `I help teams take AI and cloud-native ideas from "this could work" to something running in production: computer vision on edge devices, LLM-backed automation, and the Kubernetes and AWS infrastructure that keeps it all up.`,
  about: `I'm a software engineer with 4+ years building production systems: cloud-native backends in Go and NestJS, real-time platforms on AWS and Kubernetes, and more recently machine learning that runs on real hardware rather than in a notebook.

Most of my work has been the unglamorous half of the job: multi-tenant microservices for a government ministry, GitOps pipelines that let small teams deploy without fear, election dashboards that had to stay up on the one night that mattered, and detection models compiled to ONNX so they run on edge devices instead of a GPU cluster.

I'm currently finishing an MSc in Data Science and AI at the University of Moratuwa, which keeps the theory honest. But what I actually sell is judgement about what to build, what to skip, and what will still be maintainable in a year.`,
  cvUrl: "/cv/Nisal_Renuja_Palliyaguru.pdf",
  image: "/images/profile-pic.jpg",
};

/**
 * Booking configuration. `calLink` goes straight into the 30-minute event
 * rather than the profile page, so there's no event-picker step in between.
 * Use "nisalrenuja" for the full list, or "nisalrenuja/15min" for the short one.
 */
export const BOOKING = {
  calLink: "nisalrenuja/30min",
  ctaLabel: "Book a call",
  blurb: "30 minutes, free, no pitch. Just scoping the problem.",
};

export const STATS = [
  { value: "4+", label: "Years shipping production systems" },
  { value: "5", label: "Major platforms built end to end" },
  { value: "4", label: "Engineering roles, 2 as senior/lead" },
  { value: "2024", label: "BestWeb.lk Merit award" },
];

export const SERVICES = [
  {
    icon: "Sparkles",
    title: "AI Product Build",
    promise:
      "Computer vision and LLM features taken from prototype to something your users actually touch.",
    deliverables: [
      "Detection and classification models in PyTorch / YOLO, exported to ONNX for edge inference",
      "LLM and document-extraction pipelines: OCR, structured parsing, Gemini/Claude API integration",
      "Real-time inference services with WebSocket streaming and live dashboards",
    ],
  },
  {
    icon: "Boxes",
    title: "Cloud & System Architecture",
    promise:
      "Backends designed to survive traffic spikes, team growth, and the second year of maintenance.",
    deliverables: [
      "Microservice and multi-tenant architectures in Go, NestJS, and TypeScript",
      "AWS infrastructure as code: EKS, RDS/Aurora, Lambda, CloudFormation",
      "Data modelling, caching strategy, and API design (REST and GraphQL)",
    ],
  },
  {
    icon: "GitBranch",
    title: "Platform & DevOps",
    promise:
      "Deployment that stops being an event, so your team ships on a Tuesday afternoon without flinching.",
    deliverables: [
      "Kubernetes and GitOps workflows with Argo CD",
      "CI/CD pipelines, containerisation, and environment parity",
      "Observability, cost review, and performance tuning on existing AWS estates",
    ],
  },
  {
    icon: "Compass",
    title: "Technical Advisory",
    promise:
      "An honest second opinion before you commit budget to an architecture or an AI roadmap.",
    deliverables: [
      "Architecture and code review with a written findings summary",
      "Build-vs-buy and feasibility assessment for AI features",
      "Hiring support, team mentoring, and technical due diligence",
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Scope",
    description:
      "A call, then a short written brief: what the system needs to do, what it explicitly doesn't, and where the risk actually sits. If the honest answer is that you don't need me, I'll say so here.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "A concrete technical plan covering services, data model, infrastructure, and cost, before any real code is written. You get a document you could hand to another engineer.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Working software in short increments, deployed to a real environment early. You see progress in a browser, not in a status report.",
  },
  {
    step: "04",
    title: "Hand over",
    description:
      "Documentation, runbooks, and a walkthrough with your team. The goal is that you can maintain and extend it without me on retainer.",
  },
];

export const FAQS = [
  {
    question: "What does working together usually look like?",
    answer:
      "Most engagements are either a fixed-scope project (a defined system built and handed over) or a part-time retainer of a set number of days per month for ongoing architecture and delivery work. Short advisory engagements, such as an architecture review or a feasibility assessment, are usually a week or two.",
  },
  {
    question: "Where are you based, and does the timezone work?",
    answer:
      "I'm in Colombo, Sri Lanka (GMT+5:30) and work remotely with clients globally. That overlaps comfortably with a full European working day, most of the Middle East and Asia, and early mornings in the US. I've been fully remote or hybrid for most of my career.",
  },
  {
    question: "How do you price work?",
    answer:
      "Fixed-scope projects are quoted as a fixed price once we've agreed the brief, so you're not exposed to my estimating errors. Retainers and advisory work are billed on a day rate. I'll give you a number after the first call, not before, because a quote without scope is guesswork.",
  },
  {
    question: "How small is too small?",
    answer:
      "Not very. A one-week architecture review or a single AI feature bolted onto an existing product is a perfectly good engagement. What I'm poor value for is short-notice bug-fixing on a codebase nobody has documented.",
  },
  {
    question: "Do I need to already know what AI I want?",
    answer:
      "No, and it's usually better if you don't. A lot of what I do early on is working out which parts of a problem genuinely benefit from a model and which are better served by ordinary software. That distinction saves more money than any tooling choice.",
  },
  {
    question: "What happens on the call?",
    answer:
      "You describe the problem, I ask questions, and by the end you get a straight answer on whether it's feasible, roughly what it takes, and whether I'm the right person for it. Thirty minutes, free, no follow-up sequence.",
  },
];

export const SKILLS = {
  "Programming Languages": ["Python", "TypeScript", "Go", "JavaScript"],
  "Web Development": [
    "React.js",
    "Next.js",
    "Node.js",
    "NestJS",
    "Django",
    "Gin",
    "Express.js",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Firestore"],
  "Cloud & DevOps": [
    "AWS (EKS, RDS, CloudWatch, Aurora, CodePipeline, Lambda)",
    "Kubernetes",
    "Docker",
    "ArgoCD",
    "GitOps",
  ],
  "Backend Technologies": [
    "GraphQL",
    "REST APIs",
    "Microservices",
    "CI/CD Pipelines",
    "Serverless Architecture",
  ],
  Caching: [
    "Redis (Single Instance, Redis Cluster)",
    "Firebase Realtime Database",
  ],
  "Frontend Technologies": ["Tailwind CSS", "Google Analytics", "Firebase"],
  "Data Engineering & AI": [
    "Data Pipelines",
    "Big Data Analytics",
    "Machine Learning",
  ],
  "Version Control & Tools": [
    "Git",
    "GitHub",
    "GitLab",
    "LaTeX",
    "Markdown",
    "Postman",
  ],
};

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Econsulate",
    period: "Mar 2025 – Present",
    location: "Sri Lanka",
    locationType: "Remote",
    achievements: [
      "Led the development of a real-time dashboard to visualize sensor and detection data from UAVs and UGVs developed by the Xavier AI team.",
      "Engineered an automated talent acquisition solution utilizing OCR and the Gemini API to extract unstructured data from resumes and populate candidate profiles.",
      "Orchestrated the deployment of a multi-tenant microservices platform and the official website for a Sri Lankan government ministry, utilizing AWS CloudFormation for infrastructure provisioning.",
      "Developed and optimized machine learning models for real-time detection and classification tasks using PyTorch, YOLO, and OpenCV.",
      "Evaluated and deployed models using ONNX to achieve efficient inference across edge devices.",
      "Implemented WebSocket-based data streaming to ensure seamless live monitoring of robotic and surveillance operations.",
    ],
    tags: ["Go", "NestJS", "React.js", "AWS", "Kubernetes", "PyTorch", "YOLO"],
  },
  {
    role: "Senior Software Engineer",
    company: "Derana Macroentertainment - Macro Labs",
    period: "Jan 2024 – Feb 2025",
    location: "Sri Lanka",
    locationType: "Hybrid",
    achievements: [
      "Led development of a scalable social media platform for volunteers, focusing on data management, containerized deployments, and backend scalability.",
      "Designed cloud-native architectures using Go, NestJS, and AWS for scalability.",
      "Built real-time dashboards to enhance insights and content management.",
      "Integrated microservices and CI/CD pipelines to streamline deployment.",
    ],
    tags: ["Go", "NestJS", "PostgreSQL", "AWS EKS", "React.js", "Kubernetes"],
  },
  {
    role: "Software Engineer",
    company: "Derana Macroentertainment - Macro Labs",
    period: "Dec 2022 – Jan 2024",
    location: "Sri Lanka",
    locationType: "Hybrid",
    achievements: [
      "Developed high-traffic web applications for news platforms, optimizing performance and scalability.",
      "Built a cloud-based content delivery system with a dashboard for scheduling and tracking.",
      "Developed a real-time election data visualization system for accurate updates.",
      "Led development of an online marketplace with a scalable architecture.",
      "Enhanced frontend performance using Next.js, Tailwind CSS, and AWS.",
    ],
    tags: ["Next.js", "Django", "AWS Lambda", "Redis", "PostgreSQL"],
  },
  {
    role: "Software Engineer Intern",
    company: "Insharp Technologies",
    period: "Jan 2022 – Jun 2022",
    location: "Maharagama, Sri Lanka",
    locationType: "Hybrid",
    achievements: [
      "Contributed to a professional networking platform, improving user engagement.",
      "Worked in agile teams, enhancing collaboration, planning, and time management.",
      "Gained experience in full-stack development, optimizing frontend-backend integration.",
      "Developed backend services with Django, React.js, and cloud technologies.",
    ],
    tags: ["Django", "React.js", "MySQL", "Express.js"],
  },
];

export const EDUCATION = [
  {
    degree: "MSc in Data Science and Artificial Intelligence",
    institution: "University of Moratuwa",
    period: "Jan 2025 – Present",
    location: "Moratuwa, Sri Lanka",
  },
  {
    degree: "Bachelor of Computing (Software Engineering)",
    institution: "Curtin University",
    period: "Jan 2020 – Mar 2023",
    location: "Perth, Australia",
  },
];

export const PROJECTS = [
  {
    title: "Ada Derana 24x7 – English/Sinhala/Tamil News Platforms",
    company: "Derana Macroentertainment - Macro Labs",
    period: "Jan 2024 – Present",
    description:
      "Developed a tri-language news platform for Ada Derana 24x7 with scalable web apps, dashboards, and backend architecture. Designed AWS-based infrastructure to deploy test environments, ensuring reliable and seamless content management.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "AWS",
    ],
    link: undefined,
  },
  {
    title:
      "ImpactNet – Online Platform for Civil Societies to Publish and Collaborate",
    company: "Derana Macroentertainment - Macro Labs",
    period: "May 2024 – Jan 2025",
    description:
      "Designed and implemented a microservices-based platform for civil societies to publish content, appeal for volunteers, and foster collaboration. Led architecture development, implemented GitOps workflows with Kubernetes and Argo CD.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "NestJS",
      "Gin",
      "GORM",
      "Prisma ORM",
      "GraphQL",
      "AWS",
      "Kubernetes",
    ],
    link: undefined,
  },
  {
    title:
      "Election Data Visualization – Real-Time Dashboard and Web Application",
    company: "Derana Macroentertainment - Macro Labs",
    period: "Jul 2024 – Dec 2024",
    description:
      "Built an interactive real-time dashboard to visualize Sri Lanka's election data with seamless data updates. Designed an intuitive admin dashboard for real-time reader engagement and efficient data handling.",
    technologies: ["React.js", "Tailwind CSS", "Firebase", "AWS"],
    link: undefined,
  },
  {
    title: "TheMorningLK / ArunaLK / ThamilanLK – Liberty Publishers",
    company: "Derana Macroentertainment - Macro Labs",
    period: "Dec 2022 – Jan 2024",
    description:
      "Developed three news platforms with dashboards for article management, integrating cloud-based backends for real-time updates. Enabled analytics for insights and optimizations. Recognized in BestWeb.lk Awards 2024 with Merit awards.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Firebase",
      "Google Analytics",
    ],
    link: undefined,
  },
  {
    title:
      "TopADS – Sri Lanka's Largest Video-Based Classified Advertisement Platform",
    company: "Derana Macroentertainment - Macro Labs",
    period: "Mar 2023 – Sep 2023",
    description:
      "Developed a video-based classified advertisement platform with an admin dashboard for ad management. Built a scalable backend for reliable data handling, analytics, and performance optimization.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "AWS",
    ],
    link: undefined,
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Academy Graduate – Cloud Data Pipeline Builder",
    issuer: "Amazon Web Services",
    date: "Feb 2025",
    skills: "Data Analytics, Amazon CloudWatch, Data Pipelines",
  },
  {
    title: "AWS Academy Graduate – Data Engineering",
    issuer: "Amazon Web Services",
    date: "Feb 2025",
    skills:
      "Data Pipelines, AWS SageMaker, AWS Glue, Amazon Elastic MapReduce (EMR), Amazon Kinesis, Data Engineering",
  },
  {
    title: "AWS Academy Graduate – Microservices and CI/CD Pipeline Builder",
    issuer: "Amazon Web Services",
    date: "Jan 2025",
    skills: "Microservices, CI/CD, AWS CodePipeline",
  },
  {
    title: "NVIDIA – Getting Started with Deep Learning",
    issuer: "NVIDIA",
    date: "Dec 2024",
    skills: "Deep Learning, Neural Networks",
  },
];

export const COMPETITIONS = [
  {
    title: "SLIIT CodeFest 2021 – Algothon",
    position: "Runner-Up",
    team: "Nasty_Owls",
    description: "Competitive programming event",
    date: "2021",
  },
  {
    title: "SLIIT CodeFest 2021 – Capture the Flag",
    position: "Runner-Up",
    team: "Nasty_Owls",
    description: "Cybersecurity challenge",
    date: "2021",
  },
  {
    title: "SLIIT Xtreame 2021",
    position: "Runner-Up",
    team: "Nasty_Owls",
    description: "IEEE Computer Society event for competitive programming",
    date: "2021",
  },
];
