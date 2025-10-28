export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Web Application Development",
    shortDescription: "Custom web applications built with modern frameworks and best practices",
    fullDescription: "I specialize in building scalable, performant web applications using React, TypeScript, and Node.js. From concept to deployment, I handle the entire development lifecycle with a focus on clean architecture, user experience, and maintainable code.",
    features: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "Server-Side Rendering (SSR)",
      "Real-time features with WebSockets",
      "RESTful and GraphQL APIs",
      "Responsive and accessible design"
    ],
    icon: "Code"
  },
  {
    id: "2",
    title: "API Design & Development",
    shortDescription: "RESTful and GraphQL APIs designed for scalability and performance",
    fullDescription: "Expert in designing and implementing robust backend systems and APIs. I create scalable microservices architectures with proper authentication, rate limiting, caching strategies, and comprehensive documentation.",
    features: [
      "RESTful API design and implementation",
      "GraphQL schema design and resolvers",
      "Microservices architecture",
      "API documentation with OpenAPI/Swagger",
      "Authentication & authorization (JWT, OAuth)",
      "Database optimization and query performance"
    ],
    icon: "Server"
  },
  {
    id: "3",
    title: "UI/UX Implementation",
    shortDescription: "Pixel-perfect implementation of designs with smooth animations",
    fullDescription: "Transform designs into beautiful, interactive user interfaces. I work closely with design systems, implement smooth animations, ensure accessibility standards, and create responsive layouts that work flawlessly across all devices.",
    features: [
      "Design system implementation",
      "Component library development",
      "CSS-in-JS and TailwindCSS expertise",
      "Animation and micro-interactions",
      "Cross-browser compatibility",
      "WCAG accessibility compliance"
    ],
    icon: "Palette"
  },
  {
    id: "4",
    title: "Performance Optimization",
    shortDescription: "Speed up your application with targeted performance improvements",
    fullDescription: "Analyze and optimize application performance from database queries to frontend rendering. I identify bottlenecks, implement caching strategies, optimize bundle sizes, and ensure your application runs smoothly at scale.",
    features: [
      "Performance auditing and profiling",
      "Bundle size optimization",
      "Database query optimization",
      "Caching strategies (Redis, CDN)",
      "Code splitting and lazy loading",
      "Core Web Vitals optimization"
    ],
    icon: "Zap"
  },
  {
    id: "5",
    title: "DevOps & Deployment",
    shortDescription: "CI/CD pipelines and cloud infrastructure setup",
    fullDescription: "Set up robust deployment pipelines and cloud infrastructure. I handle containerization, orchestration, monitoring, and automated testing to ensure reliable, scalable deployments with minimal downtime.",
    features: [
      "Docker containerization",
      "Kubernetes orchestration",
      "CI/CD with GitHub Actions, GitLab CI",
      "AWS, GCP, Azure deployment",
      "Monitoring and logging setup",
      "Infrastructure as Code (Terraform)"
    ],
    icon: "CloudCog"
  },
  {
    id: "6",
    title: "Graphics Design",
    shortDescription: "Creative visual designs for brands, websites, and digital products",
    fullDescription:
      "I create visually appealing designs that enhance digital experiences and brand identity. From logos and posters to UI mockups and social media content, I combine creativity with purpose to deliver professional visuals that stand out.",
    features: [
      "Logo and brand identity design",
      "UI mockups and wireframes",
      "Social media and marketing graphics",
      "Poster and banner design",
      "Color theory and typography application",
      "Consistent visual storytelling",
    ],
    icon: "Brush",
  },
];
