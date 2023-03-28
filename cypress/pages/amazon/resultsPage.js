export class ResultsPage {
    selectProduct() {
        cy.get('[data-image-index="1"]').first().click()
    }
}

export const resultsPage = new ResultsPage();