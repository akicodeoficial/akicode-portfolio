import CardProjet from "../components/card-project";
import RootLayout from "../layouts/root";
import EraseDatabase from "../assets/projects/erasa-database.png";
import SocialProfileLinks from "../assets/projects/social-profile-links.png";

export default function ProjectsPage(): JSX.Element {
  return (
    <RootLayout>
      <div className="p-3">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Meus Projetos</h1>
            <p className="lead text-muted">
              Logo Abaixo estão todos os meus projetos do github. estou
              considerando apenas projetos como sites, aplicações e não
              configurações ou dotfiles
            </p>
          </div>
        </section>
      </div>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <CardProjet
              date="17/05/2023"
              imageUrl={EraseDatabase}
              cardDescription="Um site de uma empresa ficticia que atua com vendas de banco de dados"
            />
            <CardProjet
              date="21/04/2023"
              imageUrl={SocialProfileLinks}
              cardDescription="site para exibir todos as minhas redes sociais e links de contato"
            />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
