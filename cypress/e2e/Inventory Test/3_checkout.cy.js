import { users, url } from "./Mock";
import { doSignIn } from "./Utils";

describe("Inventory - Products", () => {
  beforeEach(() => {
    cy.visit(url);

    doSignIn(users.standard_user);    
  });

  it("Should do checkout with the correct flow", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');

    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type('First');
    cy.get('[data-test="lastName"]').type('Last');
    cy.get('[data-test="postalCode"]').type('123-4')

    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();

  });

  it("Should select some products, go to cart, and go back to continue shopping", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.get('.shopping_cart_link').click();
    cy.get('.shopping_cart_badge').should('contain', 2);

    cy.get('[data-test="continue-shopping"]').click();

    cy.url().should('include', '/inventory.html');

  });

  it("Should not continue checkout with empty delivery information", () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');

    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required');

  });
});