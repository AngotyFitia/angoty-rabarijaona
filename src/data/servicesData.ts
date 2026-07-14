export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  { 
    title: "Web Development", 
    description: "Building modern, responsive web applications with clean architecture and scalable design.", 
    icon: "fas fa-code" 
  },
  { 
    title: "Mobile Development", 
    description: "Developing cross‑platform mobile apps that deliver seamless user experiences on Android and iOS.", 
    icon: "fas fa-mobile-alt" 
  },
  { 
    title: "Data Insight", 
    description: "Designing dashboards and predictive analytics solutions to transform data into actionable decisions.", 
    icon: "fas fa-chart-line" 
  },
  { 
    title: "Technical Leadership", 
    description: "Providing architectural guidance, establishing conventions, and ensuring workflow clarity for teams.", 
    icon: "fas fa-users-cog" 
  },
  { 
    title: "DevOps & Cloud", 
    description: "Implementing CI/CD pipelines, automating deployments, and optimizing cloud infrastructure.", 
    icon: "fas fa-server" 
  },
];
