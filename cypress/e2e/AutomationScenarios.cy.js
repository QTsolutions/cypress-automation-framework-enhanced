/// <reference types="Cypress" />
///<reference types="cypress-iframe" />
import "cypress-iframe"

describe('Automation practice RSA', function () {

    it('Automation scenarios examples', function () {

        //clicking the checkbox
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("label input[type='checkbox']").check(['option2', 'option3'])

        //selecting static dropdown
        cy.get('#dropdown-class-example').select('option1').should('have.value', 'option1')

        //handling dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, ind, $list) => {
            if ($el.text() === "India") {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

        //visible and invisible textbox
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Handling Alerts & POP up
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str1) => {
            expect(str1).to.equal("Hello , Are you sure you want to confirm?")
        })

        //Handling child window
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://www.rahulshettyacademy.com/')
        cy.go('back')

        //Handling Web Tables
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            if ($e1.text().includes('python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const coursePrice = price.text()
                    expect(coursePrice).to.equal(25)
                })
            }
        })

        //mouseover 
        // cy.get('.mouse-hover-content').invoke('show')

        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')

    })


    //working with frames
    it("iframe demonstration", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe");

        cy.iframe().find("a[class*='block']").then(function (element) {
            const textValue = element.text();
            cy.log('textValue')
        })

    })
})
