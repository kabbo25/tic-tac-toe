import { useState } from 'react';
import Board from './Board';
import type { BoardSquares } from './types';
const App = () => {
  const [history, setHisotry] = useState([Array(9).fill(null)]);
  const [isXNext, setIsXNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const handlePlay = (newSquare: BoardSquares) => {
    setHisotry([...history.slice(0, currentMove + 1), newSquare]);
    setIsXNext(!isXNext);
    setCurrentMove((prev) => prev + 1);
  }
  const handleReset = () => {
    setHisotry([Array(9).fill(null)]);
    setIsXNext(true);
  }
  const handleJumpTo = (index: number) => {
    setCurrentMove(index);
  }
  return (
    <div className={'flex justify-center items-center  min-h-screen border-2 border-gray-500 gap-x-20 '}>
      <Board square={history[currentMove]} isXNext={isXNext} onPlay={handlePlay}
        onReset={handleReset} />

      <ul className={'text-sm space-y-4'}>
        {history.map((value, index) => (
          <li onClick={() => handleJumpTo(index)} className={'border boder-black   p-1 cursor-pointer'}>{index === 0 ? `Let's start the Game` : `Go to the the Move ${index}`}</li>
        ))}
      </ul>
    </div>
  )
}
export default App;
