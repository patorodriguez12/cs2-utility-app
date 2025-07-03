import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapDetail from "./pages/MapDetail";
import TipPage from "./pages/TipPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mapId" element={<MapDetail />} />
      <Route path="/:mapId/:typeId" element={<TipPage />} />
    </Routes>
  );
}

export default App;
