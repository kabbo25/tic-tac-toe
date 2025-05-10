interface SquareProps {
    value: string | null;
    handleClick: () => void;
    isWinning?: boolean;
}

function Square({ value, handleClick, isWinning = false }: SquareProps) {
    return (
        <button
            className={`w-20 h-20 bg-white border border-gray-400 text-4xl font-bold flex items-center justify-center relative ${isWinning ? 'bg-green-200' : ''}`}
            onClick={handleClick}
        >
            {value}
            
        </button>
    );
}

export default Square;
