import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapDetail from "./pages/MapDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mapId" element={<MapDetail />} />
    </Routes>
  );
}

export default App;
