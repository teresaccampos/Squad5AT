import { users, url } from './Mock';
import { doSignIn, getPrices } from './Utils';

describe('Inventory - Products', () => {
  beforeEach(() => {
    cy.visit(url);

    doSignIn(users.standard_user);
  });


  it('Should see the product details and add to cart', () => {
    cy.get('[data-test="item-4-title-link"]').click()
    cy.get('.inventory_details_desc_container').should('be.visible');
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="remove"]').should('be.visible');
    cy.get('[data-test="shopping-cart-link"]').should('contain', '1');

  });

  it('Should sort products by price properly (high to low)', async () => {
    cy.get('[data-test="product-sort-container"]').select('hilo')

      getPrices().then((prices) => {
        const sortedPrices = [...prices].sort((a, b) => b - a);
        expect(prices).to.deep.equal(sortedPrices);
      });
    });

  it('Should sort products by price properly (low to high)', async () => {
    cy.get('[data-test="product-sort-container"]').select('lohi');

    getPrices().then((prices) => {

    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).to.deep.equal(sortedPrices);
    });
  });

});