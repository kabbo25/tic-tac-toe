import { useState } from 'react';
import Board from './Board';
const App = () => {
  const [history, setHisotry] = useState([Array(9).fill(null)]);
  const [isXNext, setIsXNext] = useState(true);
  const handlePlay=  (newSquare)=>{
    setHisotry([...history,newSquare]) ;
    setIsXNext(!isXNext);
  }
  return (
    <div className={'flex justify-center item-center min-h-screen border-2 border-gray-500 gap-x-20 '}>
      <Board square={history[history.length-1]} isXNext={isXNext} onPlay={handlePlay}/>
      <ul className={'text-xl self-center'}>
      {history.map((value,index)=>(
        <li className={'border boder-black mb-4 mt-4 p-2'}>{index===0?`Let's start the Game`: `Go to the the Move ${index}`}</li>
      ))}
      </ul>
    </div>
  )
}
export default App;
