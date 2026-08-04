export const DEFAULT_IMAGE = "/images/projects/private_project.png"

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
export interface ProjectTranslations {
    fr?: {
      title: string
      description: string
      objectives: string
      achievements?: string[],
      role:string
    }
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
  achievements?: string[]
  translations?: ProjectTranslations
}


export const projects: ProjectType[] = [
    {
        id: 1,
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
        projectRole: "Fullstack Developer & Security Engineer",
        achievements:[
          "Enabled product exchange and resale among students",
          "Strengthened database security with role‑based access"
        ],
        translations:{
            fr:{
                title: "Takalo",
                description: "Une application en ligne conçue pour la vente et l'échange de produits.",
                objectives: "L'objectif principal de Takalo est de permettre aux utilisateurs de vendre des articles dont ils n'ont plus besoin et de faciliter les échanges de produits entre particuliers.",
                achievements:[
                    "Permet l'échange et la revente de produits entre étudiants",
                    "Renforce la sécurité de la base de données avec un accès basé sur les rôles"
                ],
                projectRole: "Développeur Fullstack & Ingénieur en Sécurité",
                collaborators: [
                    { name: "Toky Hary", type: "linkedin", link: "https://linkedin.com/in/toky-hary-ny-aina-rakotoarimanana-474740286", role: "Développeur Frontend" },
                    { name: "Allan Tohaina", type: "linkedin", link: "https://linkedin.com/in/allan-tohaina-7769b3192", role: "Administrateur de Base de Données" }
                  ],
            }
        }
    },{
        id: 2,
        title: "Manufacturing Management System",
        description: "A web-based application designed to manage product manufacturing workflows, including component tracking, recipe composition, and automated primary key generation.",
        objectives: "This project focuses on digitalizing the production process. It allows administrators to define products, register components with units and prices, and build recipes linking products to their required components. The system automatically generates unique primary keys for each entity, ensures data consistency, and calculates product costs based on component quantities. JSP pages provide a user interface for managing data and visualizing production details.",
        image: "",
        gallery: [],
        category: "Desktop Application",
        organization: "Personal",
        orgLink: "https://angoty-rabarijaona.vercel.app",
        technologies: [ "Java", "JDBC", "Oracle Database", "JSP", "Servlets" ],
        repositories: {},
        collaborators: [],
        projectRole: "Backend Developer & Database Designer",
        isPrivate: true,
        achievements:[
            "Automated product recipe composition",
            "Ensured data consistency with unique primary keys"
        ],
        translations:{
            fr:{
                title: "Système de Gestion de Fabrication",
                description: "Une application web conçue pour gérer les flux de fabrication de produits, y compris le suivi des composants, la composition des recettes et la génération automatique de clés primaires.",
                objectives: "Ce projet se concentre sur la digitalisation du processus de production. Il permet aux administrateurs de définir des produits, d'enregistrer des composants avec leurs unités et prix, et de créer des recettes reliant les produits à leurs composants requis. Le système génère automatiquement des clés primaires uniques pour chaque entité, garantit la cohérence des données et calcule les coûts des produits en fonction des quantités de composants. Les pages JSP fournissent une interface utilisateur pour gérer les données et visualiser les détails de production.",
                achievements:[
                    "Automatisation de la composition des recettes de produits",
                    "Assurance de la cohérence des données avec des clés primaires uniques"
                ]
            }
        },
    },{
        id: 3,
        title: "Fixed Asset Management System",
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
        repositories: {},
        collaborators: [
            { name: "ANDRIAMAHANINTSOA Nancy Elidah", type: "linkedin", link: "https://www.linkedin.com/in/nancy-elidah-andriamahanintsoa-63574a312/", role:"Backend Developer" },
            { name: "RABESERANANA Arena Gracia", type: "linkedin", link: "https://www.linkedin.com/in/arena-gracia-rabeseranana/", role: "Full-Stack Developer" }
        ],
        projectRole: "Backend Developer",
        achievements:[
            "Streamlined accounting workflows for asset management",
            "Enhanced collaboration between Finance and Accounting"
        ],
        translations:{
            fr:{
                title: "Système de Gestion des Immobilisations",
                description: "Une application web conçue pour rationaliser les flux de travail comptables liés à la gestion des besoins en approvisionnement, des demandes de proforma, des livraisons et de l'amortissement des actifs.",
                objectives: "Ce projet se concentre sur la digitalisation des processus comptables et financiers liés aux immobilisations. Les utilisateurs peuvent déclarer leurs besoins en approvisionnement, regrouper les demandes, télécharger les factures proforma, gérer les bons de livraison et suivre l'amortissement des actifs. Le système améliore la collaboration entre les départements Finance et Comptabilité tout en garantissant la traçabilité et l'efficacité dans la gestion des documents.",
                achievements:[
                    "Rationalisation des flux de travail comptables pour la gestion des immobilisations",
                    "Amélioration de la collaboration entre les départements Finance et Comptabilité"
                ]
            }
        },
    },{
        id: 4,
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
        projectRole: "Project Manager & Technical Lead",
        achievements: [
            "Digitalized furniture company operations",
            "Improved workflow efficiency by 30%"
        ],
        translations:{
            fr:{
                title: "Système de Gestion de Meubles",
                description: "Une application d'entreprise basée sur Java conçue pour numériser et optimiser les opérations de gestion de meubles, y compris les ventes, le suivi des stocks, la gestion du personnel et les rapports statistiques.",
                objectives: "Ce projet a été développé pour moderniser la gestion d'une entreprise de meubles en numérisant les opérations clés telles que la gestion des employés, les achats des clients, le suivi des stocks et l'analyse des ventes. Il améliore l'efficacité opérationnelle grâce à des modules structurés, une prise de décision basée sur les données et un contrôle des stocks en temps réel.",
                achievements:[
                    "Numérisation des opérations d'une entreprise de meubles",
                    "Amélioration de l'efficacité du flux de travail de 30%"
                ]
            }
        },
    },{
        id: 5,
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
        projectRole: "Full-Stack Developer",
        achievements:[
            "Digitalized subscription workflows for TV services",
            "Improved client data management and billing transparency"
        ],
        translations:{
            fr:{
                title: "CANALSAT",
                description: "Une application web pour gérer les abonnements télévisés, les données clients, les offres de bouquets et les sélections de chaînes personnalisées.",
                objectives: "Ce projet vise à digitaliser le flux d'abonnement pour CANAL+. Les utilisateurs peuvent se connecter, consulter les bouquets disponibles avec des réductions, personnaliser leurs forfaits de chaînes et suivre l'historique des abonnements. Le système fournit également aux administrateurs des outils pour gérer les listes de clients, surveiller la disponibilité des chaînes et la force du signal, et assurer une facturation transparente. Il améliore l'expérience utilisateur en offrant à la fois des forfaits prédéfinis et des options de chaînes personnalisées.",
                achievements:[
                    "Digitalisation des flux d'abonnement pour les services TV",
                    "Amélioration de la gestion des données clients et de la transparence de la facturation"
                ]
            }
        },
    },{
        id: 6,
        title: "Course",
        description: "A web-based application designed to manage running events, including stage planning, participant assignments, and team rankings.",
        objectives: "This project focuses on digitalizing race organization workflows. Administrators can log in securely, define race stages with distances and departure times, assign participants to stages, and track progress. The system also provides interactive dashboards with charts and tables to visualize team rankings, points per stage, and overall standings. It includes export features such as PDF generation for official reports.",
        image: "/images/projects/course_connexion.png",
        gallery: [  "/images/projects/course_connexion.png", 
                    "/images/projects/course_liste_etapes.png",
                    "/images/projects/course_classement_courreurs.png",
                    "/images/projects/course_points_etapes.png",
                    "/images/projects/course_par_equipe.png",
                    "/images/projects/course_equipe_gagnante.png",],
        category: "Desktop Application",
        organization: "IT University",
        orgLink: "https://www.ituniversity-mg.com/page/",
        technologies: [ "ASP.NET Core", "Entity Framework", "PostgreSQL", "Github", "Bootstrap"],
        repositories: {
            source: "https://github.com/Angoty/Evaluation2"
        },
        collaborators: [],
        projectRole: "Full-Stack Developer",
        achievements:[
            "Digitalized race organization workflows",
            "Generated official PDF reports for rankings"
        ],
        translations:{
            fr:{
                title: "Course",
                description: "Une application web conçue pour gérer les événements de course à pied, y compris la planification des étapes, l'affectation des participants et le classement des équipes.",
                objectives: "Ce projet se concentre sur la digitalisation des flux d'organisation de courses. Les administrateurs peuvent se connecter en toute sécurité, définir les étapes de la course avec les distances et les heures de départ, affecter les participants aux étapes et suivre leur progression. Le système fournit également des tableaux de bord interactifs avec des graphiques et des tableaux pour visualiser le classement des équipes, les points par étape et le classement général. Il comprend des fonctionnalités d'exportation telles que la génération de PDF pour les rapports officiels.",
                achievements:[
                    "Digitalisation des flux d'organisation de courses",
                    "Génération de rapports PDF officiels pour les classements"
                ]
            }
        },
    },{
        id: 7,
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
        isPrivate: true,
        projectRole: "Fullstack Developer",
        achievements:[
            "Adopted by DGI Madagascar staff for training",
            "Improved accessibility of internal education resources"
        ],
        translations:{
            fr:{
                title: "e-torolalana",
                description: "Une application web développée pour la DGI Madagascar afin de fournir une éducation aux employés.",
                objectives: "Fournir une formation numérique et des ressources au personnel de l'entreprise.",
                achievements:[
                    "Adoptée par le personnel de la DGI Madagascar pour la formation",
                    "Amélioration de l'accessibilité des ressources éducatives internes"
                ]
            }   
        },
    },{
        id: 8,
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
        projectRole: "End-to-end Developer",
        achievements:[
        "Used by 200+ students for housing market analysis",
        "Provided predictive insights for rental decisions"
        ],
        translations:{
            fr:{
                title: "Loyer Tana",
                description: "Une application prédictive conçue pour estimer les prix de location à Antananarivo.",
                objectives: "Fournir des informations sur les tendances du marché immobilier et prévoir les coûts de location afin de soutenir une meilleure prise de décision pour les résidents et les investisseurs.",
                achievements:[
                    "Utilisée par plus de 200 étudiants pour l'analyse du marché immobilier",
                    "Fournit des informations prédictives pour les décisions de location"
                ]
            }
        }
    }, {
        id: 9,
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
        technologies: [ "Linux Environment", "iptables", "Squid", "SquidGuard", "Docker", "Networking"],
        repositories: {},
        collaborators: [],
        projectRole: "Network Security Engineer",
        achievements:[
            "Designed secure DMZ topology with firewall rules",
            "Enforced access control and proxy filtering"
        ],
        translations:{
            fr:{
                title: "Architecture de Sécurité Réseau DMZ",
                description: "Un projet pratique mettant en œuvre une topologie réseau de zone démilitarisée (DMZ) avec des règles de pare-feu, un filtrage proxy et un routage sécurisé entre les segments WAN, LAN et DMZ.",
                objectives: "Ce projet explore les concepts de sécurité réseau en concevant et en déployant une architecture DMZ. La configuration comprend un pare-feu configuré avec iptables pour le filtrage du trafic et la NAT, Squid et SquidGuard pour le proxy web et le filtrage d'URL, ainsi que des réseaux segmentés pour le cloud, le serveur web et les systèmes clients. L'objectif était de faire respecter les politiques de contrôle d'accès, de bloquer le contenu inapproprié ou soumis à des restrictions temporelles, et d'assurer une communication sécurisée entre les réseaux internes et externes. Le projet démontre comment la sécurité en couches et l'exposition contrôlée des services (par exemple, serveur web dans la DMZ) protègent les ressources internes.",
                achievements:[
                    "Conception d'une topologie DMZ sécurisée avec des règles de pare-feu",
                    "Mise en œuvre du contrôle d'accès et du filtrage proxy"
                ]
            }
        }
    }, {
        id: 10,
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
        projectRole: "Full-Stack Developer",
        achievements:[
            "Implemented PKI concepts in a web app",
            "Ensured authenticity and integrity of signed documents"
        ],
        translations:{
            fr:{
                title: "Signature Numérique",
                description: "Une application web pour enregistrer les utilisateurs avec des clés publiques, signer des documents avec des clés privées et vérifier les signatures numériques afin d'assurer l'authenticité et l'intégrité.",
                objectives: "Ce projet explore les concepts de cryptographie appliquée en mettant en œuvre un flux de travail de signature numérique. Les utilisateurs peuvent s'enregistrer avec un nom d'utilisateur et une clé publique, signer des documents texte à l'aide de leur clé privée et vérifier les signatures par rapport aux fichiers téléchargés. Le système valide à la fois la signature et l'identité de l'utilisateur, fournissant une preuve horodatée d'authenticité. Il démontre l'intégration pratique des concepts d'infrastructure à clé publique (PKI) dans un environnement web.",
                achievements:[
                    "Mise en œuvre des concepts PKI dans une application web",
                    "Assurance de l'authenticité et de l'intégrité des documents signés"
                ]
            }
        },
    },{
        id: 11,
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
        projectRole: "Data Analyst",
        achievements:[
            "Compared multiple decision tree models in R",
            "Achieved accurate predictions on customer adoption"
        ],
        translations:{
            fr:{
                title: "Prédiction de Produit Client",
                description: "Un projet d'apprentissage supervisé utilisant R pour construire et comparer des modèles d'arbres de décision pour la prédiction de produits clients.",
                objectives: "Ce projet explore les techniques d'apprentissage supervisé en utilisant des algorithmes d'arbres de décision dans R. J'ai mis en œuvre et comparé plusieurs modèles (rpart, C5.0 et tree) pour prédire l'adoption de produits par les clients en fonction des attributs démographiques et financiers. Après avoir évalué les performances des modèles, le meilleur classificateur a été sélectionné et appliqué à des données non vues pour les prédictions finales.",
                achievements:[
                    "Comparaison de plusieurs modèles d'arbres de décision dans R",
                    "Obtention de prédictions précises sur l'adoption des produits par les clients"
                ]
            }
        }
    },{
        id: 12,
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
        projectRole: "Mobile Developer",
        achievements:[
            "Promoted Malagasy craftsmanship online",
            "Integrated mobile and web platforms for artisans"
        ],
        translations:{
            fr:{
                title: "Artizana",
                description: "Une plateforme dédiée à la mise en valeur des produits artisanaux malgaches.",
                objectives: "Son objectif est de promouvoir l'artisanat malgache et de faciliter la commercialisation des produits locaux.",
                achievements:[
                    "Promotion de l'artisanat malgache en ligne",
                    "Intégration des plateformes mobile et web pour les artisans"
                ]
            }
        },
    },{
        id: 13,
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
        projectRole: "End-to-end Developer",
        achievements:[
            "Anticipated climate risks for regional water management",
            "Improved awareness of water scarcity issues"
        ],
        translations:{
            fr:{
                title: "Avaratra",
                description: "Une plateforme régionale de gestion de l'eau pour Madagascar.",
                objectives: "Son objectif est d'anticiper les risques liés au climat et de traiter les principales causes de la pénurie d'eau.",
                achievements:[
                    "Anticipation des risques climatiques pour la gestion régionale de l'eau",
                    "Amélioration de la sensibilisation aux problèmes de pénurie d'eau"
                ]
            }
        },
    },{
        id: 14,
        title: "Portfolio",
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
        projectRole: "Frontend Developer",
        achievements: [
            "Showcases 15+ projects and 20+ technologies",
            "Deployed successfully on Vercel with responsive design"
        ],
        translations:{
            fr:{
                title: "Portfolio",
                description: "Mon portfolio personnel construit avec amour et compassion",
                objectives: "Mettre en valeur mes compétences et projets avec un design moderne.",
                achievements: [
                    "Présente plus de 15 projets et 20 technologies",
                    "Déployé avec succès sur Vercel avec un design réactif"
                ]
            }
        },
    },{
        id: 15,
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
        projectRole: "End-to-end Developer",
        achievements:[
            "Generated 100+ AI‑powered recipes",
            "Reduced food waste by suggesting ingredient‑based meals"
        ],
        translations:{
            fr:{
                title: "CookSmart",
                description: "Une application Android alimentée par l'IA qui génère des recettes personnalisées en fonction des ingrédients disponibles à la maison, aidant les utilisateurs à cuisiner plus intelligemment tout en réduisant le gaspillage alimentaire.",
                objectives: "Conçu pour combiner le développement mobile et l'intelligence artificielle, CookSmart permet aux utilisateurs de saisir les ingrédients disponibles, de sélectionner leurs préférences alimentaires, le style de recette et la taille des portions, puis de recevoir des recettes détaillées générées par l'IA. L'application fournit également un historique des recettes, la gestion des favoris, la persistance des données hors ligne et la régénération intelligente des recettes.",
                achievements:[
                    "Génération de plus de 100 recettes alimentées par l'IA",
                    "Réduction du gaspillage alimentaire en suggérant des repas basés sur les ingrédients"
                ]
            }   
        },
    },{
        id: 16,
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
        projectRole: "Fullstack Developer",
        achievements:[
            "Managed 100+ movie reviews and watchlists",
            "Integrated TMDB API for real‑time film data"
        ],
        translations:{
            fr:{
                title: "CineTrack",
                description: "Une application web qui aide les utilisateurs à suivre, évaluer et commenter des films et des émissions de télévision",
                objectives: "Une plateforme complète de suivi de films et d'émissions de télévision alimentée par l'API TMDB, conçue pour aider les utilisateurs à gérer leurs listes de visionnage, suivre leur progression, évaluer et commenter le contenu, découvrir des informations détaillées sur les films et visualiser leurs statistiques personnelles de visionnage grâce à une interface intuitive et réactive.",
                achievements:[
                    "Gestion de plus de 100 critiques et listes de visionnage de films",
                    "Intégration de l'API TMDB pour des données cinématographiques en temps réel"
                ]
            }
        },
    },{
        id: 17,
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
        projectRole: "DevOps & QA Tester",
        achievements:[
            "Demonstrated blockchain transparency with Ethereum smart contracts",
            "Deployed live demo with MetaMask wallet integration"
        ],
        translations:{
            fr:{
                title: "Loterie OnChain",
                description: "Une application de loterie décentralisée basée sur la blockchain Ethereum, permettant aux utilisateurs d'acheter des tickets et de participer à des tirages au sort transparents sur la chaîne.",
                objectives: "Conçue pour explorer le développement de contrats intelligents et l'architecture des applications décentralisées, la plateforme permet des tours de loterie sécurisés, une sélection automatisée des gagnants, une intégration de portefeuille via MetaMask et une gestion des transactions basée sur la blockchain en utilisant Ethereum.",
                achievements:[
                    "Démonstration de la transparence de la blockchain avec les contrats intelligents Ethereum",
                    "Déploiement d'une démonstration en direct avec intégration du portefeuille MetaMask"
                ]
            }   
        },
    },{
        id: 18,
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
        projectRole: "Cloud Engineer",
        achievements:[
            "Deployed successfully on AWS Cloud infrastructure",
            "Implemented secure VPC and database setup"
        ],
        translations:{
            fr:{
                title: "Coffee",
                description: "Un projet de cloud computing axé sur l'apprentissage et l'application des services AWS à travers des laboratoires pratiques, y compris la configuration de l'infrastructure et le déploiement d'applications.",
                objectives: "Ce projet a été réalisé dans le cadre du programme de formation AWS Cloud Foundations et AWS Cloud Developing à l'Université Côte d’Azur. Il impliquait la conception et le déploiement d'une infrastructure cloud en utilisant les services Amazon Web Services, y compris la configuration du VPC, la mise en place de bases de données et l'hébergement d'une application exemple liée au café. L'objectif était de comprendre l'architecture cloud, la scalabilité et les meilleures pratiques pour déployer des applications modernes dans un environnement AWS sécurisé.",
                achievements:[
                    "Déployé avec succès sur l'infrastructure AWS Cloud",
                    "Mise en œuvre d'une configuration sécurisée du VPC et de la base de données"
                ]
            }
        },
    },{
        id: 19,
        title: "SIG Madagascar - Spatial",
        description: "A GIS project focused on mapping and analyzing demographic and geographic data of Madagascar.",
        objectives: "The project aimed to integrate spatial datasets (districts, communes, routes, lakes, population) to support regional planning and highlight water scarcity and climate-related risks.",
        image: "/images/projects/qgis_image1.png",
        gallery: [  "/images/projects/qgis_image1.png",
                    "/images/projects/qgis_image2.png",
                    "/images/projects/qgis_image3.png",
                    "/images/projects/qgis_image4.png",
                    "/images/projects/qgis_image5.png",
                    "/images/projects/qgis_image6.png",
                    "/images/projects/qgis_image7.png",
                    "/images/projects/qgis_image8.png",
                    "/images/projects/qgis_image9.png",
                    "/images/projects/qgis_image10.png",
                    "/images/projects/qgis_image11.png",
                    "/images/projects/qgis_image12.png",
                    "/images/projects/qgis_image13.png",
                    "/images/projects/qgis_image14.png",
        ],
        category: "GIS Application",
        organization: "Personal",
        orgLink: "https://angoty-rabarijaona.vercel.app",
        technologies: ["Linux Environment", "Python", "SQLServer", "PostGIS"],
        repositories: {},
        collaborators: [],
        projectRole: "Data Analyst & QGIS Developer",
        achievements:[
            "Mapped administrative boundaries (districts and communes) with georeferenced data",
            "Integrated demographic datasets (population, households) for spatial analysis",
            "Visualized water resources and routes to support regional planning",
            "Applied GIS methods to anticipate climate risks and resource scarcity"
        ],
        translations:{
            fr:{
                title: "SIG Madagascar - Spatial",
                description: "Un projet SIG axé sur la cartographie et l'analyse des données démographiques et géographiques de Madagascar.",
                objectives: "Le projet visait à intégrer des ensembles de données spatiales (districts, communes, routes, lacs, population) pour soutenir la planification régionale et mettre en évidence les problèmes de pénurie d'eau et les risques liés au climat.",
                achievements:[
                    "Cartographie des limites administratives (districts et communes) avec des données géoréférencées",
                    "Intégration des ensembles de données démographiques (population, ménages) pour l'analyse spatiale",
                    "Visualisation des ressources en eau et des routes pour soutenir la planification régionale",
                    "Application des méthodes SIG pour anticiper les risques climatiques et la rareté des ressources"
                ]
            }
        },
    },{
        id: 20,
        title: "Làlana",
        description: "A Ruby-based web application designed to evaluate and rank contractors according to road project quality metrics.",
        objectives: "The system allows users to select a road, retrieve contractor data, and compute a quality-to-price ratio using stored formulas. It automates evaluation and ranking based on performance indicators such as speed, employee efficiency, and experience.",
        image: "/images/projects/lalana_selection.png",
        gallery: [
            "/images/projects/lalana_selection.png",
            "/images/projects/lalana_liste.png"
        ],
        category: "Desktop Application",
        organization: "IT University",
        orgLink: "https://www.ituniversity-mg.com/page/",
        technologies: ["Ruby", "Sinatra", "PostgreSQL", "HTML", "ERB"],
        repositories: {
            source: "https://github.com/Angoty/Projets/tree/main/S4/ruby/Evaluation"
        },
        collaborators: [],
        projectRole: "Fullstack Developer",
        achievements: [
            "Automated contractor ranking based on quality-price ratio",
            "Integrated dynamic SQL formula evaluation for road quality",
            "Demonstrated Ruby–PostgreSQL integration in a lightweight web app"
        ],
        translations:{
            fr:{
                title: "Làlana",
                description: "Une application web basée sur Ruby conçue pour évaluer et classer les entrepreneurs selon les métriques de qualité des projets routiers.",
                objectives: "Le système permet aux utilisateurs de sélectionner une route, de récupérer les données des entrepreneurs et de calculer un ratio qualité-prix en utilisant des formules stockées. Il automatise l'évaluation et le classement en fonction des indicateurs de performance tels que la vitesse, l'efficacité des employés et l'expérience.",
                achievements: [
                    "Classement automatisé des entrepreneurs basé sur le ratio qualité-prix",
                    "Intégration de l'évaluation dynamique des formules SQL pour la qualité routière",
                    "Démonstration de l'intégration Ruby–PostgreSQL dans une application web légère"
                ]
            }
        }
    }
]
