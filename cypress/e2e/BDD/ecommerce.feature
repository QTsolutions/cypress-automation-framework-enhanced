Feature: E2E testing of Ecommerce website

    we are doing E2E testing of one Ecommerce website

    @Regression
    Scenario: Ecommerce Product Delivery
        Given I open the Ecommerce website
        When  I add products to the cart
        Then  Success message should deliver once order successfully placed

    @Smoke
    Scenario: Entering Details Into Ecommerce Website Page
        Given I open the Ecommerce website

        When  I Enters the details into Ecom Page
            | name  | gender |
            | Rahul | Male   |

        Then  Validate the details entered
            | name  |
            | Rahul |

        Then  Click on shop Button