import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TipSelectPage from "./pages/TipSelectPage";
import TipPage from "./pages/TipPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mapId" element={<TipSelectPage />} />
      <Route path="/:mapId/:typeId" element={<TipPage />} />
    </Routes>
  );
}

export default App;
