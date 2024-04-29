export default function Board() {
    return (
        <>
            <div className="status" data-testid="status">
                Next player: X
            </div>
            <div className="board" data-testid="board">
                {[...Array(9).keys()].map((i) => (
                    <button key={i} className="square" data-testid="square">
                        {i}
                    </button>
                ))}
            </div>
        </>
    );
}
