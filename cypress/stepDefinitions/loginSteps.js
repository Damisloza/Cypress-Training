/// <reference types = "Cypress" />

import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Given('I navigate to automation exercise website', () => {
    cy.visit('https://automationexercise.com/')
})

When('I enter login credentials', () => {
    cy.get('a[href="/login"]').click();
    cy.contains('Login to your account').should('be.visible');
    cy.get('input[data-qa="login-email"]').type('testexample@test.com');
    datatable.hashes()
    cy.get('input[data-qa="login-password"]').type('Cypress123');
    cy.get('button[data-qa="login-button"]').click();
})

Then('I should be logged in', () => {
    cy.contains(' Logged in as ').should('be.visible')
})