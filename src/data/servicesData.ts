// src/data/servicesData.ts
export type Service = {
    title: string;
    description: string;
    icon: string;
  };
  
  export const services: Service[] = [
    { title: "Web Development", description: "Modern, responsive web apps.", icon: "fas fa-code" },
    { title: "Mobile Development", description: "Cross‑platform mobile apps.", icon: "fas fa-mobile-alt" },
    { title: "Data Insight", description: "Dashboards & predictive analytics.", icon: "fas fa-chart-line" },
    { title: "Lead Developer", description: "Technical leadership & workflow clarity.", icon: "fas fa-users-cog" },
    { title: "DevOps", description: "CI/CD pipelines, cloud deployment.", icon: "fas fa-server" },
  ];
  