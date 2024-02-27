import Board from "../components/Board";

function Game() {
    const player = 'X';
    return(
        <>
            <p>Next player: {player}</p>
            <Board />
        </>
    );
}

export default Game;