export interface State {
  turn: string;
  values: string[][];
  numberMovements: number;
  winner: string;
  playerName: string;
  lastSavedGameUrl: string;
  savedGames: SavedGame[];
}

export interface SavedGame {
  id: number;
  name: string;
  url: string;
}
