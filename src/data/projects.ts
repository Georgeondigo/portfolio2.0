export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Tiffany Sparkles Website ",
    shortDescription:
      "Full-featured CMS and project management platform for Tiffany Sparkles brand",
    fullDescription:
      "Built a complete content and project management system enabling admin management of marketing content, featured products, store locations, FAQs, testimonials, and SEO configurations. Integrated Google Maps for locations, automatic WebP image conversion with compression, dark mode support, and deployment on Vercel.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "TypeScript",
      "Vercel",
      "Google Maps API",
      "ShadCN UI",
      "Framer Motion",
    ],
    image: "/Tiffany-Sparkles.png",
    githubUrl: "https://github.com/GeorgeOndigo/tiffany-sparkles",
    liveUrl: "https://tiffany-sparkles.com/",
    category: "Web Application",
  },
  {
    id: "2",
    title: "Advocate Websites Platform",
    shortDescription:
      "Designed responsive websites for legal firms with online booking functionality",
    fullDescription:
      "Founded and led the development of a platform delivering modern, responsive websites for multiple legal practices. Implementation included service listings, contact forms, online booking, and SEO-optimized design built on WordPress, TailwindCSS and custom plugins.",
    technologies: [
      "WordPress",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "AWS",
      "Canva",
      "Adobe XD",
    ],
    image: "/soodingoadvocates1.png",
    githubUrl: "https://github.com/GeorgeOndigo/advocate-websites",
    liveUrl: "https://geowebsolutions.co.ke",
    category: "Web Application",
  },
  {
    id: "4",
    title: "Tiffany Sparkles UI Designs",
    shortDescription:
      "UI/UX design mockups for Tiffany Sparkles dashboard and web components",
    fullDescription:
      "Designed the UI/UX for Tiffany Sparkles including dashboard layouts, product listing pages, forms, and interactive components. Focused on usability, responsive layouts, and modern visual design principles using Figma and Adobe XD.",
    technologies: ["Figma", "Adobe XD", "Canva", "Tailwind CSS"],
    image: "/tsdesign.png",
    liveUrl: "https://tiffany-sparkles.com/",
    category: "Graphic Design",
  },
  
  {
    id: "5",
    title: "Art Gallery Web App",
    shortDescription:
      "Marketplace for artwork buying & selling with auth and admin portal",
    fullDescription:
      "Built a full-stack web application to enable artists to list and sell art, with user authentication, payment integration (Stripe/PayPal), and an admin portal for managing listings, users and transactions. Tech stack: React, Node.js, MongoDB, Express.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "TypeScript"],
    image: "/ArtMarketplace.svg",
    githubUrl: "https://github.com/GeorgeOndigo/art-gallery-webapp",
    liveUrl: "https://artgallery.example.com",
    category: "Web Application",
  },
  {
    id: "6",
    title: "Tenant Management System",
    shortDescription:
      "Lease management & maintenance-ticket tracking system with RBAC",
    fullDescription:
      "Developed a tenant management solution featuring tenant registration, lease tracking, maintenance ticketing with automated reminders, and secure role-based access control. Built using React.js, Node.js backend, PostgreSQL via Supabase, and deployed on AWS.",
    technologies: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "AWS",
      "TypeScript",
    ],
    image: "/propertymanagement.png",
    githubUrl: "https://github.com/Georgeondigo/Propertymanagementsysyem.git",
    liveUrl: "https://propertyhubke.vercel.app",
    category: "Web Application",
  },
  {
    id: "9",
    title: "Lawfirm Websites Platform",
    shortDescription:
      "Designed responsive websites for legal firms with online booking functionality",
    fullDescription:
      "Founded and led the development of a platform delivering modern, responsive websites for multiple legal practices. Implementation included service listings, contact forms, online booking, and SEO-optimized design built on WordPress, TailwindCSS and custom plugins.",
    technologies: [
      "WordPress",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "AWS",
      "Canva",
      "Adobe XD",
    ],
    image: "/WATAMALAW1.png",
    githubUrl: "https://github.com/GeorgeOndigo/advocate-websites",
    liveUrl: "https://geowebsolutions.co.ke",
    category: "Web Application",
  },
  {
    id: "3",
    title: "Tiffany Sparkles Posters",
    shortDescription:
      "Marketing and promotional posters for Tiffany Sparkles products and events",
    fullDescription:
      "Created visually appealing marketing posters, social media graphics, and promotional banners for Tiffany Sparkles. Focused on brand consistency, modern design trends, and engaging visuals using Canva and Adobe Illustrator.",
    technologies: ["Canva", "Adobe Illustrator", "Adobe Photoshop"],
    image: "/tiffposter.png",
    liveUrl: "https://www.behance.net/your-link",
    category: "Graphic Design",
  },
  {
    id: "7",
    title: "Mpesa Daraja Next.js",
    shortDescription:
      "Next.js integration with Mpesa Daraja API for payments and transactions",
    fullDescription:
      "Implemented a secure payment gateway using the Mpesa Daraja API in a Next.js application. Features include payment initiation, transaction status checks, and callback handling. Ensured secure API key management and proper error handling.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Mpesa Daraja API", "Tailwind CSS"],
    image: "/mpesa-stellar-pay.png",
    githubUrl: "https://github.com/GeorgeOndigo/mpesa-daraja-nextjs",
    category: "Web Application",
  },
  {
    id: "8",
    title: "Inventory Management System",
    shortDescription:
      "Web-based inventory management with product tracking and analytics",
    fullDescription:
      "Developed a full-featured inventory management system including product catalog, stock tracking, low stock alerts, and analytics dashboards. Built with React.js, Node.js, and PostgreSQL, featuring responsive UI and role-based access control.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    image: "/inventory.webp",
    githubUrl: "https://github.com/GeorgeOndigo/inventory-management",
    category: "Web Application",
  },
  
];

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
