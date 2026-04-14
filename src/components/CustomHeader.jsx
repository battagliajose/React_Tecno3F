import gamerlogo from "../assets/gamerlogo.png";
import "../styles/custom-header.css";

export default function CustomHeader() {
  return (
    <header>
      <img src={gamerlogo} alt="Logo Gamer" />
      <h1>Tecno.3F - Catálogo</h1>
      <img src={gamerlogo} alt="Logo Gamer" />
    </header>
  );
}
