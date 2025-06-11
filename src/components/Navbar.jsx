import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItem = (to, label) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded-xl transition font-zelda text-sm ${
        location.pathname === to
          ? "bg-triforce text-black"
          : "hover:bg-yellow-300 text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-hyrule shadow-md px-6 py-4 flex justify-center gap-4 border-b border-triforce sticky top-0 z-50">
      {navItem("/", "Início")}
      {navItem("/jogos", "Jogos")}
      {navItem("/monstros", "Monstros")}
    </nav>
  );
}
