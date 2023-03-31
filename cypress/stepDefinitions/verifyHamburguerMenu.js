/// <reference types = "Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {homePage} from "../pages/amazon/homePage"

Given('I navigate to Amazon II', () => {
    cy.visit('https://www.amazon.com/')
})

When ('Click on the left menu All', () => {
    homePage.clickLeftMenu()
})

Then('Verify elements in the menu section', () => {
    homePage.verifyElementsInLeftMenuVisible()
})

Then('Verify elements in the menu section NOT have visible', () => {
    homePage.verifyElementsInLeftMenuNotVisible()
})

