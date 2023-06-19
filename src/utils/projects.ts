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
    demo: "https://my-ewallet.netlify.app/",
    repo: "https://github.com/NelsonAMR/Nucleus",
    image: "/assets/projects/nucleus.PNG",
    name: "Nucleus E-Wallet",
    description:
      "Landing page desarrollada con fines didacticos, haciendo uso de Javascript y SASS.",
    technologies: ["HTML", "SASS"],
  },
  {
    id: 2,
    demo: "https://six-circles.netlify.app/",
    repo: "https://github.com/orgs/six-circles/repositories",
    image: "/assets/projects/sixcircles.PNG",
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
    id: 3,
    demo: "https://react-theater.netlify.app/",
    repo: "https://github.com/NelsonAMR/react-movies",
    image: "/assets/projects/movies.PNG",
    name: "React Theater",
    description: "SPA con distintas vistas, desarrollada con react-router",
    technologies: ["CSS", "React"],
  },
  {
    id: 4,
    demo: "https://mynewcalculator.netlify.app/",
    repo: "https://github.com/NelsonAMR/calculadora-react",
    image: "/assets/projects/calculator.PNG",
    name: "Calculator",
    description: "Pequeña pero eficaz calculadora realizada con React.",
    technologies: ["React", "CSS"],
  },
  {
    id: 5,
    demo: "https://carritosite.netlify.app/",
    repo: "https://github.com/NelsonAMR/carrito",
    image: "/assets/projects/carrito.PNG",
    name: "Carrito Site",
    description:
      "Landing de cursos con carrito, desarrollada para poner en practica mis habilidades con JS.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    demo: "https://memo-rama.netlify.app/",
    repo: "https://github.com/NelsonAMR/Memorama",
    image: "/assets/projects/memorama.PNG",
    name: "Memorama",
    description:
      "Version web desarrollada en javascript del famoso juego del memorama.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
