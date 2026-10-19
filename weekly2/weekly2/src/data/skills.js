const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Next.js",
  "REST APIs",
  "GraphQL",
  "Tailwind CSS",
  "Figma",
  "Git",
];

const skillObjects = skills.map((skill, index) => ({
  id: index + 1,
  name: skill,
}));
export default skillObjects;
