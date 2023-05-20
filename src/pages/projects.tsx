import CardProjet from "../components/card-project";
import RootLayout from "../layouts/root";
import Breadcrumb from "../components/breadcrumb";
import { Projects, ProjectsInterface } from '../constants/projects.const';

export default function ProjectsPage(): JSX.Element {
  return (
    <RootLayout>
      <header>
        <Breadcrumb actualPage="Projetos Pessoais" />
      </header>
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
            {
              Projects.map((project: ProjectsInterface, index: number): JSX.Element => (
                <CardProjet key={index} cardDescription={project.description} date={project.date} imageUrl={project.image} />
              ))
            }
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
