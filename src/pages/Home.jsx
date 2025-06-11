import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col p-6">
      <h1 className="text-4xl md:text-5xl font-zelda text-triforce mb-4">
        ZeldaVerse
      </h1>
      <p className="text-center max-w-md mb-6">
        Uma enciclopédia interativa da franquia <strong>Zelda</strong>.
      </p>
      <Link
        to="/jogos"
        className="bg-triforce text-black px-6 py-3 rounded-xl shadow hover:bg-yellow-300 transition"
      >
        Ver Jogos
      </Link>
    </div>
  );
}

export default Home;
