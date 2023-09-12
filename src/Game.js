import Board from "./Board"

import { useState } from "react";
const Game = () => {

    /*-----------Declare-----------*/
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;



    /*-------------Function-------------- */
    /*-----------Handle play-----------*/
    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    /*-----------JumpTo-----------*/
    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove);
    }
    /*-----------Move-----------*/
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    /*-----------Render-----------*/
    return (
        <>

            <div className="game">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove} />
                </div>
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        </>
    )
}

export default Game