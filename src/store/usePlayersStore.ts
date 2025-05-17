import { create } from 'zustand'

type Player = { id: string, name: string }

type PlayersStore = {
  players: Player[]
  addPlayer: (name: string) => void
  removePlayer: (id: string) => void
  setPlayers: (players: Player[]) => void
}

export const usePlayersStore = create<PlayersStore>((set) => ({
  players: [],
  addPlayer: (name) =>
    set((state) => ({
      players: [...state.players, { name, id: Date.now().toString() }]
    })),
  removePlayer: (id) =>
    set((state) => ({
      players: state.players.filter(p => p.id !== id)
    })),
  setPlayers: (players) => set(() => ({ players })),
}))
