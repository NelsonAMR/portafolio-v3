import type { Locale } from "../i18n/ui";

export interface Project {
  id: number;
  demo: string;
  repo: string;
  image: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    demo: "https://six-circles.netlify.app/",
    repo: "https://github.com/orgs/six-circles/repositories",
    image: "/assets/projects_min/sixcircles.webp",
    name: {
      es: "Carrito Site",
      en: "Cart Site",
    },
    description: {
      es: "Ecommerce fullstack desarrollado en equipo siguiendo metodologias agiles.",
      en: "Fullstack ecommerce built in a team, following agile methodologies.",
    },
    technologies: [
      "React",
      "Redux",
      "SASS",
      "TypeScript",
      "Express",
      "MongoDB",
    ],
  },
  {
    id: 2,
    demo: "https://viewcode.netlify.app/",
    repo: "https://github.com/NelsonAMR/viewcode",
    image: "/assets/projects_min/viewcode.webp",
    name: {
      es: "View Code",
      en: "View Code",
    },
    description: {
      es: "Pequeno pero eficaz editor online en tiempo real.",
      en: "Small but effective real-time online editor.",
    },
    technologies: ["TypeScript", "CSS", "HTML"],
  },
  {
    id: 3,
    demo: "https://my-ewallet.netlify.app/",
    repo: "https://github.com/NelsonAMR/Nucleus",
    image: "/assets/projects_min/nucleus.webp",
    name: {
      es: "Nucleus E-Wallet",
      en: "Nucleus E-Wallet",
    },
    description: {
      es: "Landing page desarrollada con fines didacticos, haciendo uso de JavaScript y SASS.",
      en: "Landing page developed for educational purposes using JavaScript and SASS.",
    },
    technologies: ["HTML", "SASS"],
  },
  {
    id: 4,
    demo: "https://react-theater.netlify.app/",
    repo: "https://github.com/NelsonAMR/react-movies",
    image: "/assets/projects_min/movies.webp",
    name: {
      es: "React Theater",
      en: "React Theater",
    },
    description: {
      es: "SPA con distintas vistas, desarrollada con react-router.",
      en: "SPA with multiple views, built with react-router.",
    },
    technologies: ["CSS", "React"],
  },
  {
    id: 5,
    demo: "https://qrgenerationx.netlify.app/",
    repo: "https://github.com/NelsonAMR/QR-Generator",
    image: "/assets/projects_min/qr-generator.webp",
    name: {
      es: "QR Generator",
      en: "QR Generator",
    },
    description: {
      es: "Generador de QR, desarrollado con TypeScript y tecnologias vanilla de ultima generacion.",
      en: "QR generator built with TypeScript and modern vanilla web technologies.",
    },
    technologies: ["HTML", "CSS", "TypeScript"],
  },
  {
    id: 6,
    demo: "https://memo-rama.netlify.app/",
    repo: "https://github.com/NelsonAMR/Memorama",
    image: "/assets/projects_min/memorama.webp",
    name: {
      es: "Memorama",
      en: "Memory Game",
    },
    description: {
      es: "Version web desarrollada en JavaScript del famoso juego del memorama.",
      en: "Web version of the classic memory matching game developed in JavaScript.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
