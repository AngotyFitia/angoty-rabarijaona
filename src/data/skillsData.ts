// Définition des types
export type TechSkill = {
    name: string;        // Nom de la technologie
    percentage: number;  // Niveau de maîtrise en %
    image: string;       // Chemin vers le logo ou icône
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
    icon?: string;       // Optionnel : chemin vers drapeau ou icône
  };
  
  // Données Hard Skills
  export const hardSkills: HardSkillCategory[] = [
    {
      category: "Backend Development",
      skills: [
        { name: "Java", percentage: 80, image: "/images/skills/java.png" },
        { name: "Spring Boot", percentage: 75, image: "/images/skills/spring-boot.png" },
        { name: "C#", percentage: 80, image: "/images/skills/c-sharp.png" },
        { name: ".NET", percentage: 75, image: "/images/skills/net-framework.png" },
        { name: "Node.js", percentage: 75, image: "/images/skills/node.js.png" },
        { name: "Express.js", percentage: 75, image: "/images/skills/express-js.png" },
        { name: "Python", percentage: 70, image: "/images/skills/python.png" },
        { name: "Django", percentage: 65, image: "/images/skills/django.png" },
        { name: "FastAPI", percentage: 70, image: "/images/skills/fastapi.png" },
        { name: "PHP", percentage: 50, image: "/images/skills/php.png" },
        { name: "CodeIgniter", percentage: 50, image: "/images/skills/codeigniter.png" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React", percentage: 85, image: "/images/skills/react.png" },
        { name: "TypeScript", percentage: 75, image: "/images/skills/typescript.png" },
        { name: "Angular", percentage: 75, image: "/images/skills/angular.png" },
        { name: "JavaScript", percentage: 80, image: "/images/skills/javascript.png" },
        { name: "HTML/CSS", percentage: 85, image: "/images/skills/html-css.png" },
        { name: "WinForms", percentage: 70, image: "/images/skills/winforms.jfif" },
        { name: "TailwindCSS", percentage: 70, image: "/images/skills/tailwindcss.png" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", percentage: 80, image: "/images/skills/postgresql.png" },
        { name: "SQLServer", percentage: 80, image: "/images/skills/sqlserver.png" },
        { name: "MySQL", percentage: 70, image: "/images/skills/mysql.png" },
        { name: "Oracle", percentage: 70, image: "/images/skills/oracle.jpg" },
        { name: "MongoDB", percentage: 70, image: "/images/skills/mongodb.jfif" },
        { name: "Supabase", percentage: 50, image: "/images/skills/supabase.png" },
      ],
    },
    {
        category: "DevOps",
        skills: [
          { name: "GitHub", percentage: 70, image: "/images/skills/github.png" },
          { name: "Git", percentage: 65, image: "/images/skills/git.png" },
          { name: "Docker", percentage: 50, image: "/images/skills/docker.png" },
        ],
    },
    {
        category: "AI",
        skills: [
          { name: "Machine Learning", percentage: 85, image: "/images/skills/machine-learning.jpg" },
          { name: "Data Analysis", percentage: 80, image: "/" },
          { name: "Scikit-learn", percentage: 80, image: "/images/skills/scikit-learn.png" },
          { name: "R Programming", percentage: 80, image: "/images/skills/r-prog.jpg" },
        ],
    },
    {
        category: "Tools & Platforms",
        skills: [
            { name: "VS Code", percentage: 80, image: "/images/skills/vs-code.jfif" },
            { name: "Microsoft Word", percentage: 80, image: "/images/skills/mi-word.png" },
            { name: "Microsoft Excel", percentage: 80, image: "/images/skills/mi-excel.png" },
            { name: "Adobe XD", percentage: 60, image: "/images/skills/adobe-xd.jpg" },
            { name: "Figma", percentage: 40, image: "/images/skills/figma.png" },
        ],
    },
    {
        category: "Mobile",
        skills: [
            { name: "Ionic", percentage: 70, image: "/images/skills/ionic.jfif" },
            { name: "React Native", percentage: 65, image: "/images/skills/react.png" },
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
  
  // Données Languages
  export const languages: LanguageSkill[] = [
    { 
      name: "English", 
      level: "Fluent (Professional use)", 
      percentage: 90, 
      icon: "/images/skills/american.png" 
    },
    { 
      name: "French", 
      level: "Intermediate (Working proficiency)", 
      percentage: 70, 
      icon: "/images/skills/france.jfif" 
    },
    { 
      name: "Malagasy", 
      level: "Native (Mother tongue)", 
      percentage: 100, 
      icon: "/images/skills/malagasy.png" 
    },
  ];
  