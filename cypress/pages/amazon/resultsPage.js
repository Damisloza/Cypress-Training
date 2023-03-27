export class ResultsPage {
    selectProduct() {
        cy.get('[data-index="1"][data-cel-widget="search_result_1"]')
            .parents('#search')
            .find('.a-price-whole')
            .first().click()
    }
}

export const resultsPage = new ResultsPage();