import Breadcrumb from "../../components/breadcrumb";
import RootLayout from "../../layouts/root";
import { TechsNode, TechsNodeInterface } from '../../constants/techs-node.const';

export default function TechsNodePage(): JSX.Element {
  return (
    <RootLayout>
      <header className="bg-body-secondary">
        <Breadcrumb actualPage='Tecnologias Do Node.js' />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <h2>Tecnológias do Node.js</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Link</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Uso</th>
                  <th scope="col">Dominio</th>
                </tr>
              </thead>
              <tbody>
                {
                  TechsNode.map((tech: TechsNodeInterface, index: number): JSX.Element => {
                    return (
                      <tr key={index}>
                        <td>
                          <a href={tech.link} target="_blank" rel="noreferrer">
                            [LINK]
                          </a>
                        </td>
                        <td>{tech.name}</td>
                        <td>{tech.use}</td>
                        <td>{tech.domain}</td>
                        <td>{tech.description}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
