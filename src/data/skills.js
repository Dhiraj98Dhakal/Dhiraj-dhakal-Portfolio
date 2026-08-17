// Skill categories. "level" is intentionally qualitative — no fake
// percentages. Allowed values: "Familiar", "Working With", "Learning".

export const skillCategories = [
  {
    category: "Programming",
    items: [
      { name: "Java", level: "Working With" },
      { name: "JavaScript", level: "Working With" },
      { name: "Dart", level: "Working With" },
      { name: "SQL", level: "Working With" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: "Working With" },
      { name: "Next.js", level: "Learning" },
      { name: "HTML", level: "Working With" },
      { name: "CSS", level: "Working With" },
      { name: "Tailwind CSS", level: "Working With" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Working With" },
      { name: "Express.js", level: "Working With" },
      { name: "REST APIs", level: "Working With" },
      { name: "PostgreSQL", level: "Learning" },
      { name: "MySQL", level: "Working With" },
      { name: "MongoDB", level: "Learning" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", level: "Working With" },
      { name: "Dart", level: "Working With" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "Working With" },
      { name: "GitHub", level: "Working With" },
      { name: "VS Code", level: "Familiar" },
      { name: "NetBeans", level: "Familiar" },
    ],
  },
  {
    category: "Creative & Marketing",
    items: [
      { name: "Canva", level: "Working With" },
      { name: "CapCut", level: "Working With" },
      { name: "Photoshop", level: "Familiar" },
      { name: "Digital Marketing", level: "Working With" },
      { name: "Social Media Content", level: "Working With" },
    ],
  },
];
