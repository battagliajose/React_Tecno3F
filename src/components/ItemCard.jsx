import "../styles/item-card.css";
import heartFilled from "../assets/heart-full.png";
import heartEmpty from "../assets/heart-transp.png";

export default function ItemCard({ card, onSetFavorito }) {
  return (
    <div
      className={`item-card ${card.destacado ? "destacado" : ""}`}
      style={{
        backgroundImage: ` url(${card.imagen})`,
      }}
    >
      <div className="back-overlay">
        <img
          className="heart-icon"
          src={card.favorito ? heartFilled : heartEmpty}
          alt="Favorito"
          onClick={() => onSetFavorito(card.id)}
        />
        <br />
        <h3>{card.titulo}</h3>
        <img className="item-image" src={card.imagen} alt={card.titulo} />
        <p>{card.categoria}</p>
        <p>{card.anio}</p>
        {card.destacado && <p>Destacado</p>}
      </div>
    </div>
  );
}
