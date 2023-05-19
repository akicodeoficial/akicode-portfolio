interface ServiceCardProps {
  titleHeader: string;
  plainHolder: string;
  plainText: string;
}

export default function ServiceCard({
  titleHeader,
  plainHolder,
  plainText,
}: ServiceCardProps): JSX.Element {
  return (
    <div className="card">
      <div className="card-header">{titleHeader}</div>
      <div className="card-body">
        <h5 className="card-title">{plainHolder}</h5>
        <p className="card-text">{plainText}</p>
        <a href="#" className="btn btn-primary">
          Mais Detalhes
        </a>
      </div>
    </div>
  );
}
