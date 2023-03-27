export class HomePage {
    
    searchProduct(product) {
        cy.get('#twotabsearchtextbox').type(product)
        cy.get('#nav-search-submit-button').click()
    }
}

export const homePage = new HomePage();