import Breadcrumb from '../components/breadcrumb';
import CardImage from '../components/card-image';
import RootLayout from "../layouts/root";
import LogoNode from '../assets/nodejs.jpg';

export default function TechsPage(): JSX.Element {
  return (
    <RootLayout>
      <section className="bg-body-secondary">
        <Breadcrumb />
      </section>
      <section>
        <div className="container">
          <div className="row">
            <h2>Tecnológias Da Minha Stack</h2>
            <CardImage
              cardText=""
              cardTitle="Tecnológias Node"
              imageUrl={LogoNode}
              buttonUrl="/tecnologias/node"
            />
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
