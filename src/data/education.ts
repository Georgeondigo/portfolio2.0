export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  link?: string;
}

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    institution: "Cooperative University of Kenya",
    year: "2024 – Present",
    link: "https://www.cuk.ac.ke",
  },
  {
    id: "2",
    degree: "Diploma in Computer Science",
    institution: "Riara University",
    year: "Graduated July 2024",
    link: "https://www.riarauniversity.ac.ke",
  },
];
