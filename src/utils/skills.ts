export interface Skill {
  id: number;
  img: string;
  name: string;
  level: number;
}

export const skills: Skill[] = [
  {
    id: 1,
    img: "vscode-icons:file-type-html",
    name: "HTML",
    level: 2,
  },
  {
    id: 2,
    img: "vscode-icons:file-type-css",
    name: "CSS",
    level: 2,
  },
  {
    id: 3,
    img: "logos:javascript",
    name: "JavaScript",
    level: 2,
  },
  {
    id: 4,
    img: "logos:react",
    name: "React",
    level: 1,
  },
];
