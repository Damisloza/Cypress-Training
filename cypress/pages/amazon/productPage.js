export class ProductPage {
    productPrice() {
        

        cy.get('#apex_offerDisplay_desktop').parents('.a-box-inner').then((price) => {
            const itemPrice = price.find('.a-offscreen').first().text()
            cy.log(itemPrice)
            expect(itemPrice).to.not.be.empty
            expect(itemPrice).to.not.be.null
            expect(Number.isNaN(itemPrice)).to.be.eq(false)
        })
    }
}

export const productPage = new ProductPage();

