export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  externalLink?: string;
};

export const AVAILABLE_TAGS = [
  "Supply Chain",
  "Business Intelligence",
  "Operations",
  "Data Analysis",
  "Power BI",
  "Excel",
  "SQL",
  "Python",
  "Next.js",
  "TypeScript",
  "SAP"
];

export const PROJECTS: Project[] = [
  {
    id: "supply-chain-control-tower",
    title: "Supply Chain Control Tower",
    description: "End-to-end visibility dashboard mapping inventory flow and operational bottlenecks to streamline decision-making.",
    tags: ["Supply Chain", "Power BI", "Excel", "Operations", "Business Intelligence"],
    image: "/projects/supply-chain-control-tower.png", // real screenshot of the live Control Tower dashboard
    link: "/projects/supply-chain-control-tower",
    externalLink: "https://github.com"
  }
];
