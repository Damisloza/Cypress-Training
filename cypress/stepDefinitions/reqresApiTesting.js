/// <reference types = "Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {reqresRequests} from "../pages/reqres/reqresRequests"

Given('Navigate to Reqres', () => {
    cy.visit('https://reqres.in/')
})

When('Create user - POST', () => {
    reqresRequests.postCreateUser()
})

When('Update user - PUT', () => {
    reqresRequests.putUpdateUser()
})

Then('Delete user - DELETE', () => {
    reqresRequests.deleteUser()
})