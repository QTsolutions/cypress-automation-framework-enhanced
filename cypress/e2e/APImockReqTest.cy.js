/// <reference types="Cypress" />

describe('API Mock Test', function () {

    it('API mock Test - RSA angular demo web', function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'

            req.continue((res) => {
                //expect(res.statusCode).to.equal(200)

            })

        }).as('mockReqTest')   // till now it is in promise pending state

        cy.get("button[class*='btn-primary']").click()

        cy.wait('@mockReqTest')

    })


})