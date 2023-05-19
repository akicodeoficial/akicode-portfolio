export interface TechsNodeInterface {
  name: string;
  link: string;
  use: string;
  domain: string;
  description: string;
}

export const TechsNode: TechsNodeInterface[] = [
  {
    name: "Express.js",
    link: "https://expressjs.com/pt-br/",
    use: "Frequente Com Nestjs",
    domain: "Intermediário",
    description: "Framework para criar servidor http",
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    use: "Indispensável",
    domain: "Intermediário",
    description: "Linguagem de programação",
  },
  {
    name: "Husky.js",
    link: "https://typicode.github.io/husky/#/",
    use: "Em Projetos Grandes",
    domain: "Intermediário",
    description: "Ferramenta para automatizar tarefas com git",
  },
  {
    name: "Zode.js",
    link: "https://zod.dev/",
    use: "Bem Pouco",
    domain: "Estudando",
    description: "Validação de dados",
  },
  {
    name: "Commitlint",
    link: "https://commitlint.js.org/#/",
    use: "Em Projetos Grandes ou Empresarial",
    domain: "Intermediário",
    description: "Ferramenta para padronizar commits",
  },
];
