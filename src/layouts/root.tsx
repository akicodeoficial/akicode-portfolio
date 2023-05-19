import { PropsWithChildren } from 'react'
import AkiLogo from '../assets/aki.png'
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

export default function RootLayout({ children }: PropsWithChildren<object>): JSX.Element {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://github.com/akicodeoficial">
            <img src={AkiLogo} alt="aki" width="50" height="50" />
            AkiCodeOficial
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/"}
                >
                  Início
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/projetos"}>
                  Projetos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/experiencia"}>
                  Experiência
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/servicos"}>
                  Serviços
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/freelancer"}>
                  Freelancer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/habilidades"}>
                  Habilidades
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/tecnologias"}>
                  Tecnológias
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/redes-sociais"}>
                  Redes Sociais
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <Footer />
    </>
  );
}
