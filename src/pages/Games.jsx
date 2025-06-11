import { useEffect, useState } from "react";

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://zelda.fanapis.com/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-triforce text-3xl font-zelda mb-6 text-center">
        Jogos da Série
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-forest p-4 rounded-xl shadow hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold mb-2 text-triforce">{game.name}</h2>
            <p className="text-sm text-gray-100">
              {game.description?.slice(0, 150) || "Sem descrição disponível."}
            </p>
            <p className="text-xs mt-2 text-yellow-200">
              Lançamento: {game.released_date || "?"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
