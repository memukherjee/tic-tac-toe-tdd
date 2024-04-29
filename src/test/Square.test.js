import { render, screen } from "@testing-library/react";
import Square from "../component/Square";

describe("Square is having X & O", () => {
    it("renders X & O on the square", () => {
        const onPlay = jest.fn();
        render(<Square value="X" onClick={onPlay} />);
        const square = screen.getByRole("button");
        expect(square).toHaveTextContent("X");
    });
});

describe("Square onClick event", () => {
    it("calls the onClick event", () => {
        const onPlay = jest.fn();
        render(<Square value="" onClick={onPlay} />);
        const square = screen.getByRole("button");
        square.click();
        expect(onPlay).toHaveBeenCalled();
    });
});
