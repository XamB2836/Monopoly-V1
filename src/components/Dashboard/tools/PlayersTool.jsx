import * as React from "react";

export default function PlayersTool() {
  const [players, setPlayers] = React.useState([]);
  const [name, setName] = React.useState("");

  const addPlayer = () => {
    if (name.trim()) {
      setPlayers([...players, { name, id: Date.now() }]);
      setName("");
    }
  };

  const removePlayer = (id) => {
    setPlayers(players.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Gestion des joueurs</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="border rounded-lg px-3 py-2 w-64"
          value={name}
          placeholder="Nom du joueur"
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addPlayer()}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={addPlayer}
        >
          Ajouter
        </button>
      </div>
      <ul>
        {players.map((player) => (
          <li
            key={player.id}
            className="flex items-center justify-between py-2 border-b"
          >
            <span>{player.name}</span>
            <button
              className="text-red-600 hover:underline"
              onClick={() => removePlayer(player.id)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
