import Breadcrumb from "../components/breadcrumb";
import RootLayout from "../layouts/root";

export default function FreelancePage(): JSX.Element {
  return (
    <RootLayout>
      <header className="bg-body-secondary">
        <Breadcrumb />
      </header>
      <main className="bg-body-secondary">
        <div className="container">
          <div className="row"></div>
        </div>
      </main>
    </RootLayout>
  );
}
