class ProductsPage {

    getCheckOut() {
        return cy.get("a[class*='btn-primary']")
    }

}

export default ProductsPage;