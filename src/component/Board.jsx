import { useState } from "react";
import Square from "./Square";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [turnCount, setTurnCount] = useState(0);
    const xIsNext = turnCount % 2 === 0;
    const winner = calculateWinner(squares);
    const status = winner
        ? `${winner} wins!`
        : turnCount === 9
        ? "It's a draw!"
        : `Next player: ${xIsNext ? "X" : "O"}`;

    const onClickHandler = (index) => {
        if (squares[index] || winner) return;
        const squaresCopy = [...squares];
        squaresCopy[index] = xIsNext ? "X" : "O";
        setSquares(squaresCopy);
        setTurnCount((prevCount) => prevCount + 1);
    };

    return (
        <>
            <div className="status" data-testid="status">
                {status}
            </div>
            <div className="board" data-testid="board">
                {squares.map((square, index) => (
                    <Square
                        key={index}
                        index={index}
                        value={square}
                        onClick={() => onClickHandler(index)}
                    />
                ))}
            </div>
        </>
    );
}

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const [square1, square2, square3] = lines[lineIndex];
        if (
            squares[square1] &&
            squares[square1] === squares[square2] &&
            squares[square1] === squares[square3]
        ) {
            return squares[square1];
        }
    }
    return null;
};
