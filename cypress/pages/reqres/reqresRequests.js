export class ReqresRequests {

    postCreateUser() {
        cy.readFile('cypress/testData/reqresRequests.json').then(request => {
            cy.request("POST", "https://reqres.in/"+request.POST)
                    .then((apiResponse) => {
                        expect(apiResponse.status).to.eq(201)
            })
        })
    }

    putUpdateUser() {
        cy.readFile('cypress/testData/reqresRequests.json').then(request => {
            cy.request("PUT", "https://reqres.in/"+request.PUT)
                .then((apiResponse) => {
                    expect(apiResponse.status).to.eq(200)
            })
        })
    }

    deleteUser() {
        cy.readFile('cypress/testData/reqresRequests.json').then(request => {
            cy.request("DELETE", "https://reqres.in/"+request.DELETE)
                .then((apiResponse) => {
                    expect(apiResponse.status).to.eq(204)
            })
        }) 
    }
}

export const reqresRequests = new ReqresRequests()