export interface Collaborator {
  name: string
  type: "linkedin" | "portfolio"
  link: string
}

export interface ProjectType {
  id: number
  title: string
  description: string
  objectives: string
  image: string
  gallery: string[]
  category: string
  organization: string
  orgLink: string
  technologies: string[]
  github: string
  collaborators?: Collaborator[]
}

export const projects: ProjectType[] = [
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
      { name: "John Doe", type: "linkedin", link: "https://linkedin.com/in/johndoe" }
    ]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio built with React, Vite, Tailwind.",
    objectives: "Showcase my skills and projects with a modern design.",
    image: "/images/Profile.png",
    gallery: ["/images/Portfolio.png"],
    category: "Web development",
    organization: "Personal",
    orgLink: "https://angotyfitia.github.io/portfolio",
    technologies: ["React", "Vite", "TailwindCSS"],
    github: "https://github.com/AngotyFitia/portfolio",
    collaborators: []
  },
  {
    id: 3,
    title: "Data Dashboard",
    description: "Analytics dashboard for IT University.",
    objectives: "Visualize student and academic data for better decisions.",
    image: "/images/Profile.png",
    gallery: ["/images/Dashboard.png", "/images/Dashboard2.png"],
    category: "Data-science",
    organization: "IT University",
    orgLink: "https://itu.mg",
    technologies: ["Python", "Pandas", "D3.js"],
    github: "https://github.com/AngotyFitia/data-dashboard",
    collaborators: [
      { name: "Alice Rakoto", type: "linkedin", link: "https://linkedin.com/in/alicerakoto" },
      { name: "Marc Andrian", type: "portfolio", link: "https://marc.dev" }
    ]
  },
  {
    id: 4,
    title: "API Backend Service",
    description: "REST API for managing student records.",
    objectives: "Provide secure and scalable backend services.",
    image: "/images/Profile.png",
    gallery: ["/images/Backend.png"],
    category: "Backend",
    organization: "IT University",
    orgLink: "https://itu.mg",
    technologies: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/AngotyFitia/api-backend",
    collaborators: []
  },
  {
    id: 5,
    title: "Fullstack E-commerce",
    description: "Complete e-commerce solution with frontend and backend.",
    objectives: "Allow users to browse, purchase, and manage orders online.",
    image: "/images/Profile.png",
    gallery: ["/images/Ecommerce.png", "/images/Ecommerce2.png"],
    category: "Fullstack",
    organization: "Personal",
    orgLink: "https://angotyfitia.dev",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/AngotyFitia/fullstack-ecommerce",
    collaborators: [
      { name: "Sarah Lee", type: "linkedin", link: "https://linkedin.com/in/sarahlee" }
    ]
  }
]

