export default function GameCard({ game }) {
  return (
    <div className="bg-forest p-4 rounded-xl shadow hover:scale-105 transition">
      <h2 className="text-xl font-bold mb-2 text-triforce">{game.name}</h2>
      <p className="text-sm text-gray-100">
        {game.description?.slice(0, 150) || "Sem descrição disponível."}
      </p>
      <p className="text-xs mt-2 text-yellow-200">
        Lançamento: {game.released_date || "?"}
      </p>
    </div>
  );
}
