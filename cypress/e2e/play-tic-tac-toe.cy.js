describe("play tic-tac-toe and X wins", () => {
    it("visit url", () => {
        cy.visit("http://localhost:3000/");
    });

    it("board is rendered", () => {
        cy.get("button[cell-index]").should("have.length", 9);
    });

    it("status is rendered", () => {
        cy.get('div[data-testid="status"]').contains("Next player: X");
    });

    it("click on the first cell", () => {
        const firstSquare = cy.get('button[data-testid="cell-0"]');
        firstSquare.click();
        it("check if the first cell has an X", () => {
            firstSquare.contains("X");
        });
    });

    it("click on the second cell", () => {
        const secondSquare = cy.get('button[data-testid="cell-1"]');
        secondSquare.click();
        it("check if the second cell has an O", () => {
            secondSquare.contains("O");
        });
    });

    it("X wins", () => {
        const fourthSquare = cy.get('button[data-testid="cell-3"]');
        const thirdSquare = cy.get('button[data-testid="cell-2"]');
        const seventhSquare = cy.get('button[data-testid="cell-6"]');

        fourthSquare.click();
        thirdSquare.click();
        seventhSquare.click();
        cy.get('div[data-testid="status"]').contains("X wins!");
    });
});

describe("play tic-tac-toe and O wins", () => {
    it("visit url", () => {
        cy.visit("http://localhost:3000");
    });

    it("O wins", () => {
        const firstSquare = cy.get('button[data-testid="cell-0"]');
        const secondSquare = cy.get('button[data-testid="cell-1"]');
        const fourthSquare = cy.get('button[data-testid="cell-3"]');
        const fifthSquare = cy.get('button[data-testid="cell-4"]');
        const thirdSquare = cy.get('button[data-testid="cell-2"]');
        const eighthSquare = cy.get('button[data-testid="cell-7"]');

        firstSquare.click();
        secondSquare.click();
        fourthSquare.click();
        fifthSquare.click();
        thirdSquare.click();
        eighthSquare.click();
        cy.get('div[data-testid="status"]').contains("O wins!");
    });
});

describe("play tic-tac-toe and draw", () => {
    it("visit url", () => {
        cy.visit("http://localhost:3000");
    });

    it("draw", () => {
        const firstSquare = cy.get('button[data-testid="cell-0"]');
        const secondSquare = cy.get('button[data-testid="cell-1"]');
        const thirdSquare = cy.get('button[data-testid="cell-2"]');
        const fourthSquare = cy.get('button[data-testid="cell-3"]');
        const fifthSquare = cy.get('button[data-testid="cell-4"]');
        const sixthSquare = cy.get('button[data-testid="cell-5"]');
        const seventhSquare = cy.get('button[data-testid="cell-6"]');
        const eighthSquare = cy.get('button[data-testid="cell-7"]');
        const ninthSquare = cy.get('button[data-testid="cell-8"]');

        firstSquare.click();
        fifthSquare.click();
        thirdSquare.click();
        secondSquare.click();
        eighthSquare.click();
        fourthSquare.click();
        sixthSquare.click();
        ninthSquare.click();
        seventhSquare.click();
        cy.get('div[data-testid="status"]').contains("It's a draw!");
    });
});
