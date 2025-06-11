import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

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
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Games;
