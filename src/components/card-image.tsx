interface CardImageProps {
  imageUrl: string;
  cardTitle: string;
  cardText: string;
  buttonUrl: string;
}

export default function CardImage({
  imageUrl,
  cardTitle,
  cardText,
  buttonUrl,
}: CardImageProps): JSX.Element {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageUrl} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
        <a href={buttonUrl} className="btn btn-primary">
          Ir para a Página
        </a>
      </div>
    </div>
  );
}
