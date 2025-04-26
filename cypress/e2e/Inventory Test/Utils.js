export function doSignIn(user){
    cy.get('[data-test="username"]').type(user.username);
    cy.get('[data-test="password"]').type(user.password);
    cy.get('[data-test="login-button"]').click();

    cy.contains('Products');
}

export function getPrices() {
    return cy.get('[data-test="inventory_item_price"]').then(($prices) => {
      return $prices.toArray().map((el) => parseFloat(el.innerText.replace('$', '')));
    });
}