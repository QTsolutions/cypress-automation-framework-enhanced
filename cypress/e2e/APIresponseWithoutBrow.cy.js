/// <reference types="Cypress" />

describe('API Mock Test', function () {

    it('API mock Test - RSA angular demo web', function () {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {

            "name": "Learn Appium Automation with Java",
            "isbn": "bcggss",
            "aisle": "22s7",
            "author": "John foe"
        }).then(function (res) {
            //expect(res.body).to.have.property('Msg', 'sucessfully added')
            expect(res.status).to.equal(200)
        })

    })


})