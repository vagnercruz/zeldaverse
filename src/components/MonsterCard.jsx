export default function MonsterCard({ monster }){
  return(
    <div className="bg-forest p-4 rounded-xl shadow hover:scale-105 transition">
      <h2 className="text-xl font-bold mb-2 text-triforce">{monster.name}</h2>
      <p className="text-sm text-gray-100">
        {monster.description?.slice(0, 150) || "Sem descrição disponível."}
      </p>
    </div>
  );
}