/// <reference types = "Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {homePage} from "../pages/amazon/homePage"
import {resultsPage} from "../pages/amazon/resultsPage"
import {productPage} from "../pages/amazon/productPage"

Given('I navigate to Amazon', () => {
    cy.visit('https://www.amazon.com/')
})

When ('In the searchBar type {string} and search', (product) => {
    homePage.searchProduct(product)
})

When('In the resultPage click in first resultPage', () => {
    resultsPage.selectProduct();
})

Then('Print price', () => {
    productPage.productPrice();
})