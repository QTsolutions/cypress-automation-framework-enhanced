class HomePage {

    getEditBox() {
        return cy.get("input[name='name']:nth-child(2)")
    }

    getTwoWayDataBinding() {
        return cy.get("h4 input[class*='ng-valid']")

    }

    getGender() {
        return cy.get("#exampleFormControlSelect1")
    }

    getEnterpreneur() {
        return cy.get("#inlineRadio3")
    }

    getMinLength() {
        return cy.get("input[name='name']:nth-child(2)")
    }

    getShopButton() {
        return cy.get("ul[class='navbar-nav'] li:nth-child(2) a")
    }

}

export default HomePage;