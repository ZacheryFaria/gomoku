/**
 * @param confidence how much the computer likes a particular move.
 *    0 <= confidence <= 1000.  500 = no advantage/disadvantage
 * @param idx move index
 */
interface Move {
  confidence: number;
  idx: number;
}

/**
 * Make AI move
 * @param id player id
 * @param board copy of current board state
 * @param ply depth
 * @returns sorted list containing index and confidence of moves
 */
function makeMove(id: number, board: number[], ply: number): Move[] {
  var r: Move[] = [];
  for (var i = 0; i < 100; i++) {
    r.push({ confidence: 100, idx: i });
  }
  return r;
}

export default makeMove;
