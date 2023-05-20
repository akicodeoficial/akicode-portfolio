import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  actualPage: string;
}

export default function Breadcrumb({ actualPage }: BreadcrumbProps): JSX.Element {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={'/'}>Início</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {actualPage}
        </li>
      </ol>
    </nav>
  );
}
