/*-----------Handle play-----------*/
export const handlePlay = (nextSquares) => {
    return {
        type: 'HANDLE_PLAY',
        payload: nextSquares
    }

}
/*-----------JumpTo-----------*/
export const jumpTo = (nextMove) => {
    return {
        type: 'JUMP_TO',
        payload: nextMove
    }
}
