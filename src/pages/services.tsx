import Breadcrumb from "../components/breadcrumb";
import RootLayout from "../layouts/root";
import ServiceCard from '../components/card';

export default function ServicesPage(): JSX.Element {
  return (
    <RootLayout>
      <section className="bg-body-secondary">
        <Breadcrumb actualPage='Serviços' />
      </section>
      <section>
        <div className="container">
          <div className="row p-3">
            <h2>Serviços que estou Prestando</h2>
            <div className="col-sm-6 mb-3 mb-sm-0">
              <ServiceCard
                titleHeader="Micros Serviços"
                plainHolder="Desenvolvimento de Aplicações Micros Serviços"
                plainText="Desenvolvimento de Grandes Aplicações Baseados em Micros Serviços usando Nodejs e Python"
              />
            </div>
            <div className="col-sm-6">
              <ServiceCard
                titleHeader="Desenvolvimento Web"
                plainHolder="Desenvolvimento de Sites e Aplicações Web"
                plainText="Desenvolvimento de Sites e Aplicações Web usando Reactjs, Nextjs, Angular ou Django, etc"
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <ServiceCard
                titleHeader="Desenvolvimento Mobile"
                plainHolder="Desenvolvimento de Aplicações Mobile"
                plainText="Desenvolvimento de Aplicações Mobile usando React Native, Expo e frameworks como native base."
              />
            </div>
            <div className="col-sm-6">
              <ServiceCard
                titleHeader="Desenvolvimento de API"
                plainHolder="Desenvolvimento de API's"
                plainText="Desenvolvimento de API's usando Nodejs, Python, Flask, Django, Nest.js e Adonis.js"
              />
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
