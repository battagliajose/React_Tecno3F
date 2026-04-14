import "../styles/search.css";

export default function Search({ onChange }) {
  return (
    <div className="search-container">
      <h2>Busqueda:</h2>
      <input type="text" onChange={onChange} />
    </div>
  );
}
