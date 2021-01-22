module.exports = (sectionName) => {
  // click the appropriate link in the check your answers page
  cy.get(`[data-cy="${sectionName}"]`).click();

  // pause long enough to capture a nice video
  cy.wait(Cypress.env('demoDelay'));
};
