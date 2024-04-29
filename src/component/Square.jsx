export default function Square({ value, onClick, index }) {
    return (
        <button
            className="square"
            cell-index={index}
            data-testid={`cell-${index}`}
            onClick={onClick}
        >
            {value}
        </button>
    );
}
