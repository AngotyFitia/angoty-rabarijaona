export interface Collaborator {
  name: string
  type: "linkedin" | "portfolio"
  link: string,
  role: string
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

  projectRole?: string
  isPrivate?: boolean
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "e-torolalana",
    description: "A web application developed for DGI Madagascar to provide employee education.",
    objectives: "Deliver digital training and resources to company staff.",
    image: "/images/projects/etakalo-dashboard.png",
    gallery: ["/images/projects/etakalo-dashboard.png", "/images/projects/etakalo-programme.png", "/images/projects/etakalo-cours.png", "/images/projects/etakalo-calendrier.png", "/images/projects/etakalo-correction.png"],
    category: "Web Application",
    organization: "DGI Madagascar",
    orgLink: "https://www.impots.mg/accueil",
    technologies: ["React Native", "Spring Boot", "MongoDB", "DbSchema", "Figma", "GitHub"],
    repositories: {
      source: "https://github.com/digital-gov-mg/torolalana-portal-releases"
    },
    collaborators: [
      { name: "RAMAROSON Rivo", type: "linkedin", link: "https://linkedin.com/in/rivo-ramaroson-30916a7a" , role: "Project Manager"},
      { name: "RAKOTOVOLOLONA Erick", type: "linkedin", link: "https://linkedin.com/in/hajanirina-erick-rakotovololona-42518576", role: "Project Supervisor" },
      { name: "RANDIANOMANANA Imiangaly", type: "linkedin", link: "https://linkedin.com/in/imiangaly-randrianomanana-0389652b8", role: "Project Communications Manager" }
    ],
    projectRole: "Fullstack Developer"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with love and compassion",
    objectives: "Showcase my skills and projects with a modern design.",
    image: "/images/projects/portfolio-projects.png",
    gallery: ["/images/projects/portfolio-projects.png", "/images/projects/portfolio-skills.png"],
    category: "Web Application",
    organization: "Personal",
    orgLink: "https://angoty-rabarijaona.vercel.app",
    technologies: ["React", "Vite", "TypeScript", "TailwindCSS", "GitHub"],
    repositories: {
      source: "https://github.com/AngotyFitia/angoty-rabarijaona"
    },
    collaborators: [],
    liveUrl: "https://angoty-rabarijaona.vercel.app",
    projectRole: "Frontend Developer"
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
    collaborators: [],
    projectRole: "End-to-end Developer"
  },  
  {
    id: 4,
    title: "Takalo",
    description: "An online application designed for selling and exchanging products.",
    objectives: "The main goal of Takalo is to allow users to sell items they no longer need and to facilitate product exchanges between individuals.",
    image: "/images/projects/takalo_accueil.png",
    gallery: ["/images/projects/takalo_accueil.png", "/images/projects/takalo_dashboard.png", "/images/projects/takalo_categorie.png"],
    category: "Desktop Application",
    organization: "IT University",
    orgLink: "https://www.ituniversity-mg.com/page/",
    technologies: ["CodeIgniter", "MySQL", "GitHub", "Adobe XD"],
    repositories: {
      source: "https://github.com/Angoty/S4-Takalo"
    },
    collaborators: [
      { name: "Toky Hary", type: "linkedin", link: "https://linkedin.com/in/toky-hary-ny-aina-rakotoarimanana-474740286", role: "Frontend Developer" },
      { name: "Allan Tohaina", type: "linkedin", link: "https://linkedin.com/in/allan-tohaina-7769b3192", role: "Database Administrator" }
    ],
    projectRole: "Fullstack Developer & Security Engineer"
  },  
  {
    id: 5,
    title: "Artizana",
    description: "A platform dedicated to showcasing Malagasy handcrafted products.",
    objectives: "Its goal is to promote Malagasy craftsmanship and facilitate the commercialization of local goods.",
    image: "/images/projects/artizana_accueil.png",
    gallery: ["/images/projects/artizana_accueil.png", "/images/projects/artizana_details.png", "/images/projects/artizana_facture.png"],
    category: "Mobile Application",
    organization: "IT University",
    orgLink: "https://www.ituniversity-mg.com/page/",
    technologies: ["Ionic", "Angular", "Spring JSP", "PostgreSQL", "DbSchema", "GitHub", "Pencil"],
    repositories: {
      frontend: "https://github.com/AngotyFitia/backend-artizana",
      backend: "https://github.com/AngotyFitia/frontend-artizana",
      mobile: "https://github.com/AngotyFitia/mobile-artizana"
    },
    collaborators: [
      { name: "ANDRIAMAHANINTSOA Nancy Elidah", type: "linkedin", link: "https://www.linkedin.com/in/nancy-elidah-andriamahanintsoa-63574a312/", role:"Web Developer" }
    ],
    projectRole: "Mobile Developer"
  },
  {
    id: 6,
    title: "Avaratra",
    description: "A regional water management platform for Madagascar.",
    objectives: "Its purpose is to anticipate climate-related risks and address the main causes of water scarcity.",
    image: "/images/projects/avaratra_accueil.png",
    gallery: ["/images/projects/avaratra_accueil.png", "/images/projects/avaratra_login.png", "/images/projects/avaratra_dashboard.png", "/images/projects/avaratra_district.png", "/images/projects/avaratra_publications.png"],
    category: "Web Application",
    organization: "Personal",
    orgLink: "https://angoty-rabarijaona.vercel.app",
    technologies: [".NET", "C#", "Python", "SQLServer", "GitHub", "Pencil"],
    repositories: {
      frontend: "https://github.com/AngotyFitia/Avaratra-FrontOffice",
      backend: "https://github.com/AngotyFitia/Avaratra-BackOffice"
    },
    collaborators: [],
    projectRole: "End-to-end Developer"
  },
  {
    id: 7,
    title: "CineTrack",
    description: "A web application that helps users track, rate, and review movies and TV shows",
    objectives: "A full-stack movie and TV show tracking platform powered by the TMDB API, designed to help users manage their watchlists, track viewing progress, rate and review content, discover detailed movie information, and visualize personal viewing statistics through an intuitive and responsive interface.",
    image: "/images/projects/cinetrack_login.png",
    gallery: ["/images/projects/cinetrack_login.png", "/images/projects/cinetrack_inscription.png", "/images/projects/cinetrack_profile.png", "/images/projects/cinetrack_statistics.png"],
    category: "Web Application",
    organization: "Université Côte d'Azur",
    orgLink: "https://univ-cotedazur.fr",
    technologies: ["React", "TypeScript", "Vite", "TanStack Query", "Supabase", "TMDB API", "Notion", "GitHub","Postman"],
    repositories: {},
    collaborators: [
      { name: "MAMIARILAZA To Niasimandimby", type: "linkedin", link: "https://www.linkedin.com/in/to-mamiarilaza-5a227a27a/", role: "Frontend Developer" },
      { name: "RAMIANDRISOA Tiavina Malalaniaina", type: "linkedin", link: "https://www.linkedin.com/in/tiavina-ramiandrisoa-173807286/", role: "API Integrator" },
      { name: "RAMAROSON Andrivola Fanambony Benjamina", type: "linkedin", link: "https://www.linkedin.com/in/benjamina-ramaroson/", role: "Backend Developer" }
    ],
    videoUrl: "",
    projectRole: "Fullstack Developer"
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
      { name: "MAMIARILAZA To Niasimandimby", type: "linkedin", link: "https://www.linkedin.com/in/to-mamiarilaza-5a227a27a/", role: "Frontend Developer" },
      { name: "RAMIANDRISOA Tiavina Malalaniaina", type: "linkedin", link: "https://www.linkedin.com/in/tiavina-ramiandrisoa-173807286/", role: "Fullstack Developer" },
      { name: "RAMAROSON Andrivola Fanambony Benjamina", type: "linkedin", link: "https://www.linkedin.com/in/benjamina-ramaroson/", role: "Document Contributor" },
      { name: "MANJAKA Alpha", type: "linkedin", link: "https://www.linkedin.com/in/alpha-manjaka-bb7395272/", role: "Document Contributor" }
    ],
    liveUrl: "https://tiavinamalalaniaina.github.io/LoterieBlockChain/front/",
    videoUrl: "https://www.loom.com/share/842cd047d7794d0db4744c00dc665bbb",
    projectRole: "DevOps & QA Tester"
  },
  {
    id: 9,
    title: "CookSmart",
    description: "An AI-powered Android application that generates personalized recipes based on ingredients available at home, helping users cook smarter while reducing food waste.",
    objectives: "Designed to combine mobile development and artificial intelligence, CookSmart allows users to enter available ingredients, select dietary preferences, recipe styles, and serving sizes, then receive detailed AI-generated recipes. The application also provides recipe history, favorites management, offline data persistence, and intelligent recipe regeneration.",
    image: "/images/projects/cook_smart 4.jfif",
    gallery: ["/images/projects/cook_smart 4.jfif", "/images/projects/cook_smart 3.jfif", "/images/projects/cook_smart 2.jfif", "/images/projects/cook_smart 1.jfif"],
    category: "Mobile Application",
    organization: "Personal",
    orgLink: "https://angoty-rabarijaona.vercel.app/",
    technologies: [ "Kotlin", "Material 3","Room Database", "Retrofit", "Gson", "Groq API", "Gemini API","Android Studio", "Github"],
    repositories: {},
    collaborators: [],
    liveUrl: "https://drive.google.com/file/u/0/d/1py7YWNaofv6OVqs459Vm7WeO83ObKb4A/view?usp=sharing&usp=embed_facebook&pli=1",
    projectRole: "End-to-end Developer"
  },
  {
    id: 10,
    title: "Coffee",
    description: "A cloud computing project focused on learning and applying AWS services through hands-on labs, including infrastructure setup and application deployment.",
    objectives: "This project was carried out as part of the AWS Cloud Foundations and AWS Cloud Developing training program at Université Côte d’Azur. It involved designing and deploying cloud infrastructure using Amazon Web Services, including VPC configuration, database setup, and hosting a sample coffee-related application. The goal was to understand cloud architecture, scalability, and best practices for deploying modern applications in a secure AWS environment.",  
    image: "/images/projects/aws_coffee.png",
    gallery: [ "/images/projects/aws_coffee.png", "/images/projects/aws_compartiment.png", "/images/projects/aws_database.png", "/images/projects/aws_apercu_destination.png","/images/projects/aws_apercu_vpc.png"],
    category: "Cloud / DevOps",
    organization: "Université Côte d'Azur",
    orgLink: "https://univ-cotedazur.fr",
    technologies: [ "AWS", "VPC", "EC2", "RDS", "IAM", "S3", "CloudWatch", "Networking","Cloud Architecture"],
    repositories: {},
    collaborators: [],
    projectRole: "Cloud Engineer"
  },
  {
    id: 11,
    title: "Furniture Management System",
    description: "A Java-based enterprise application designed to digitize and optimize furniture management operations including sales, stock tracking, personnel management, and statistical reporting.",
    objectives: "This project was developed to modernize the management of a furniture company by digitizing key operations such as employee management, client purchases, stock tracking, and sales analytics. It improves operational efficiency through structured modules, data-driven decision making, and real-time inventory control.",
    image: "/images/projects/meuble_dashboard.PNG",
    gallery: [ "/images/projects/meuble_dashboard.PNG", "/images/projects/meuble_situation.PNG", "/images/projects/meuble_liste.PNG", "/images/projects/meuble_filtre.PNG","/images/projects/meuble_materiels.PNG"],
    category: "Desktop Application",
    organization: "IT University",
    orgLink: "https://www.ituniversity-mg.com/page/",
    technologies: [ "Java", "JSP", "PostgreSQL", "Github", "Postman", "Trello"],
    repositories: {
      source: "https://github.com/Angoty/Projet-S5-S3-Meubles"
    },
    collaborators: [
      { name: "RABEMANANTSOA Ny Haritina", type: "linkedin", link: "https://www.linkedin.com/in/rabemanantsoa-ny-haritina-593b47238/", role:"Backend Developer" },
      { name: "RABENAIVO Lucas", type: "linkedin", link: "https://www.linkedin.com/in/lucas-rabenaivo-616037336/", role: "Frontend Developer" },
      { name: "RABENJA Mandresy", type: "linkedin", link: "https://www.linkedin.com/in/mandresy-rabenja-94352b230/", role: "Database Administrator & DevOps" }
    ],
    projectRole: "Project Manager & Technical Lead"
  },
  {
    id: 12,
    title: "Customer Product Prediction",
    description: "A supervised machine learning project using R to build and compare decision tree models for customer product prediction.",
    objectives: "This project explores supervised learning techniques using decision tree algorithms in R. I implemented and compared multiple models (rpart, C5.0, and tree) to predict customer product adoption based on demographic and financial attributes. After evaluating model performance, the best classifier was selected and applied to unseen data for final predictions.",
    image: "/images/projects/r_arbre_de_decision.png",
    gallery: [ "/images/projects/r_arbre_de_decision.png", "/images/projects/r_classe_majoritaire.png"],
    category: "Data-science",
    organization: "Université Côte d'Azur",
    orgLink: "https://univ-cotedazur.fr",
    technologies: [ "R Studio" ],
    repositories: {},
    collaborators: [],
    projectRole: "Data Analyst"
  },
  {
    id: 13,
    title: "Fixed Asset Management System (Immobilisation)",
    description: "A web-based application designed to streamline accounting workflows for managing supply needs, proforma requests, deliveries, and asset depreciation.",
    objectives: "This project focuses on digitalizing the accounting and finance processes related to fixed assets. Users can declare supply needs, group requests, upload proforma invoices, manage delivery notes, and track asset depreciation. The system improves collaboration between Finance and Accounting departments while ensuring traceability and efficiency in document management.",
    image: "/images/projects/immobilisation_connexion_chef.png",
    gallery: [  "/images/projects/immobilisation_connexion_chef.png", 
                "/images/projects/immobilisation_liste_besoins.png",
                "/images/projects/immobilisation_liste_besoins_grouper.png",
                "/images/projects/immobilisation_liste_besoins_grouper_proforma.png",
                "/images/projects/immobilisation_bon_de_livraison.png",
                "/images/projects/immobilisation_ammortissement.png",
                "/images/projects/immobilisation_ajout_immobilisation.png",
                "/images/projects/immobilisation_demande_proforma_pdf.png"],
    category: "Web Application",
    organization: "IT University",
    orgLink: "https://www.ituniversity-mg.com/page/",
    technologies: [ "ASP.NET Core", "Entity Framework", "SQL Server", "Bootstrap", "Github"],
    repositories: {
      source: "https://github.com/Angoty/Projet-S5-S3-Meubles"
    },
    collaborators: [
      { name: "ANDRIAMAHANINTSOA Nancy Elidah", type: "linkedin", link: "https://www.linkedin.com/in/nancy-elidah-andriamahanintsoa-63574a312/", role:"Backend Developer" },
      { name: "RABESERANANA Arena Gracia", type: "linkedin", link: "https://www.linkedin.com/in/arena-gracia-rabeseranana/", role: "Full-Stack Developer" }
    ],
    projectRole: "Backend Developer"
  },
  {
    id: 14,
    title: "CANALSAT",
    description: "A web-based application for managing television subscriptions, client data, bouquet offers, and personalized channel selections.",
    objectives: "This project aims to digitalize the subscription workflow for CANAL+. Users can log in, view available bouquets with discounts, customize their channel packages, and track subscription history. The system also provides administrators with tools to manage client lists, monitor channel availability and signal strength, and ensure transparent billing. It enhances user experience by offering both predefined bundles and personalized channel options.",
    image: "/images/projects/canalsat_connexion.png",
    gallery: [  "/images/projects/canalsat_connexion.png", 
                "/images/projects/canalsat_abonnement.png",
                "/images/projects/canalsat_abonnement2.png",
                "/images/projects/canalsat_liste_chaines.png",
                "/images/projects/canalsat_abonnement_client.png",
                "/images/projects/canalsat_liste_clients_connectés.png"],
    category: "Desktop Application",
    organization: "IT University",
    orgLink: "https://www.ituniversity-mg.com/page/",
    technologies: [ "ASP.NET Core", "Entity Framework", "SQL Server", "Bootstrap"],
    repositories: {},
    collaborators: [],
    projectRole: "Full-Stack Developer"
  },
  {
    id: 15,
    title: "Digital Signature",
    description: "A web application for registering users with public keys, signing documents with private keys, and verifying digital signatures to ensure authenticity and integrity.",
    objectives: "This project explores applied cryptography concepts by implementing a digital signature workflow. Users can register with a username and public key, sign text documents using their private key, and verify signatures against uploaded files. The system validates both the signature and the user identity, providing timestamped proof of authenticity. It demonstrates practical integration of public-key infrastructure (PKI) concepts within a web environment.",
    image: "/images/projects/signature_inscription.png",
    gallery: [  "/images/projects/signature_inscription.png", 
                "/images/projects/signature_insertion.png",
                "/images/projects/signature_verification.png"],
    category: "Cybersecurity",
    organization: "IT University",
    orgLink: "https://www.ituniversity-mg.com/page/",
    technologies: [ "Django", "Cryptography Library", "MySQL"],
    repositories: {},
    collaborators: [],
    projectRole: "Full-Stack Developer"
  },
  {
    id: 16,
    title: "DMZ Network Security Architecture",
    description: "A practical project implementing a demilitarized zone (DMZ) network topology with firewall rules, proxy filtering, and secure routing between WAN, LAN, and DMZ segments.",
    objectives: "This project explores network security concepts by designing and deploying a DMZ architecture. The setup includes a firewall configured with iptables for traffic filtering and NAT, Squid and SquidGuard for web proxy and URL filtering, and segmented networks for cloud, web server, and client systems. The goal was to enforce access control policies, block inappropriate or time-restricted content, and ensure secure communication between internal and external networks. The project demonstrates how layered security and controlled exposure of services (e.g., web server in DMZ) protect internal resources.",
    image: "/images/projects/dmz_topologie_gns3.png",
    gallery: [  "/images/projects/dmz_topologie_gns3.png", 
                "/images/projects/dmz_ip_firewall.png",
                "/images/projects/dmz_ip_serveur.png",
                "/images/projects/dmz_ip_client.png",
                "/images/projects/dmz_ip_wan.png",
                "/images/projects/dmz_test_ping_lan.png",
                "/images/projects/dmz_test_ping_wan.png",
                "/images/projects/dmz_politique.png",
                "/images/projects/dmz_HTTPS.png",
                "/images/projects/dmz_HTTPS.png",
                "/images/projects/dmz_conf_squid_conf.png",
                "/images/projects/dmz_conf_squid_fb.png",
                "/images/projects/dmz_test_squid.png"],
    category: "Cybersecurity",
    organization: "IT University",
    orgLink: "https://www.ituniversity-mg.com/page/",
    technologies: [ "Linux", "iptables", "Squid", "SquidGuard", "Docker", "Networking"],
    repositories: {},
    collaborators: [],
    projectRole: "Network Security Engineer"
  }
]

