export class HomePage {

    searchProduct(product) {
        cy.get('#twotabsearchtextbox').type(product)
        cy.get('#nav-search-submit-button').click()
    }

    clickLeftMenu() {
        cy.get('#nav-hamburger-menu').click()
    }

    verifyElementsInShopByDepartment() {
        cy.contains("div.hmenu-item", 'shop by department').should('be.visible')
        cy.readFile('cypress/testData/ShopByDepartment.json').then(ShopByDepartment => {
            cy.wrap(ShopByDepartment.Departments).each(Departments => {
                cy.contains('[data-menu-id]', Departments).should('be.visible')
            })
        })
    }

    verifyElementsInProgramsAndFeatures() {
        cy.contains("div.hmenu-item", 'programs & features').should('be.visible')
        cy.readFile('cypress/testData/programsAndFeatures.json').then(programsAndFeatures => {
            cy.wrap(programsAndFeatures.Features).each(Features => {
                cy.contains('[data-menu-id]', Features).scrollIntoView().should('be.visible')
            })
        })
    }

    verifyElementsInLeftMenuNotVisible() {
        cy.contains("div.hmenu-item", 'shop by department').should('be.visible')
        cy.readFile('cypress/testData/ShopByDepartment.json').then(ShopByDepartment => {
            cy.wrap(ShopByDepartment.Fail).each(Fail => {
                cy.contains('[data-menu-id]', Fail).scrollIntoView().should('be.visible')
            })
        })
    }
}

export const homePage = new HomePage();