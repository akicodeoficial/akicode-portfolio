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
                <a className="nav-link" href="/projetos">
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/experiencia">
                  Experiência
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/servicos">
                  Serviços
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/freelancer">
                  Freelancer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/habilidades">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tecnologias">
                  Tecnológias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/redes-sociais">
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
