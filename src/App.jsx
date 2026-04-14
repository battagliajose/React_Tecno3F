import "./styles/reset.css";
import "./styles/normalize.css";
import "./styles/main.css";

import CustomHeader from "./components/CustomHeader.jsx";
import MainContent from "./components/MainContent.jsx";
import CustomFooter from "./components/CustomFooter.jsx";

function App() {
  return (
    <>
      <CustomHeader />
      <MainContent />
      <CustomFooter />
    </>
  );
}

export default App;
