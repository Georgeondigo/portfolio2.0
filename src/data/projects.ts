export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  images?: string[]; // Array of additional images for the gallery
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  features?: string[]; // Optional key features array
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Tiffany Sparkles Website",
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
    images: [
      "/Tiffany-Sparkles.png",
    ],
    githubUrl: "https://github.com/GeorgeOndigo/tiffany-sparkles",
    liveUrl: "https://tiffany-sparkles.com/",
    category: "Web Application",
    features: [
      "Complete CMS with admin dashboard",
      "Google Maps integration for store locations",
      "Automatic WebP image optimization",
      "Dark mode support",
      "SEO-optimized pages",
      "Responsive design for all devices"
    ]
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
    images: [
      "/soodingoadvocates1.png",
    ],
    githubUrl: "https://github.com/GeorgeOndigo/advocate-websites",
    liveUrl: "https://geowebsolutions.co.ke",
    category: "Web Application",
    features: [
      "Online booking system integration",
      "Service listing and management",
      "SEO-optimized content structure",
      "Responsive design for legal professionals",
      "Custom WordPress plugins"
    ]
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
    images: [
      "/tsdesign.png",
    ],
    liveUrl: "https://tiffany-sparkles.com/",
    category: "Graphic Design",
    features: [
      "Complete design system creation",
      "Dashboard and admin panel designs",
      "Mobile-first responsive layouts",
      "Interactive component prototypes",
      "User flow documentation"
    ]
  },
  {
    id: "11",
    title: "GeoWeb Social Media Posts",
    shortDescription:
      "Branded social media content and promotional designs for GeoWeb Solutions.",
    fullDescription:
      "Created engaging social media visuals for GeoWeb Solutions, focusing on brand awareness and digital marketing campaigns. Designed post templates, promotional banners, and carousel ads optimized for platforms like Instagram, LinkedIn, and X (Twitter) using Canva and Adobe Photoshop. Ensured visual consistency with the GeoWeb brand identity and web platform aesthetics.",
    technologies: ["Canva", "Adobe Photoshop", "Adobe Illustrator"],
    image: "/1.png",
    images: [
      "/1.png",
      "/2.png",
      "/3.png",
      "/4.png",
      "/5.png",
      "/6.png",
    ],
    liveUrl: "https://geowebsolutions.co.ke",
    category: "Graphic Design",
    features: [
      "Platform-optimized social media templates",
      "Brand-consistent visual identity",
      "Engaging carousel and story designs",
      "Campaign-specific promotional graphics",
      "Multi-format content creation"
    ]
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
    images: [
      "/propertymanagement.png",
      "/PropertyHub-Admin-Panel (1).png",
      "/PropertyHub-Admin-Panel (2).png",
      "/PropertyHub-Admin-Panel (3).png",
    ],
    githubUrl: "https://github.com/Georgeondigo/Propertymanagementsysyem.git",
    liveUrl: "https://propertyhubke.vercel.app",
    category: "Web Application",
    features: [
      "Role-based access control system",
      "Automated maintenance ticket tracking",
      "Lease agreement management",
      "Tenant communication portal",
      "Real-time notifications and reminders"
    ]
  },
  {
    id: "9",
    title: "Watama Law Advocates Website",
    shortDescription:
      "Designed responsive websites for legal firms with online booking functionality",
    fullDescription:
      "Founded and led the development of a platform delivering modern, responsive websites for multiple legal practices for WATAMA LAW ADVOCATES. Implementation included service listings, contact forms, online booking, and SEO-optimized design built on WordPress, TailwindCSS and custom plugins.",
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
    images: [
      "/WATAMALAW1.png",
    ],
    githubUrl: "https://github.com/GeorgeOndigo/advocate-websites",
    liveUrl: "https://geowebsolutions.co.ke",
    category: "Web Application",
    features: [
      "Legal service showcase platform",
      "Online consultation booking system",
      "Attorney profile management",
      "Case study presentations",
      "Legal resource library"
    ]
  },
  {
    id: "3",
    title: "Tiffany Sparkles Posters",
    shortDescription:
      "Marketing and promotional posters for Tiffany Sparkles products and events",
    fullDescription:
      "Created visually appealing marketing posters, social media graphics, and promotional banners for Tiffany Sparkles. Focused on brand consistency, modern design trends, and engaging visuals using Canva and Adobe Illustrator.",
    technologies: ["Canva", "Adobe Photoshop"],
    image: "/tiffposter.png",
    images: [
      "/tiffposter.png",
    ],
    liveUrl: "https://www.behance.net/your-link",
    category: "Graphic Design",
    features: [
      "Brand-consistent marketing materials",
      "Event promotion posters",
      "Social media optimized graphics",
      "Print-ready design files",
      "Multi-format promotional assets"
    ]
  },
  {
    id: "7",
    title: "Mpesa Daraja Next.js Integration",
    shortDescription:
      "Next.js integration with Mpesa Daraja API for payments and transactions",
    fullDescription:
      "Implemented a secure payment gateway using the Mpesa Daraja API in a Next.js application. Features include payment initiation, transaction status checks, and callback handling. Ensured secure API key management and proper error handling.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Mpesa Daraja API", "Tailwind CSS"],
    image: "/mpesa-stellar-pay.png",
    images: [
      "/mpesa-stellar-pay.png",
    ],
    githubUrl: "https://github.com/GeorgeOndigo/mpesa-daraja-nextjs",
    category: "Web Application",
    features: [
      "Secure Mpesa payment integration",
      "Real-time transaction status updates",
      "Payment callback handling",
      "Admin transaction dashboard",
      "Mobile-optimized payment flows"
    ]
  },
  {
    id: "10",
    title: "Tiffany Sparkles Cloth Hooks Design",
    shortDescription:
      "Custom-designed branded cloth hooks for Tiffany Sparkles product line.",
    fullDescription:
      "Designed premium Tiffany Sparkles cloth hooks to align with the brand's elegant aesthetic. Focused on material selection, ergonomic usability, and visual branding consistency. Delivered both concept renders and printable design assets using Figma and Adobe Illustrator.",
    technologies: ["Adobe Illustrator"],
    image: "/ts-HOOK.png",
    images: [
      "/ts-HOOK.png",
    ],
    liveUrl: "https://tiffany-sparkles.com/",
    category: "Product Design",
    features: [
      "Ergonomic product design",
      "Brand identity integration",
      "Material and finish specifications",
      "Technical production drawings",
      "Packaging design concepts"
    ]
  },
  {
  id: "12",
  title: "Bruclide Construction Business Cards",
  shortDescription:
    "Professional business card design for Bruclide Construction branding.",
  fullDescription:
    "Designed premium business cards for Bruclide Construction, reflecting a modern and professional look consistent with the company’s brand identity. Focused on layout balance, typography, and color harmony. Delivered print-ready and digital formats for corporate use and marketing purposes.",
  technologies: ["Canva"],
  image: "/bruclide-card-front.png",
  images: [
    "/bruclide-card-front.png",
    "/bruclide-card-back.png"
  ],
  liveUrl: "https://www.behance.net/your-link",
  category: "Graphic Design",
  features: [
    "Double-sided modern layout",
    "Consistent brand color palette",
    "High-resolution print-ready export",
    "Custom typography for professional appeal"
  ]
},
{
    id: "12",
    title: "GeoWeb Social Media Posts",
    shortDescription:
      "Branded social media content and promotional designs for GeoWeb Solutions.",
    fullDescription:
      "Created engaging social media visuals for GeoWeb Solutions, focusing on brand awareness and digital marketing campaigns. Designed post templates, promotional banners, and carousel ads optimized for platforms like Instagram, LinkedIn, and X (Twitter) using Canva and Adobe Photoshop. Ensured visual consistency with the GeoWeb brand identity and web platform aesthetics.",
    technologies: ["Canva" ],
    image: "/seo2 (1).png",
    images: [
      "/seo2 (1).png",
      "/seo2 (2).png",
      "/seo2 (3).png",
      "/seo2 (4).png",
      "/seo2 (5).png",
    ],
    liveUrl: "https://geowebsolutions.co.ke",
    category: "Graphic Design",
    features: [
      "Platform-optimized social media templates",
      "Brand-consistent visual identity",
      "Engaging carousel and story designs",
      "Campaign-specific promotional graphics",
      "Multi-format content creation"
    ]
  },
  {
  id: "13",
  title: "GeoWeb Solutions Website",
  shortDescription:
    "Corporate website for GeoWeb Solutions showcasing services, portfolio, and digital presence.",
  fullDescription:
    "Developed the official website for GeoWeb Solutions, focusing on a clean, professional design with strong branding and optimized performance. Integrated service listings, contact forms, portfolio showcases, and a content-driven layout to enhance client engagement. Ensured full responsiveness, SEO optimization, and modern UX practices.",
  technologies: [
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "TypeScript",
    "Vercel",
    "Framer Motion",
  ],
  image: "/GeoWeb-Solutions.png",
  images: [
    "/GeoWeb-Solutions.png",
  ],
  githubUrl: "https://github.com/GeorgeOndigo/geowebsolutions",
  liveUrl: "https://geowebsolutions.co.ke",
  category: "Web Application",
  features: [
    "Responsive and modern corporate design",
    "Portfolio and service showcase sections",
    "SEO-optimized content architecture",
    "Animated transitions using Framer Motion",
    "Contact form with Formspree integration",
    "Performance-optimized for fast loading"
  ]
},


];

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];