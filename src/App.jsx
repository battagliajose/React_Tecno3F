import "./styles/reset.css";
import "./styles/normalize.css";
import "./styles/main.css";

import { useState } from "react";
import CardGrid from "./components/CardGrid.jsx";
import CustomHeader from "./components/CustomHeader.jsx";
import Search from "./components/Search.jsx";
import { catalogo } from "./data/data.js";

function App() {
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

  const handlersOnSearch = (event) => {
    setTextoBusqueda(event.target.value.toLowerCase());
  };

  const catalogoFiltrado = catalogoConFavoritos.filter((item) =>
    item.titulo.toLowerCase().includes(textoBusqueda),
  );

  return (
    <main>
      <CustomHeader />
      <Search onChange={handlersOnSearch} />
      <CardGrid catalogo={catalogoFiltrado} onSetFavorito={handleSetFavorito} />
    </main>
  );
}

export default App;
