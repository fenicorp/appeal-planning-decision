module.exports = () => {
  cy.get('[data-cy="link-check-your-answers"]').first().click();
  cy.wait(Cypress.env('demoDelay'));
};
