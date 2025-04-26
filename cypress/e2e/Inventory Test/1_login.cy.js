import { users, url } from "./Mock";
import { doSignIn } from "./Utils";

describe('Inventory - Login', () => {
    beforeEach(() => {
      cy.visit(url);
    })

    it('Should login with valid credentials', () => {
      doSignIn(users.standard_user);
    });
    
    it('Should login with valid credentials and do logout', () => {

      doSignIn(users.standard_user);

      cy.get('#react-burger-menu-btn').should('be.visible').click();
      cy.get('#logout_sidebar_link').should('be.visible').click();

    });

    it('Should not login with invalid credentials', () => {
      cy.get('[data-test="username"]').type('invalid_user');
      cy.get('[data-test="password"]').type('invalid_password');
      cy.get('[data-test="login-button"]').click();
  
      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username and password do not match any user in this service');
      });

    it('Should not allow "locked_out_user" do sign in', () => {
      cy.get('[data-test="username"]').type('locked_out_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Sorry, this user has been locked out.');
    });

    it('Should login with "performance_glitch_user" and wait the products page loads', () => {

      doSignIn(users.performance_glitch_user)
      
      cy.get('.inventory_list', { timeout: 10000 })
        .should('be.visible')
        .and('have.length.greaterThan', 0);
      cy.url().should('include', '/inventory.html');
      
    });
  })