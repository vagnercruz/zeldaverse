import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-hyrule text-white flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-zelda text-triforce mb-6">
          ZeldaVerse
        </h1>
        <p className="max-w-md mx-auto text-lg font-light">
          Uma enciclopédia interativa de <strong>The Legend of Zelda</strong>.
          Explore jogos, monstros, personagens e muito mais!
        </p>
        <button className="mt-8 bg-triforce text-black px-6 py-2 rounded-xl shadow hover:bg-yellow-300 transition">
          Entrar na aventura
        </button>
      </div>
    </div>
  );
}

export default App;
