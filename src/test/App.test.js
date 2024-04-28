import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Board is present", () => {
    it("renders a board", () => {
        render(<App />);
        const board = screen.getByTestId("board");
        expect(board).toBeInTheDocument();
    });
});

describe("Check the status text", () => {
    it("renders the status text", () => {
        render(<App />);
        const status = screen.getByTestId("status");
        expect(status).toContain("Next player: X");
    });
});
