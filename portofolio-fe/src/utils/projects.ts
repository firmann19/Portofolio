// src/utils/projects.ts

export interface ProjectTag {
  label: string;
  color: string;
  textColor: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  bg: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Website Redesign",
    description:
      "Complete redesign of corporate website with improved UX and modern aesthetics.",
    image: "https://placehold.co/600x400/transparent/FFF",
    tags: [
      { label: "Web Design", color: "bg-blue-100", textColor: "text-blue-800" },
      { label: "UX", color: "bg-green-100", textColor: "text-green-800" },
    ],
    category: "Website",
    bg: "bg-blue-500",
  },
  {
    id: 2,
    title: "Mobile Application",
    description:
      "Cross-platform mobile app for health tracking with real-time analytics.",
    image: "https://placehold.co/600x400/transparent/FFF",
    tags: [
      {
        label: "React Native",
        color: "bg-purple-100",
        textColor: "text-purple-800",
      },
      {
        label: "Health Tech",
        color: "bg-yellow-100",
        textColor: "text-yellow-800",
      },
    ],
    category: "Application",
    bg: "bg-green-500",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Custom e-commerce solution with integrated payment processing and inventory management.",
    image: "https://placehold.co/600x400/transparent/FFF",
    tags: [
      { label: "E-commerce", color: "bg-red-100", textColor: "text-red-800" },
      {
        label: "Payment Gateway",
        color: "bg-indigo-100",
        textColor: "text-indigo-800",
      },
    ],
    category: "Website",
    bg: "bg-purple-500",
  },
];
