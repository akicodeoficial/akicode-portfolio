import ProjetoPortfolio from "../assets/projects/projeto-portfolio.png";
import EraseDatabase from "../assets/projects/erasa-database.png";
import SocialProfileLinks from "../assets/projects/social-profile-links.png";
import NodeTypeScriptCacheRedis from "../assets/projects/node-typescript-cache-redis.jpeg";
import ServidorNodeExpress from "../assets/projects/servidor-nodejs-express.jpg";

export interface ProjectsInterface {
  date: string;
  image: string;
  description: string;
}

export const Projects: ProjectsInterface[] = [
  {
    date: "17/05/2023",
    image: EraseDatabase,
    description:
      "Um site de uma empresa ficticia que atua com vendas de banco de dados.",
  },
  {
    date: "21/04/2023",
    image: SocialProfileLinks,
    description:
      "site para exibir todos as minhas redes sociais e links de contato.",
  },
  {
    date: "30/04/2023",
    image: NodeTypeScriptCacheRedis,
    description:
      "Um projeto de estudo de nodejs com typescript e cache com redis.",
  },
  {
    date: "26/04/2023",
    image: ProjetoPortfolio,
    description:
      "Um pequeno site de portfolio em html e css desenvolvido em sala de aula.",
  },
  {
    date: "28/04/2023",
    image: ServidorNodeExpress,
    description: "Criando servidor http web básico no node.js usando o framework express.js",
  },
];
