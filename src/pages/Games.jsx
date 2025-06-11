import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://zelda.fanapis.com/api/games")
      .then((res) => res.json())
      .then((data) => {
        setGames(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Erro ao carregar jogos.");
        setLoading(false);
      });
  }, []);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
      <p className="text-center text-yellow-200 mt-20">Carregando jogos...</p>
    );

  if (error)
    return (
      <p className="text-center text-red-400 font-bold mt-20">{error}</p>
    );

  return (
    <div className="p-6">
      <h1 className="text-triforce text-3xl font-zelda mb-6 text-center">
        Jogos da Série
      </h1>

      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Buscar jogo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded bg-hyrule border border-triforce text-white placeholder-gray-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))
        ) : (
          <p className="text-center col-span-full text-yellow-200">
            Nenhum jogo encontrado.
          </p>
        )}
      </div>
    </div>
  );
}

export default Games;
