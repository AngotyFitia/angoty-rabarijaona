export interface Collaborator {
  name: string
  type: "linkedin" | "portfolio"
  link: string
}

export interface ProjectRepositories {
  frontend?: string
  backend?: string
  mobile?: string
  source?: string
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

  repositories?: ProjectRepositories

  liveUrl?: string
  videoUrl?: string

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
    repositories: {
      source: "https://github.com/digital-gov-mg/torolalana-portal-releases"
    },
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
    repositories: {
      source: "https://github.com/AngotyFitia/angoty-rabarijaona"
    },
    collaborators: [],
    liveUrl: "https://angoty-rabarijaona.vercel.app"
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
    repositories: {
      source: "https://github.com/Angoty/Machine-Learning"
    },
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
    repositories: {
      source: "https://github.com/Angoty/S4-Takalo"
    },
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
    repositories: {
      frontend: "https://github.com/AngotyFitia/backend-artizana",
      backend: "https://github.com/AngotyFitia/frontend-artizana",
      mobile: "https://github.com/AngotyFitia/mobile-artizana"
    },
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
    repositories: {
      frontend: "https://github.com/AngotyFitia/Avaratra-FrontOffice",
      backend: "https://github.com/AngotyFitia/Avaratra-BackOffice"
    },
    collaborators: []
  },
  {
    id: 7,
    title: "CineTrack",
    description: "A web application that helps users track, rate, and review movies and TV shows",
    objectives: "A full-stack movie and TV show tracking platform powered by the TMDB API, designed to help users manage their watchlists, track viewing progress, rate and review content, discover detailed movie information, and visualize personal viewing statistics through an intuitive and responsive interface.",
    image: "/images/projects/cinetrack_login.png",
    gallery: ["/images/projects/cinetrack_login.png", "/images/projects/cinetrack_inscription.png", "/images/projects/cinetrack_profile.png", "/images/projects/cinetrack_statistics.png"],
    category: "Fullstack",
    organization: "Université Côte d'Azur",
    orgLink: "https://univ-cotedazur.fr",
    technologies: ["React", "TypeScript", "Vite", "TanStack Query", "Supabase", "TMDB API", "Notion", "GitHub","Postman"],
    repositories: {},
    collaborators: [
      { name: "To MAMIARILAZA", type: "linkedin", link: "https://www.linkedin.com/in/to-mamiarilaza-5a227a27a/" },
      { name: "Tiavina RAMIANDRISOA", type: "linkedin", link: "https://www.linkedin.com/in/tiavina-ramiandrisoa-173807286/" },
      { name: "Benjamina RAMAROSON", type: "linkedin", link: "https://www.linkedin.com/in/benjamina-ramaroson/" }
    ],
    videoUrl: "",
  },
  {
    id: 8,
    title: "Lottery OnChain",
    description: "A decentralized blockchain lottery application built on Ethereum, allowing users to purchase tickets and participate in transparent on-chain prize draws.",
    objectives: "Designed to explore smart contract development and decentralized application architecture, the platform enables secure lottery rounds, automated winner selection, wallet integration through MetaMask, and blockchain-based transaction management using Ethereum.",
    image: "/images/projects/lottery_1.jfif",
    gallery: ["/images/projects/lottery_1.jfif", "/images/projects/lottery_2.jfif", "/images/projects/lottery_3.jfif", "/images/projects/lottery_4.jfif", "/images/projects/lottery_5.jfif"],
    category: "BlockChain",
    organization: "IT University",
    orgLink: "https://www.ituniversity-mg.com/page/",
    technologies: ["Solidity", "Ethereum", "Hardhat", "Ethers.js", "JavaScript", "HTML", "CSS","MetaMask"],
    repositories: {
      source: "https://github.com/TiavinaMalalaniaina/LoterieBlockChain/"
    },
    collaborators: [
      { name: "To MAMIARILAZA", type: "linkedin", link: "https://www.linkedin.com/in/to-mamiarilaza-5a227a27a/" },
      { name: "Tiavina RAMIANDRISOA", type: "linkedin", link: "https://www.linkedin.com/in/tiavina-ramiandrisoa-173807286/" },
      { name: "Benjamina RAMAROSON", type: "linkedin", link: "https://www.linkedin.com/in/benjamina-ramaroson/" },
      { name: "Alpha Manjaka", type: "linkedin", link: "https://github.com/TiavinaMalalaniaina/LoterieBlockChain/" }
    ],
    liveUrl: "https://tiavinamalalaniaina.github.io/LoterieBlockChain/front/",
    videoUrl: "https://www.loom.com/share/842cd047d7794d0db4744c00dc665bbb",
  }
]

