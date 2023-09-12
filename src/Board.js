import { useState } from "react";
import Square from "./Square";
const Board = ({ xIsNext, squares, onPlay, currentMove }) => {


    /*-----------Declare-----------*/
    const [winLines, setWinLines] = useState(Array(9).fill(false))
    let winLineCopy = [Array(9).fill(false)];


    /*-----------Function onClickSquare-----------*/
    const onSquareClick = (i) => {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }


    /*-----------Set status of game-----------*/
    const winner = calculateWinner(squares) !== null ? calculateWinner(squares).squares : null;
    let status;
    if (winner) {
        status = "Winner: " + winner;
        winLineCopy = winLines.map((item, index) => {
            item = calculateWinner(squares).winLine.includes(index) ? true : false;

            return item;
        })
        console.log(winLineCopy)
    } else if ((!winner && currentMove === 9)) {
        status = "Draw"
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    /*-----------Render-----------*/
    return (
        <>
            <div className="status">{status}</div>
            <div>{console.log(winLineCopy)}</div>
            <div className="board-row">
                <Square value={squares[0]} handleOnClick={() => { onSquareClick(0) }} active={winLineCopy[0]} />
                <Square value={squares[1]} handleOnClick={() => { onSquareClick(1) }} active={winLineCopy[1]} />
                <Square value={squares[2]} handleOnClick={() => { onSquareClick(2) }} active={winLineCopy[2]} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} handleOnClick={() => { onSquareClick(3) }} active={winLineCopy[3]} />
                <Square value={squares[4]} handleOnClick={() => { onSquareClick(4) }} active={winLineCopy[4]} />
                <Square value={squares[5]} handleOnClick={() => { onSquareClick(5) }} active={winLineCopy[5]} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} handleOnClick={() => { onSquareClick(6) }} active={winLineCopy[6]} />
                <Square value={squares[7]} handleOnClick={() => { onSquareClick(7) }} active={winLineCopy[7]} />
                <Square value={squares[8]} handleOnClick={() => { onSquareClick(8) }} active={winLineCopy[8]} />
            </div>
        </>
    )

}

/*-----------Function calculate winner-----------*/
const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                squares: squares[a],
                winLine: lines[i]
            }
        }
    }
    return null;
}


export default Board;