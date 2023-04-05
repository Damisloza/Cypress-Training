/// <reference types = "Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {generateApiKey} from "../pages/nasa/nasaRequests"

Given('Navigate to NASA API', () => {
    cy.visit('https://api.nasa.gov/')
})

Then('Validate status code 200 and Response Body', () => {
    generateApiKey.astronomyPictureDay()
    //generateApiKey.asteroidsNewoW()
})