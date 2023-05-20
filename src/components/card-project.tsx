interface CardProjetProps {
  date: string;
  cardDescription: string;
  imageUrl: string;
}

export default function CardProjet({
  date,
  cardDescription,
  imageUrl,
}: CardProjetProps): JSX.Element {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={imageUrl} width={305} height={170} />
        <div className="card-body">
          <p className="card-text">{cardDescription}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-body-secondary">{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
