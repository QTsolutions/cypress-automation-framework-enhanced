class CheckOutPage {
    getCheckOutButton() {

        return cy.get("button[class*='btn-success'] span")
    }

    getEnterCountryName() {
        return cy.get('#country')
    }

    getClickPopUPCountryName() {
        return cy.get("div[class='suggestions'] ul li")
    }

    getCheckBoxClick() {
        return cy.get("#checkbox2")
    }

    getPurchaseButtonClick() {
        return cy.get("input[value='Purchase']")
    }

    getSuccessMessage() {
        return cy.get(" div[class*='alert-dismissible']")
    }

}
export default CheckOutPage;