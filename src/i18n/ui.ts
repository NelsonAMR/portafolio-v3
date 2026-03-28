export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

const ui = {
  es: {
    meta: {
      title: "Nelson Dev",
      description:
        "Portafolio web de Nelson Macias, desarrollador de software con mas de dos anos de experiencia.",
      keywords:
        "Portafolio, Nelson Macias, Desarrollador de Software, Frontend, Backend, Full Stack, Web, JavaScript, React, NextJS, VueJS, Astro, HTML, CSS, Tailwind, Bootstrap, NodeJS, ExpressJS, NestJS, Java, Springboot, Espanol, Ingles, Mexico, English, Spanish",
      ogTitle: "Portafolio web de Nelson Macias",
      ogDescription:
        "Portafolio web de Nelson Macias, desarrollador de software con mas de dos anos de experiencia.",
    },
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contactar",
      buildTogether: "Construyamos algo juntos",
      connect: "Conectemos",
    },
    home: {
      greeting: "Hola, soy",
      role: "Soy Fullstack developer",
      subtitle: "Construyamos algo juntos",
      resumeCta: "Descargar CV",
    },
    projects: {
      title: "Proyectos",
      demo: "Demo",
      repo: "Repositorio",
    },
    skills: {
      title: "Tecnologias",
      levels: ["Basico", "Intermedio", "Avanzado"],
    },
    contact: {
      title: "Contactame",
      name: "Nombre",
      phone: "Telefono (Opcional)",
      email: "Email",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar",
      successTitle: "Correo enviado!",
      errorTitle: "Upss...",
      errorText: "No se pudo enviar el correo",
    },
    footer: {
      role: "Frontend Developer",
      quote: '"Si puedes pensarlo, puedes programarlo"',
    },
  },
  en: {
    meta: {
      title: "Nelson Dev",
      description:
        "Nelson Macias web portfolio, software developer with more than two years of experience.",
      keywords:
        "Portfolio, Nelson Macias, Software Developer, Frontend, Backend, Full Stack, Web, JavaScript, React, NextJS, VueJS, Astro, HTML, CSS, Tailwind, Bootstrap, NodeJS, ExpressJS, NestJS, Java, Springboot, English, Spanish, Mexico",
      ogTitle: "Nelson Macias web portfolio",
      ogDescription:
        "Nelson Macias web portfolio, software developer with more than two years of experience.",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      buildTogether: "Let's build something together",
      connect: "Let's connect",
    },
    home: {
      greeting: "Hi, I'm",
      role: "I'm a Fullstack developer",
      subtitle: "Let's build something together",
      resumeCta: "Download Resume",
    },
    projects: {
      title: "Projects",
      demo: "Demo",
      repo: "Repository",
    },
    skills: {
      title: "Technologies",
      levels: ["Beginner", "Intermediate", "Advanced"],
    },
    contact: {
      title: "Contact me",
      name: "Name",
      phone: "Phone (Optional)",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send",
      successTitle: "Email sent!",
      errorTitle: "Oops...",
      errorText: "The email could not be sent",
    },
    footer: {
      role: "Frontend Developer",
      quote: '"If you can think it, you can code it"',
    },
  },
} as const;

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith("/en")) return "en";
  return "es";
}

export function getI18n(locale: Locale) {
  return ui[locale];
}
