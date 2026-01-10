export const PROFILE = {
  name: "Nisal Palliyaguru",
  firstName: "Nisal",
  lastName: "Palliyaguru",
  tagline: "Software Engineer | Cloud-Native | Microservices | DevOps",
  title: "Software Engineer",
  badge: "Available to connect",
  location: "Attidiya, Dehiwala, Sri Lanka",
  contact: {
    email: "nrenuja@gmail.com",
    phone: "+94 77 865 5349",
  },
  socials: {
    github: "https://github.com/nisalrenuja",
    linkedin: "https://linkedin.com/in/nisalrenuja",
  },
  about: `Software Engineer with 4+ years of experience in cloud-native development, microservices, and DevOps. Proficient in Go, TypeScript, React.js, NestJS, and AWS, with expertise in scalable backend architectures.

Currently pursuing an MSc in Data Science and AI at the University of Moratuwa, focusing on big data analytics, machine learning, and cloud computing. Adept at leading teams, solving complex technical challenges, and optimizing system performance.`,
  cvUrl: "/cv/Nisal_Renuja_Palliyaguru.pdf",
  image: "/images/profile-pic.png",
};

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
  Caching: ["Redis (Single Instance, Redis Cluster)", "Firebase Realtime Database"],
  "Frontend Technologies": ["Tailwind CSS", "Google Analytics", "Firebase"],
  "Data Engineering & AI": ["Data Pipelines", "Big Data Analytics", "Machine Learning"],
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
    technologies: ["React.js", "Tailwind CSS", "NestJS", "Prisma ORM", "PostgreSQL", "AWS"],
    link: undefined,
  },
  {
    title: "ImpactNet – Online Platform for Civil Societies to Publish and Collaborate",
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
    title: "Election Data Visualization – Real-Time Dashboard and Web Application",
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
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Firebase", "Google Analytics"],
    link: undefined,
  },
  {
    title: "TopADS – Sri Lanka's Largest Video-Based Classified Advertisement Platform",
    company: "Derana Macroentertainment - Macro Labs",
    period: "Mar 2023 – Sep 2023",
    description:
      "Developed a video-based classified advertisement platform with an admin dashboard for ad management. Built a scalable backend for reliable data handling, analytics, and performance optimization.",
    technologies: ["React.js", "Tailwind CSS", "Express.js", "PostgreSQL", "Prisma ORM", "AWS"],
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
