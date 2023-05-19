import Breadcrumb from '../components/breadcrumb';
import RootLayout from '../layouts/root';

export default function IndexPage(): JSX.Element {
  return (
    <RootLayout>
      <header className="bg-body-secondary">
        <Breadcrumb />
      </header>
    </RootLayout>
  )
}
