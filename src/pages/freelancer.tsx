import Breadcrumb from "../components/breadcrumb";
import RootLayout from "../layouts/root";

export default function FreelancePage(): JSX.Element {
  return (
    <RootLayout>
      <section className="bg-body-secondary">
        <Breadcrumb />
      </section>
      <section className="bg-body-secondary">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
    </RootLayout>
  );
}
