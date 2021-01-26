import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user checks the status of their appeal', () => {
  cy.goToTaskListPage();
});

When('the user selects to provide their planning application number', () => {
  cy.promptUserToProvidePlanningApplicationNumber();
});

Then('the user should be presented with opportunity to provide their planning application number', () => {
  cy.confirmUserPresentedWithProvidePlanningApplicationNumber();
});

Then('the multiple other documents are correctly displayed', () => {
  cy.wait(0);
});

