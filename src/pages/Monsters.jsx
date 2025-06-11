import { useEffect, useState } from "react";
import MonsterCard from "../components/MonsterCard";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://zelda.fanapis.com/api/monsters")
      .then((res) => res.json())
      .then((data) => {
        setMonsters(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Erro ao carregar monstros.");
        setLoading(false);
      });
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
      <p className="text-center text-yellow-200 mt-20">Carregando monstros...</p>
    );

  if (error)
    return (
      <p className="text-center text-red-400 font-bold mt-20">{error}</p>
    );

  return (
    <div className="p-6">
      <h1 className="text-triforce text-3xl font-zelda mb-6 text-center">
        Monstros da Série
      </h1>

      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Buscar monstro..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded bg-hyrule border border-triforce text-white placeholder-gray-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMonsters.length > 0 ? (
          filteredMonsters.map((monster) => (
            <MonsterCard key={monster.id} monster={monster} />
          ))
        ) : (
          <p className="text-center col-span-full text-yellow-200">
            Nenhum monstro encontrado.
          </p>
        )}
      </div>
    </div>
  );
}

export default Monsters;
