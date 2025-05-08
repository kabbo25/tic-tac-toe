interface SquareProps {
    value: string | null;
    handleClick: () => void;
    isWinning?: boolean;
    winType?: 'horizontal' | 'vertical' | 'diagonal' | 'diagonal-reverse';
}

function Square({ value, handleClick, isWinning = false, winType }: SquareProps) {
    return (
        <button
            className={`w-20 h-20 bg-white border border-gray-400 text-4xl font-bold flex items-center justify-center relative ${isWinning ? 'bg-green-200' : ''}`}
            onClick={handleClick}
        >
            {value}
            {isWinning && winType === 'horizontal' && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-red-500 absolute"></div>
                </div>
            )}
            {isWinning && winType === 'vertical' && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-0.5 bg-red-500 absolute"></div>
                </div>
            )}
            {isWinning && winType === 'diagonal' && (
                <div className="absolute inset-0">
                    <div className="absolute h-0.5 bg-red-500 w-[141%] top-1/2 left-0 -translate--1/2  rotate-45"></div>
                </div>
            )}
            {isWinning && winType === 'diagonal-reverse' && (
                <div className="absolute inset-0">
                    <div className="absolute h-0.5 bg-red-500 w-[141%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                </div>
            )}
        </button>
    );
}

export default Square;
