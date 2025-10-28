export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate?: string;
  summary: string;
  link?: {
    url: string;
    label: string;
  };
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "GeoWeb Solutions",
    position: "Founder & Web Developer",
    duration: "May 2024 – Present",
    startDate: "2024-05",
    summary:
      "Founded GeoWeb Solutions, where I design and build modern, scalable, and user-focused web solutions. I’ve worked with a range of businesses to deliver responsive, high-performance websites that enhance their digital presence and streamline operations.",
    technologies: [
      "WordPress",
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AWS",
      "Canva",
      "Adobe XD",
    ],
    link: {
      url: "https://geowebsolutions.onrender.com/",
      label: "Portfolio Website",
    },
  },
  {
    id: "2",
    company: "Flash Credit Africa",
    position: "Software Engineering Intern",
    duration: "Jan 2024 – Apr 2024",
    startDate: "2024-01",
    endDate: "2024-04",
    summary:
      "Improved customer experience for loan applications on the company website, resolved bugs, and implemented new features. Contributed to enhancing system reliability and performance using C#, .NET, and Azure services.",
    technologies: [
      "C#",
      ".NET",
      "TypeScript",
      "Svelte",
      "Tailwind CSS",
      "Azure App Service",
      "API Management",
    ],
    link: {
      url: "https://www.flashcreditafrica.com",
      label: "Company Website",
    },
  },
  {
    id: "3",
    company: "Oasis Infobyte",
    position: "Web Development & Design Intern",
    duration: "Mar 2024 – Apr 2024",
    startDate: "2024-03",
    endDate: "2024-04",
    summary:
      "Developed and designed web applications. Built an authentication system using the MERN stack and honed front-end design and UI/UX skills.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "CSS"],
    link: {
      url: "https://oasisinfobyte.com",
      label: "Company Website",
    },
  },
];
