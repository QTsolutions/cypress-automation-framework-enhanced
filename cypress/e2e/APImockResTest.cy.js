/// <reference types="Cypress" />

describe('API Mock Test', function () {

    it('API response mock Test - RSA angular demo web', function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "null",
                    "isbn": "SPY40",
                    "aisle": "2529857"
                },
            ]
        }).as('bookRetreival')
        cy.get("button[class*='btn-primary']").click()

        //validate front end & backend response. 
        cy.wait('@bookRetreival').should(({ request, response }) => {

            cy.get('tr').should('have.length', response.body.length + 1)
        })

    })


})