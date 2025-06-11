import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Games from "../pages/Games";
import Monsters from "../pages/Monsters"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jogos" element={<Games />} />
      <Route path="/monstros" element={<Games />} />
    </Routes>
  );
}
