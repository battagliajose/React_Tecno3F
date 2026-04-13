import "./App.css";
import CardGrid from "./components/CardGrid.jsx";
import CustomHeader from "./components/CustomHeader.jsx";
import { catalogo } from "./data/data.js";

function App() {
  return (
    <>
      <CustomHeader />
      <CardGrid />
    </>
  );
}

export default App;
