// Every project card on the site is generated from this array.
// Fields:
//   title, description, image, technologies[], category, githubUrl,
//   liveUrl (optional — omit or leave "" to hide the Live Demo button),
//   featured (bool), status, year, group (optional — for grouped cards
//   like "Java Desktop Applications")

export const categories = [
  "All",
  "Web",
  "Mobile",
  "Desktop",
  "Backend",
  "Academic",
  "Personal",
];

export const projects = [
  {
    id: "billsathi",
    title: "BillSathi",
    description:
      "An offline-first billing and POS concept built for small shop owners in Nepal — digital VAT invoices, item management, and receipt generation designed around how small businesses actually work.",
    image: "./images/projects/billsathi.png",
    technologies: ["Flutter", "Dart", "Node.js", "Express.js", "PostgreSQL", "JWT"],
    category: "Mobile",
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "In Development",
    year: 2026,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This site — a personal portfolio showcasing projects, skills, experience, and ongoing work, built as a fast, static, data-driven React app.",
    image: "./images/projects/portfolio.png",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    category: "Web",
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "Completed",
    year: 2026,
  },
  {
    id: "school-management-website",
    title: "School Management Website",
    description:
      "A modern website concept for a secondary school — informational pages, a clean navigation structure, and a layout built to be easy for non-technical staff to update.",
    image: "./images/projects/school-management.png",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    category: "Web",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    status: "Prototype",
    year: 2026,
  },
  {
    id: "java-desktop-apps",
    title: "Java Desktop Applications",
    description:
      "A set of academic Java Swing desktop applications built while studying core software engineering and database concepts.",
    image: "./images/projects/java-desktop.png",
    technologies: ["Java", "Java Swing", "MySQL"],
    category: "Desktop",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    status: "Learning Project",
    year: 2025,
    group: [
      "Online Voting System",
      "Student Registration System",
      "Library Management System",
      "Employee Management System",
      "Bus Management System",
      "Result Management System",
    ],
  },
];
