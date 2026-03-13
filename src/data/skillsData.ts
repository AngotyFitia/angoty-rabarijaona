// Définition des types
export type TechSkill = {
    name: string;        // Nom de la technologie
    percentage: number;  // Niveau de maîtrise en %
    icon: string;               // Chemin vers le logo ou icône
  };
  
  export type HardSkillCategory = {
    category: "Backend Development" | "Frontend Development" | "Databases" | "DevOps" | "AI" | "Mobile Development" | "Tools & Platforms" | "Mobile";
    skills: TechSkill[];
  };
  
  export type SoftSkill = {
    name: string;        // Nom de la compétence
    description: string; // Brève description
    icon: string;        // Icône (classe ou chemin)
  };
  
  export type LanguageSkill = {
    name: string;        // Nom de la langue
    level: string;       // Niveau (Fluent, Intermediate, Native…)
    percentage?: number; // Optionnel : % de maîtrise
    icon?: string       // Optionnel : chemin vers drapeau ou icône
  };
  
  // Données Hard Skills
  export const hardSkills: HardSkillCategory[] = [
    {
      category: "Backend Development",
      skills: [
        { name: "Java", percentage: 80, icon: "devicon-java-plain colored" },
        { name: "C#", percentage: 80, icon: "devicon-csharp-plain colored" },
        { name: "Spring Boot", percentage: 75, icon: "devicon-spring-plain colored" },
        { name: ".NET", percentage: 75, icon: "devicon-dotnetcore-plain colored" },
        { name: "Node.js", percentage: 75, icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", percentage: 70, icon: "devicon-express-original" },
        { name: "FastAPI", percentage: 70, icon: "devicon-fastapi-plain colored" },
        { name: "Python", percentage: 70, icon: "devicon-python-plain colored" },
        { name: "Django", percentage: 65, icon: "devicon-django-plain colored" },
        { name: "PHP", percentage: 50, icon: "devicon-php-plain colored" },
        { name: "CodeIgniter", percentage: 50, icon: "devicon-codeigniter-plain colored" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React", percentage: 85, icon: "devicon-react-original colored" },
        { name: "HTML/CSS", percentage: 85, icon: "devicon-html5-plain colored" },
        { name: "JavaScript", percentage: 80, icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", percentage: 75, icon: "devicon-typescript-plain colored" },
        { name: "Angular", percentage: 75, icon: "devicon-angularjs-plain colored" },
        { name: "TailwindCSS", percentage: 70, icon: "devicon-tailwindcss-plain colored" },
        { name: "WinForms", percentage: 50, icon: "devicon-dotnetcore-plain colored" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", percentage: 80, icon: "devicon-postgresql-plain colored" },
        { name: "SQLServer", percentage: 80, icon: "devicon-microsoftsqlserver-plain colored" },
        { name: "MySQL", percentage: 70, icon: "devicon-mysql-plain colored" },
        { name: "Oracle", percentage: 70, icon: "devicon-oracle-original colored" },
        { name: "MongoDB", percentage: 70, icon: "devicon-mongodb-plain colored" },
        { name: "Supabase", percentage: 50, icon: "devicon-supabase-plain colored" },
      ],
    },
    {
      category: "DevOps",
      skills: [
        { name: "GitHub", percentage: 70, icon: "devicon-github-original" },
        { name: "Git", percentage: 65, icon: "devicon-git-plain colored" },
        { name: "Docker", percentage: 50, icon: "devicon-docker-plain colored" },
      ],
    },
    {
      category: "AI",
      skills: [
        { name: "Machine Learning", percentage: 85, icon: "devicon-tensorflow-original colored" },
        { name: "Data Analysis", percentage: 80, icon: "fas fa-chart-line" },
        { name: "Scikit-learn", percentage: 80, icon: "devicon-scikitlearn-plain colored" },
        { name: "R Programming", percentage: 80, icon: "devicon-r-plain colored" },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "VS Code", percentage: 80, icon: "devicon-vscode-plain colored" },
        { name: "Postman", percentage: 80, icon: "devicon-postman-plain colored" },
        { name: "Microsoft Word", percentage: 80, icon: "fas fa-file-word text-blue-600" },
        { name: "Microsoft Excel", percentage: 80, icon: "fas fa-file-excel text-green-500" },
        { name: "Adobe XD", percentage: 60, icon: "devicon-xd-plain colored" },
        { name: "Figma", percentage: 40, icon: "devicon-figma-plain colored" },
      ],
    },
    {
      category: "Mobile",
      skills: [
        { name: "Ionic", percentage: 70, icon: "devicon-ionic-original colored" },
        { name: "React Native", percentage: 65, icon: "devicon-react-original colored" },
      ],
    },
  ];
  
  
  // Données Soft Skills
  export const softSkills: SoftSkill[] = [
    { 
      name: "Problem Solving", 
      description: "Ability to analyze problems and design effective solutions.", 
      icon: "fas fa-lightbulb" 
    },
    { 
      name: "Teamwork", 
      description: "Collaborating efficiently within diverse teams.", 
      icon: "fas fa-users" 
    },
    { 
      name: "Communication", 
      description: "Clear and structured communication, both written and verbal.", 
      icon: "fas fa-comments" 
    },
    { 
      name: "Adaptability", 
      description: "Quickly learning and adjusting to new tools and environments.", 
      icon: "fas fa-sync-alt" 
    },
  ];
  
  export const languages: LanguageSkill[] = [
    { name: "Malagasy", level: "Native (Mother tongue)", percentage: 100, icon: "MG" },
    { name: "American English", level: "Fluent (Professional use)", percentage: 90, icon: "US" },
    { name: "French", level: "Intermediate (Working proficiency)", percentage: 70, icon: "FR" },
  ];

  export const otherLanguages: TechSkill[] = [
      { name: "C", percentage: 75, icon: "devicon-c-plain colored" },
    { name: "Perl", percentage: 60, icon: "devicon-perl-plain colored" },
    { name: "Ruby", percentage: 75, icon: "devicon-ruby-plain colored" },
    { name: "Laravel", percentage: 75, icon: "devicon-laravel-plain colored" },
    { name: "Kotlin", percentage: 65, icon: "devicon-kotlin-plain colored" },
  ];
  
  
  