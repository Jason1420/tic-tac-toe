import Board from "./Board"
import { useSelector, useDispatch } from "react-redux";
import { handlePlay, jumpTo } from "./actions/GameAction";
const Game = () => {
    /*-----------REDUX-----------*/
    const history = useSelector(state => state.game.history);
    const currentMove = useSelector(state => state.game.currentMove);
    const currentSquares = useSelector(state => state.game.currentSquares);
    const xIsNext = useSelector(state => state.game.xIsNext);

    const dispatch = useDispatch();

    const handlePlayOnClick = (nextSquares) => {
        const action = handlePlay(nextSquares);
        dispatch(action);
    }

    const handleJumpTo = (nextMove) => {
        const action = jumpTo(nextMove);
        dispatch(action);
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
                <button onClick={() => handleJumpTo(move)}>{description}</button>
            </li>
        );
    });

    /*-----------Render-----------*/
    return (
        <>

            <div className="game">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares}
                        onPlay={handlePlayOnClick} currentMove={currentMove} />
                </div>
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        </>
    )
}

export default Game