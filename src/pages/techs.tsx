import Breadcrumb from '../components/breadcrumb';
import RootLayout from "../layouts/root";

export default function TechsPage(): JSX.Element {
  return (
    <RootLayout>
      <header className="bg-body-secondary">
        <Breadcrumb />
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
            </table>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
