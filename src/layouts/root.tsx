import { PropsWithChildren } from 'react'
import AkiLogo from '../assets/aki.png'

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
                <a className="nav-link active" aria-current="page" href="/">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Experiência
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Serviços
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Freelancer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tecnológias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Redes Sociais
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
