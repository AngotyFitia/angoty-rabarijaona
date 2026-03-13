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
    title: "e-torolalana",
    description: "A web application developed for DGI Madagascar to provide employee education.",
    objectives: "Deliver digital training and resources to company staff.",
    image: "/images/projects/etakalo-dashboard.png",
    gallery: ["/images/projects/etakalo-dashboard.png", "/images/projects/etakalo-programme.png", "/images/projects/etakalo-cours.png", "/images/projects/etakalo-calendrier.png", "/images/projects/etakalo-correction.png"],
    category: "Fullstack",
    organization: "DGI Madagascar",
    orgLink: "https://www.impots.mg/accueil",
    technologies: ["React Native", "Spring Boot", "MongoDB", "DbSchema", "Figma", "GitHub"],
    github: "https://github.com/digital-gov-mg/torolalana-portal-releases",
    collaborators: [
      { name: "Erick RAKOTOVOLOLONA", type: "linkedin", link: "https://linkedin.com/in/hajanirina-erick-rakotovololona-42518576" },
      { name: "Rivo RAMAROSON", type: "linkedin", link: "https://linkedin.com/in/rivo-ramaroson-30916a7a" },
      { name: "Imiangaly RANDIANOMANANA", type: "linkedin", link: "https://linkedin.com/in/imiangaly-randrianomanana-0389652b8" }
    ]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with love and compassion",
    objectives: "Showcase my skills and projects with a modern design.",
    image: "/images/projects/portfolio-projects.png",
    gallery: ["/images/projects/portfolio-projects.png", "/images/projects/portfolio-skills.png"],
    category: "Web development",
    organization: "Personal",
    orgLink: "https://angoty-rabarijaona.vercel.app",
    technologies: ["React", "Vite", "TypeScript", "TailwindCSS", "GitHub"],
    github: "https://github.com/AngotyFitia/portfolio",
    collaborators: []
  },
  {
    id: 3,
    title: "Loyer Tana",
    description: "A predictive application designed to estimate rental prices in Antananarivo.",
    objectives: "Provide insights into housing market trends and forecast rental costs to support better decision-making for residents and investors.",
    image: "/images/projects/prediction_carte.png",
    gallery: ["/images/projects/prediction_carte.png", "/images/projects/prediction_graphe.png", "/images/projects/prediction_loyer.png"],
    category: "Data-science",
    organization: "IT University",
    orgLink: "https://itu.mg",
    technologies: ["Django", "Pandas",],
    github: "https://github.com/Angoty/Machine-Learning",
    collaborators: []
  },  
  {
    id: 4,
    title: "Takalo",
    description: "An online application designed for selling and exchanging products.",
    objectives: "The main goal of Takalo is to allow users to sell items they no longer need and to facilitate product exchanges between individuals.",
    image: "/images/projects/takalo_accueil.png",
    gallery: ["/images/projects/takalo_accueil.png", "/images/projects/takalo_dashboard.png", "/images/projects/takalo_categorie.png"],
    category: "Fullstack",
    organization: "IT University",
    orgLink: "https://www.ituniversity-mg.com/page/",
    technologies: ["PHP (CodeIgniter)", "MySQL", "GitHub", "Adobe XD"],
    github: "https://github.com/Angoty/S4-Takalo",
    collaborators: [
      { name: "Toky Hary", type: "linkedin", link: "https://linkedin.com/in/toky-hary-ny-aina-rakotoarimanana-474740286" },
      { name: "Allan Tohaina", type: "linkedin", link: "https://linkedin.com/in/allan-tohaina-7769b3192" }

    ]
  },  
  {
    id: 5,
    title: "Artizana",
    description: "A platform dedicated to showcasing Malagasy handcrafted products.",
    objectives: "Its goal is to promote Malagasy craftsmanship and facilitate the commercialization of local goods.",
    image: "/images/projects/artizana_accueil.png",
    gallery: ["/images/projects/artizana_accueil.png", "/images/projects/artizana_details.png", "/images/projects/artizana_facture.png"],
    category: "Mobile",
    organization: "IT University",
    orgLink: "https://www.ituniversity-mg.com/page/",
    technologies: ["Ionic", "Angular", "Spring JSP", "PostgreSQL", "DbSchema", "GitHub", "Pencil"],
    github: "https://github.com/AngotyFitia/mobile-artizana",
    collaborators: [
      { name: "Nancy ANDRIAMAHANINTSOA", type: "linkedin", link: "https://linkedin.com/in/nancy-elidah-andriamahanintsoa-63574a312" }
    ]
  },
  {
    id: 6,
    title: "Avaratra",
    description: "A regional water management platform for Madagascar.",
    objectives: "Its purpose is to anticipate climate-related risks and address the main causes of water scarcity.",
    image: "/images/projects/avaratra_accueil.png",
    gallery: ["/images/projects/avaratra_accueil.png", "/images/projects/avaratra_login.png", "/images/projects/avaratra_dashboard.png", "/images/projects/avaratra_district.png", "/images/projects/avaratra_publications.png"],
    category: "Fullstack",
    organization: "Personal",
    orgLink: "https://angoty-rabarijaona.vercel.app",
    technologies: [".NET", "C#", "Python", "SQLServer", "GitHub", "Pencil"],
    github: "https://github.com/AngotyFitia/Avaratra-BackOffice",
    collaborators: []
  }
]

