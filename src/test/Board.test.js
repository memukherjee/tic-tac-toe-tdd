import { fireEvent, render, screen } from "@testing-library/react";
import Board from "../component/Board";

describe("Squares of the board", () => {
  it("renders 9 squares with no values", () => {
    render(<Board />);
    const squares = screen.getAllByRole("button");
    expect(squares).toHaveLength(9);
    squares.forEach((square) => {
      expect(square).toHaveTextContent("");
    });
  });

  it("renders X & O on the board when onClick event is triggered", () => {
    render(<Board />);
    const squares = screen.getAllByRole("button");
    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent("X");
    fireEvent.click(squares[1]);
    expect(squares[1]).toHaveTextContent("O");
  });
});
