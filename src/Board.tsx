import './App.css';
import Square from "./Component/Square";

interface BoardProps {
  square: (string | null)[];
  isXNext: boolean;
  onPlay: ()=>void
}
function Board({ square, isXNext, onPlay }: BoardProps) {

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], // top row - horizontal
      [3, 4, 5], // middle row - horizontal
      [6, 7, 8], // bottom row - horizontal
      [0, 3, 6], // left column - vertical
      [1, 4, 7], // middle column - vertical
      [2, 5, 8], // right column - vertical
      [0, 4, 8], // diagonal top-left to bottom-right
      [2, 4, 6]  // diagonal top-right to bottom-left
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {


        return { winner: squares[a] };
      }
    }
    return null;
  };

  const winner = calculateWinner(square);
  const status = winner
    ? `Winner: ${winner.winner}`
    : square.every(s => s)
      ? 'Game ended in a draw!'
      : `Next player: ${isXNext ? 'X' : 'O'}`;

  const handleClick = (index: number) => {
    // Return if square is already filled or if there's a winner
    if (square[index] || winner) return;

    const newSquare = square.slice();
    newSquare[index] = isXNext ? 'X' : 'O';
    console.log(newSquare);
    onPlay(newSquare);

  }

  const resetGame = () => {

  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="text-2xl mb-4">
        {status}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {square.map((value, index) => (
          <Square
            key={index}
            value={value}
            handleClick={() => handleClick(index)}
          />
        ))}
      </div>
      {(winner || square.every(s => s)) && (
        <button
          type="reset"
          onClick={resetGame}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Play Again
        </button>
      )}
    </div>
  )
}

export default Board;
