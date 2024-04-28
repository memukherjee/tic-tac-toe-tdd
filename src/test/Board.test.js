import { render, screen } from "@testing-library/react";
import Board from "../component/Board";

describe("Board is having 9 squares", () => {
    it("renders 9 squares", () => {
        render(<Board />);
        const squares = screen.getAllByRole("button");
        expect(squares).toHaveLength(9);
        squares.forEach((square) => {
            expect(square).toHaveTextContent("");
        });
    });
});

describe("X & O is printed on the board", () => {
    it("renders X & O on the board", () => {
        render(<Board />);
        const squares = screen.getAllByRole("button");
        squares[0].click();
        expect(squares[0]).toHaveTextContent("X");
        squares[1].click();
        expect(squares[1]).toHaveTextContent("O");
    });
});
