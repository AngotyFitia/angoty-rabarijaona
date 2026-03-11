export const projects = [
  {
    id: 1,
    title: "E-mianatra",
    description: "Mobile app for DGI Madagascar developed to educate company employees.",
    objectives: "Provide digital training and resources for employees.",
    image: "/images/Profile.png",
    gallery: ["/images/Profile.png", "/images/Profile.png"],
    category: "Mobile",
    organization: "DGI Madagascar",
    orgLink: "https://dgi.mg",
    technologies: ["React Native", "TypeScript", "Firebase"],
    github: "https://github.com/AngotyFitia/e-mianatra",
    collaborators: [
      {
        name: "John Doe",
        type: "linkedin",
        link: "https://linkedin.com/in/johndoe"
      },
      {
        name: "Jane Smith",
        type: "portfolio",
        link: "https://janesmith.dev"
      }
    ]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio built with React, Vite, Tailwind.",
    objectives: "Showcase my skills and projects with a modern design.",
    image: "/images/Profile.png",
    gallery: ["/images/Profile.png"],
    category: "Web development",
    organization: "Personal",
    orgLink: "https://angotyfitia.github.io/portfolio",
    technologies: ["React", "Vite", "TailwindCSS"],
    github: "https://github.com/AngotyFitia/portfolio",
    collaborators: [] // pas de collaborateurs
  },
  {
    id: 3,
    title: "Data Dashboard",
    description: "Analytics dashboard for IT University.",
    objectives: "Visualize student and academic data for better decisions.",
    image: "/images/Profile.png",
    gallery: ["/images/Profile.png"],
    category: "Data-science",
    organization: "IT University",
    orgLink: "https://itu.mg",
    technologies: ["Python", "Pandas", "D3.js"],
    github: "https://github.com/AngotyFitia/data-dashboard",
    collaborators: [
      {
        name: "Alice Rakoto",
        type: "linkedin",
        link: "https://linkedin.com/in/alicerakoto"
      }
    ]
  }
]
