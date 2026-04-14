import "../styles/card-grid.css";
import ItemCard from "./ItemCard";

export default function CardGrid({ catalogo, onSetFavorito }) {
  return (
    <div className="card-grid">
      {catalogo.map((card) => (
        <ItemCard key={card.id} card={card} onSetFavorito={onSetFavorito} />
      ))}
    </div>
  );
}
