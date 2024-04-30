import { useState } from "react";
const initialBoard = () => Array(9).fill(null);
const useTicTaeToe = () => {
    const [board, setBoard] = useState(initialBoard());
    const [isNext, setIsNext] = useState(true);

    const WINING_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const calculateWinner = (currBoard) => {
        for (let i = 0; i < WINING_PATTERNS.length; i++) {
            const [a, b, c] = WINING_PATTERNS[i];
            if (currBoard[a] && currBoard[a] === currBoard[b] && currBoard[a] === currBoard[c]) {
                return currBoard[a];
            }
        }
        return null;

    };
    const handleClick = (i) => {
        //check winner 
        const winner = calculateWinner(board);
        if (winner || board[i]) return;
        const newBoard = [...board];
        newBoard[i] = isNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsNext(!isNext);

    };
    const getStatusMessage = () => {
        const winner = calculateWinner(board);
        if (winner) return `player ${winner} wins!`;
        if (!board.includes(null)) return 'It is a draw!'
        return `Player ${isNext ? 'X' : "O"} turn!`;
    };

    const resetGame = () => {
        setBoard(initialBoard);
        setIsNext(true);
    };
    return { board, calculateWinner, handleClick, resetGame, getStatusMessage }

}

export default useTicTaeToe;