import { useState } from "react";
import { catalogo } from "../data/data.js";
import Search from "./Search.jsx";
import CardGrid from "./CardGrid.jsx";

export default function MainContent() {
  const [catalogoConFavoritos, setCatalogoConFavoritos] = useState(
    catalogo.map((item) => ({
      ...item,
      favorito: false,
    })),
  );

  const [textoBusqueda, setTextoBusqueda] = useState("");

  const handleSetFavorito = (id) => {
    setCatalogoConFavoritos((prevCatalogo) =>
      prevCatalogo.map((item) =>
        item.id === id ? { ...item, favorito: !item.favorito } : item,
      ),
    );
  };

  const handlerOnSearch = (event) => {
    setTextoBusqueda(event.target.value.toLowerCase());
  };

  const catalogoFiltrado = catalogoConFavoritos.filter((item) =>
    (item.titulo || "").toLowerCase().includes(textoBusqueda),
  );

  return (
    <main>
      <Search onChange={handlerOnSearch} />
      <CardGrid catalogo={catalogoFiltrado} onSetFavorito={handleSetFavorito} />
    </main>
  );
}
