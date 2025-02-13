import type { projectType } from "@/app/types";

export const ProjectList: projectType[] = [
  {
    image: "/images/portfolio_web.png",
    image_alt: "portfolio website",
    project_origin: "Personal Project",
    title: "Portfolio Website",
    demo: "https://itsrichmond.netlify.app/",
    github: "https://github.com/richmondb/portfolio-next-v1",
    description:
      "My portfolio website, created using NextJS and Framer motion.",
    languages: ["Next.js", "Framer Motion", "Typescript", "Tailwind CSS"],
  },
  {
    image: "/images/capstone_web.png",
    image_alt: "capstone website",
    project_origin: "College Project",
    title: "Capstone E-commerce",
    demo: undefined,
    github: "https://github.com/richmondb/prtech-e-commerce-capstone",
    description:
      "College capstone Website utilizing machine learning and laravel framework.",
    languages: ["Laravel (PHP)", "Python (Api, Machine Learning)"],
  },
  {
    image: "/images/investofarm_web.jpeg",
    image_alt: "InvestoFarm",
    project_origin: "Personal Project",
    title: "Cropital Clone",
    demo: "https://techno-project-2023.vercel.app/",
    github: "https://github.com/richmondb/techno-project-2023",
    description:
      "A clone of the Cropital website, with authentication and user dashboard.",
    languages: ["Next.js", "Prisma", "Supabase"],
  },
  {
    image: "/images/protectionicon_web.gif",
    image_alt: "security agency website",
    project_origin: "Client Project",
    title: "Security Agency",
    demo: undefined,
    github: "https://github.com/richmondb/SecurityAgencyCapstone",
    description:
      "Django website for a security agency, with authentication and user dashboard, report generation and more.",
    languages: ["Django", "Html", "Css", "Js"],
  },
  {
    image: "/images/snip-url_web.png",
    image_alt: "snip url website",
    project_origin: "Side Project",
    title: "SnipUrl",
    demo: "https://snip-url-wine.vercel.app/",
    github: "https://github.com/richmondb/snip-url.git",
    description:
      " SnipURL is a URL shortening service that allows users to effortlessly shorten their URLs and share them anywhere. It makes link sharing simple, fast, and effective.",
    languages: [
      "NextJs",
      "Tailwind",
      "NeonDB",
      "BetterAuth",
      "HeadlessUI",
      "Sonner",
    ],
  },
  {
    image: "/images/adonisnext.jpg", 
    image_alt: "Fullstack Monorepo App",
    project_origin: "Portfolio Project",
    title: "Fullstack Monorepo",
    demo: "", // No Demo URL found in context
    github: "https://github.com/richmondb/monorepo-adonisjs-nextjs.git", // No GitHub URL found in context
    description: 
      "A modern fullstack monorepo application built with Next.js for the frontend and AdonisJS for the backend API. Features type-safe development, efficient module sharing, and integrated development environment.",
    languages: [
      "Next.js",
      "AdonisJS",
      "Jest/Japa",
      "TailwindCSS",
      "LucidORM",
    ]
  },
];
