/// <reference types="Cypress" />
import HomePage from '../PageObjects/HomePage'
import ProductsPage from '../PageObjects/ProductsPage'
import CheckOutPage from '../PageObjects/CheckOutPage'


describe("Test Automation Framework for RSA website", function () {
    const homePage = new HomePage()
    const productsPage = new ProductsPage()
    const checkOutPage = new CheckOutPage()

    before(function () {
        cy.fixture("example").then(function (data) {
            this.data = data
        })
    })

    it("First Test case of Framework", function () {

        //cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.visit(this.data.url)
        //cy.visit(Cypress.envVariable('baseUrl') + "/angularpractice/")
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getMinLength().should('have.attr', "minlength", "2")
        homePage.getEnterpreneur().should('be.disabled')
    })

    it("Shop login for mobile purchase", function () {
        homePage.getShopButton().click()
        /*this.data.product.forEach(function (element) {
            cy.AddToCart(element)
        })*/
        cy.AddToCart("Blackberry")
        productsPage.getCheckOut().click()
        checkOutPage.getCheckOutButton().click({ force: true })
        checkOutPage.getEnterCountryName().type('india')
        checkOutPage.getClickPopUPCountryName().click()
        checkOutPage.getCheckBoxClick().click({ force: true })
        checkOutPage.getPurchaseButtonClick().click()
        checkOutPage.getSuccessMessage().then(function (successText) {
            const text = successText.text()
            console.log(text)
            expect(text.includes('Success!')).to.be.true

        })
    })
})