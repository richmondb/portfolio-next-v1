import { projectType } from "@/app/types";

export const ProjectList: projectType[] = [
  {
    image: '/images/portfolio_web.png',
    image_alt: 'portfolio website',
    project_origin: 'Personal Project',
    title: 'Portfolio Website',
    github: 'https://github.com/richmondb/portfolio-next-v1',
    description: 'My portfolio website, created using NextJS and Framer motion.',
    languages: ['Next.js', 'Framer Motion', 'Typescript', 'Tailwind CSS'],
  },
  {
    image: '/images/capstone_web.png',
    image_alt: 'capstone website',
    project_origin: 'College Project',
    title: 'Capstone E-commerce',
    github: 'https://github.com/richmondb/prtech-e-commerce-capstone',
    description: 'College capstone Website utilizing machine learning and laravel framework.',
    languages: ['Laravel (PHP)', 'Python (Api, Machine Learning)'],
  },
  {
    image: '/images/investofarm_web.jpeg',
    image_alt: 'InvestoFarm',
    project_origin: 'Personal Project',
    title: 'Cropital Clone',
    github: 'https://github.com/richmondb/techno-project-2023',
    description: 'A clone of the Cropital website, with authentication and user dashboard.',
    languages: ['Next.js', 'Prisma', 'Supabase'],
  },
  {
    image: '/images/protectionicon_web.gif',
    image_alt: 'security agency website',
    project_origin: 'Client Project',
    title: 'Security Agency',
    github: 'https://github.com/richmondb/SecurityAgencyCapstone',
    description: 'Django website for a security agency, with authentication and user dashboard, report generation and more.',
    languages: ['Django', 'Html', 'Css', 'Js'],
  },
  {
    image: '/images/snip-url_web.png',
    image_alt: 'snip url website',
    project_origin: 'Side Project',
    title: 'SnipUrl',
    github: 'https://github.com/richmondb/snip-url.git',
    description: 'A simple Link Shortener App with authentication and links dashboard',
    languages: ['NextJs', 'Tailwind', 'Sqlite', 'HeadlessUI'],
  }
];