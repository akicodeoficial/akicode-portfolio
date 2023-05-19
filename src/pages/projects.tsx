import CardProjet from "../components/card-project";
import RootLayout from "../layouts/root";
import EraseDatabase from "../assets/erasa-database.png";

export default function ProjectsPage(): JSX.Element {
  return (
    <RootLayout>
      <header>
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
      </header>
      <main>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <CardProjet
                date="17/05/2023"
                imageUrl={EraseDatabase}
                cardDescription="Um site para um empresa ficticia de vendas de banco de dados"
              />
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
