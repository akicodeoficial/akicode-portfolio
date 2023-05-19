import RootLayout from "../layouts/root";

export default function IndexPage(): JSX.Element {
  return (
    <RootLayout>
      <section>
        <div className="container">
          <div className="row p-3">
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
                    Escrito em <cite title="Source Title">19/05/2023</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="row p-3">
            <nav id="navbar-example2" className="navbar bg-light px-3 mb-3">
              <a className="navbar-brand" href="#">
                Jornada
              </a>
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="#scrollspyHeading1">
                    Primeiro
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#scrollspyHeading2">
                    Segundo
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    Outros
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#scrollspyHeading3">
                        Third
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#scrollspyHeading4">
                        Fourth
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#scrollspyHeading5">
                        Fifth
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
