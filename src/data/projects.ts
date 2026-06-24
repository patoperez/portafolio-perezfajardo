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
  "Power Query",
  "Excel",
  "SQL",
  "Python",
  "Next.js",
  "TypeScript",
  "SAP"
];

export const PROJECTS: Project[] = [
  {
    id: "medflow-pharma",
    title: "MedFlow Pharma",
    description: "Diagnosing a quarter-billion-peso blind spot in a pharma distribution network — end-to-end demand forecasting, segmented service levels, and a quantified business case.",
    tags: ["Supply Chain", "Business Intelligence", "Operations", "Data Analysis", "Python", "SQL"],
    image: "/projects/medflow screenshot.png",
    link: "/MedFlowPharmaSC",
    externalLink: "https://github.com/patoperez/medflow-pharma-supply-chain"
  },
  {
    id: "signal-in-the-noise",
    title: "Signal in the Noise",
    description: "Turning messy, SAP-simulated distribution data into decisions you can defend — data cleaning, exception detection, and fair-share allocation across a 15-DC network.",
    tags: ["Supply Chain", "Business Intelligence", "Power Query", "Excel", "Data Analysis"],
    image: "/projects/apex-screenshot.png",
    link: "/signal-in-the-noise/",
    externalLink: "https://github.com/patoperez/apex-drp-control-tower"
  },
  {
    id: "supply-chain-control-tower",
    title: "Supply Chain Control Tower",
    description: "End-to-end visibility dashboard mapping inventory flow and operational bottlenecks to streamline decision-making.",
    tags: ["Supply Chain", "Power BI", "Python", "Operations", "Business Intelligence"],
    image: "/projects/supply-chain-control-tower.png", // real screenshot of the live Control Tower dashboard
    link: "/supply-chain-control-tower",
    externalLink: "https://github.com/patoperez/supply-chain-analysis"
  }
];
