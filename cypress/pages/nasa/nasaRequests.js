export class GenerateApiKey {

    generateKey() {
        cy.contains('div#apidatagov_signup').then(signUp => {
            cy.readFile('cypress/testData/generateApiKey.json').then(data => {
                const firstName = signUp.find('#user_first_name').type(data.firstName)
                const lastName = signUp.find('#user_last_name').type(data.lastName)
                const email = signUp.find('#user_email').type(data.email)
            })

            const signUpButton = signUp.find('[type="submit"]')
            cy.wrap(signUpButton).contains('contain', 'Signup').click()
        })
    }

    astronomyPictureDay() {
        cy.readFile('cypress/testData/generateApiKey.json').then(data => {
            cy.request("GET", "https://api.nasa.gov/planetary/apod?api_key="+data.ApiKey)
                .then((apiResponse) => {
                    expect(apiResponse.status).to.eq(200)
                    expect(apiResponse.body.results).to.be.an('undefined')
            })
        })
        
    }

    asteroidsNewoW() {
        cy.request("GET", "https://api.nasa.gov/neo/rest/v1/feed?start_date=1998-05-14&end_date=1998-05-15&api_key=d7e7NvHq1Q3aOBsJRHucorPJ2dXk3AUfxSg4Hdse")
            .then((response) => {
                expect(response.status).to.eq(200)
        })
    }
}

export const generateApiKey = new GenerateApiKey();