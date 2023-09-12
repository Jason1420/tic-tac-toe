const initialState = {
    history: [Array(9).fill(null)],
    currentMove: 0,
    currentSquares: (Array(9).fill(null)),
    xIsNext: true,
}

const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_PLAY': {
            const nextHistory = [...state.history
                .slice(0, state.currentMove + 1), action.payload];
            return {
                ...state,
                history: nextHistory,
                currentMove: nextHistory.length - 1,
                currentSquares: nextHistory[nextHistory.length - 1],
                xIsNext: (nextHistory.length - 1) % 2 === 0
            }
        }
        case 'JUMP_TO': {
            const nextMove = action.payload
            const nextSquare = state.history[nextMove]
            return {
                ...state,
                currentMove: nextMove,
                currentSquares: nextSquare
            }
        }

        default:
            return state;
    }
}

export default GameReducer;