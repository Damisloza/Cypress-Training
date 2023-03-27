export class ProductPage {
    productPrice() {
        cy.get('#renewedBuyBoxPrice.a-color-price').invoke('text').then((price) => {
            cy.log(price)
        })
    }
}

export const productPage = new ProductPage();

