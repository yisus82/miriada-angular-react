export function playPosition(row, column, turn, values, numberMovements, winner) {
  return {
    type: 'PLAY_POSITION',
    row,
    column,
    turn,
    values,
    numberMovements,
    winner
  };
}

export function resetGame() {
  return { type: 'RESET_GAME' };
}
