export default function Board() {
    return (
        <div className="board">
            {[...Array(9).keys()].map((i) => (
                <button key={i} className="square" data-testid="square">
                    {i}
                </button>
            ))}
        </div>
    );
}
