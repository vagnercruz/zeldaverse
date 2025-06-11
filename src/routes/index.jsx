import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Games from "../pages/Games";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jogos" element={<Games />} />
    </Routes>
  );
}
