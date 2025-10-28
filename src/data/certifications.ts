export interface Certification {
  id: string;
  title: string;
  institution: string;
  date: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    title: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services (AWS)",
    date: "Issued August 2024",
    link: "https://www.credly.com/badges/623a498f-b804-4f40-b5f2-500bfed5fb9f/public_url",
  },
  {
    id: "2",
    title: "AWS re/Start Program – Cloud Computing",
    institution: "Emobilis Institute of Technology & AWS Ajira",
    date: "Graduated July 2024",
    link: "https://www.credly.com/badges/c221ed83-75bb-4af0-9047-520052b3ec49/linked_in_profile",
  },
];
