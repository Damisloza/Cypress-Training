export class HomePage {
    

    searchProduct(product) {
        cy.get('#twotabsearchtextbox').type(product)
        cy.get('#nav-search-submit-button').click()
    }

    clickLeftMenu() {
        cy.get('#nav-hamburger-menu').click()
    }

    verifyElementsInLeftMenuVisible() {
        const shopDepartments = require('../testData/shopByDepartment.json')
        /*
        cy.contains('programs & features').parents('#hmenu-content').find('li').then((item) => {
            item.each((index, element) => {
                //cy.log(element.textContent)
                const listElement = []
                element = listElement.push(item.text().trim())
                cy.log(element)
                cy.log(shopDepartments.Departments)
                //expect(element).to.have.text(shopDepartments.Departments)
                
            })
        })
        */
        cy.contains('programs & features').parents('#hmenu-content').each((element, index) => {
            
            const listElement = [] 
            listElement.push(element.text().trim())
            cy.log(listElement)
        })
        /*
        cy.contains('div.hmenu-item', 'shop by department').should('be.visible')
        cy.contains('a[data-menu-id="5"]', 'Electronics').should('be.visible')
        cy.contains('a[data-menu-id="6"]', 'Computers').should('be.visible')
        cy.contains('a[data-menu-id="7"]', 'Smart Home').should('be.visible')
        cy.contains('a[data-menu-id="8"]', 'Arts & Crafts').should('be.visible')
        
        cy.contains('div.hmenu-item', 'programs & features').should('be.visible')
        cy.contains('a[data-menu-id="27"]', 'Gift Cards').should('be.visible')
        cy.contains('Shop By Interest').should('be.visible')
        cy.contains('a[data-menu-id="28"]', 'Amazon Live').should('be.visible')
        cy.contains('a[data-menu-id="29"]', 'International Shopping').should('be.visible')
        */
    }

    verifyElementsInLeftMenuNotVisible() {
        cy.contains('Testing Element').should('not.exist')
    }
}

export const homePage = new HomePage();