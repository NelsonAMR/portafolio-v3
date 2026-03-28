export interface Project {
  id: number;
  demo: string;
  repo: string;
  image: string;
  name: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    demo: "https://six-circles.netlify.app/",
    repo: "https://github.com/orgs/six-circles/repositories",
    image: "/assets/projects_min/sixcircles.webp",
    name: "Carrito Site",
    description:
      "Ecommerce Fullstack desarrollado en equipo siguiendo metodologias agiles.",
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
    name: "View Code",
    description: "Pequeño pero eficaz editor online en tiempo real",
    technologies: ["TypeScript", "CSS", "HTML"],
  },
  {
    id: 3,
    demo: "https://my-ewallet.netlify.app/",
    repo: "https://github.com/NelsonAMR/Nucleus",
    image: "/assets/projects_min/nucleus.webp",
    name: "Nucleus E-Wallet",
    description:
      "Landing page desarrollada con fines didacticos, haciendo uso de Javascript y SASS.",
    technologies: ["HTML", "SASS"],
  },
  {
    id: 4,
    demo: "https://react-theater.netlify.app/",
    repo: "https://github.com/NelsonAMR/react-movies",
    image: "/assets/projects_min/movies.webp",
    name: "React Theater",
    description: "SPA con distintas vistas, desarrollada con react-router",
    technologies: ["CSS", "React"],
  },
  {
    id: 5,
    demo: "https://qrgenerationx.netlify.app/",
    repo: "https://github.com/NelsonAMR/QR-Generator",
    image: "/assets/projects_min/qr-generator.webp",
    name: "QR Generator",
    description:
      "Generador de QR, desarrollado con typescript y tecnologias vanilla de ultima generacion.",
    technologies: ["HTML", "CSS", "TypeScript"],
  },
  {
    id: 6,
    demo: "https://memo-rama.netlify.app/",
    repo: "https://github.com/NelsonAMR/Memorama",
    image: "/assets/projects_min/memorama.webp",
    name: "Memorama",
    description:
      "Version web desarrollada en javascript del famoso juego del memorama.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
