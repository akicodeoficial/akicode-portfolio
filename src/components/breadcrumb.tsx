export default function Breadcrumb(): JSX.Element {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          <a href="/">Início</a>
        </li>
      </ol>
    </nav>
  );
}
