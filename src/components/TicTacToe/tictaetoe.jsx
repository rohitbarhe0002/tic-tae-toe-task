import useTicTaeToe from '../../hooks/tic-tae-toe';


function TicTaeToe() {
    const { board, resetGame, getStatusMessage, handleClick } = useTicTaeToe();

    const isDisabled = (b) => !!b;

    return (
        <>
            <div className="game">
                <div className="status">
                    {getStatusMessage()}
                    <button className="reset-button" onClick={resetGame}>Reset Game</button>
                </div>
                <div className="board">
                    {board.map((board, i) => {
                        return <button className='cell' key={i} onClick={() => handleClick(i)} disabled={isDisabled(board)}>
                            {board}
                        </button>
                    })}
                </div>
            </div>
        </>
    )
}

export default TicTaeToe
