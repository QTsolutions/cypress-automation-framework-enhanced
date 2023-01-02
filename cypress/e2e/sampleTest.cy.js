/// <reference types="Cypress" />
describe('my first test suite', function () {

  it('my first test case', function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type("ca")
    cy.get('.product:visible').should('have.length', 4)

    //parent-child chaining
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    //to get the response by text name not by index
    cy.get('.products').find('.product').each(($el, index, $list) => {
      const vegName = $el.find('h4.product-name').text()
      if (vegName.includes('Cashews')) {

        //we use wrapper class to resolve the promise 
        cy.wrap($el).find("button[type='button']").click()
      }
    })

    //to resolve any promise manually
    cy.get("div[class='brand greenLogo']").then(function (logoText) {
      logoText.text()
    })

  })

})