export interface GameInfo {
  turn: string;
  values: string[][];
  numberMovements: number;
  winner: string;
  playerName: string;
}

export interface PostResponse {
  uri: string;
}
