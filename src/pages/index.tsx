import Breadcrumb from '../components/breadcrumb';
import RootLayout from '../layouts/root';

export default function IndexPage(): JSX.Element {
  return (
    <RootLayout>
      <section className="bg-body-secondary">
        <Breadcrumb />
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card-header">Descrição Curta</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    Sou estudante de Ciência da Computação na Universidade
                    Cruzeiro do Sul e atuo como programador pleno com 3 anos de
                    experiência.
                  </p>
                  <footer className="blockquote-footer">
                    Escrito em{" "}
                    <cite title="Source Title">19/05/2023</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
