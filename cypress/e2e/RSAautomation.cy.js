/// <reference types="Cypress" />
describe('my first test suite', function () {

    it('Adding Product to Cart RSA', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca")

        //to get the response by text name not by index
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegName = $el.find('h4.product-name').text()
            if (vegName.includes('Cashews')) {
                //we use wrapper class to resolve the promise 
                cy.wrap($el).find("button[type='button']").click()
            }
        })
        cy.get("a[class='cart-icon']").click()
        cy.get("button[type='button']").contains("PROCEED TO CHECKOUT").click()
        cy.contains('Place Order').click()
    })

})