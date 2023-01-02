import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../../PageObjects/HomePage'
import ProductsPage from '../../../PageObjects/ProductsPage'
import CheckOutPage from '../../../PageObjects/CheckOutPage'
//import { When } from "cypress/types/jquery";

const homePage = new HomePage()
const productsPage = new ProductsPage()
const checkOutPage = new CheckOutPage()

Given('I open the Ecommerce website', function () {
    cy.visit(this.data.url)
})

When('I add products to the cart', function () {
    homePage.getShopButton().click()
    /*this.data.product.forEach(function (element) {
        cy.AddToCart(element)
    })*/
    cy.AddToCart("Blackberry")
    productsPage.getCheckOut().click()
    checkOutPage.getCheckOutButton().click({ force: true })
})

Then('Success message should deliver once order successfully placed', function () {
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

/*Given('I open the Ecom website to fill details', function (dataTable) {
    cy.visit(dataTable.rawTable[1])
})*/

When('I Enters the details into Ecom Page', function (dataTable) {

    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('Validate the details entered', function (dataTable) {

    homePage.getTwoWayDataBinding().should('have.value', dataTable.rawTable[1][0])
    homePage.getMinLength().should('have.attr', "minlength", "2")
    homePage.getEnterpreneur().should('be.disabled')
})

Then('Click on shop Button', function () {

    homePage.getShopButton().click()
})