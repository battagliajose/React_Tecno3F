import ItemCard from "./ItemCard";

export default function CardGrid() {
  return (
    <div className="card-grid">
      <h3>Catálogo de Juegos</h3> {/* Aquí irán las tarjetas de los juegos */}
      <ItemCard />
    </div>
  );
}
