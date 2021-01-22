import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getTask } from '../common/task'

Given('the user is presented with the answers they had provided', () => {
  cy.goToCheckYourAnswersPage();
});

Given('the completed task list page is displayed', () => {
  cy.goToTaskListPage();
});

Given('the check your answers page is displayed', () => {
  cy.goToCheckYourAnswersPage();
});

Given('Check Your Answers is presented', () => {
  cy.goToWhoAreYouPage();
  cy.answerYesOriginalAppellant();
  cy.clickSaveAndContinue();

  cy.provideDetailsName('Valid Name');
  cy.provideDetailsEmail('valid@email.com');
  cy.clickSaveAndContinue();

  cy.promptUserToProvidePlanningApplicationNumber();
  cy.providePlanningApplicationNumber('ValidNumber/12345');
  cy.goToPlanningApplicationSubmission();
  cy.uploadPlanningApplicationFile('appeal-statement-valid.doc');
  cy.clickSaveAndContinue();

  cy.goToDecisionLetterPage();
  cy.uploadDecisionLetterFile('appeal-statement-valid.doc');
  cy.clickSaveAndContinue();

  cy.goToAppealStatementSubmission();
  cy.checkNoSensitiveInformation();
  cy.uploadAppealStatementFile('appeal-statement-valid.doc');
  cy.clickSaveAndContinue();

  cy.goToSiteAddressPage();
  cy.provideAddressLine1('1 Taylor Road');
  cy.provideAddressLine2('Clifton');
  cy.provideTownOrCity('Bristol');
  cy.provideCounty('South Glos');
  cy.providePostcode('BS8 1TG');
  cy.clickSaveAndContinue();

  cy.goToWholeSiteOwnerPage();
  cy.answerOwnsTheWholeAppeal();
  cy.clickSaveAndContinue();

  cy.goToAccessSitePage();
  cy.answerCanSeeTheWholeAppeal();
  cy.clickSaveAndContinue();

  cy.goToHealthAndSafetyPage();
  cy.answerSiteHasNoIssues();
  cy.clickSaveAndContinue();

  cy.clickCheckYourAnswers();
});

When('the user confirms that they are happy with their answers', () => {
  cy.clickSaveAndContinue();
});

When('changes are made for About you section', () => {
  cy.clickChangeOriginalAppellant();

  cy.answerNoOriginalAppellant();
  cy.clickSaveAndContinue();

  cy.provideDetailsName('Different Name');
  cy.provideDetailsEmail('another@example.com');

  cy.clickSaveAndContinue();
});

// note: this step is very much a WIP
When('changes are made for About the original planning application section', () => {
  cy.clickChangePlanningApplicationNumber();

  cy.providePlanningApplicationNumber('Different/78901');
  cy.clickSaveAndContinue();

  cy.uploadPlanningApplicationFile('appeal-statement-valid.png');
});

// note: not sure why "{section}" is an unresolved symbol, this was a copy / paste from another test.
When('section {section} is accessed', (section) => {
  const { name } = getTask(section);
  cy.accessSection(name)
});

Then('the user should be presented with the Terms and Conditions of the service', () => {
  cy.confirmSubmissionPage();
});

Then('the appeal information is presented', () => {});

Then('the {section} is displayed', (section) => {
  const { url } = getTask(section);
  cy.userIsNavigatedToPage(url)
});

Then('the updated values for About you section are displayed', () => {
  // should not see the "applicant name" section
  // cy.checkAnswer('applicant-name', undefined)

  cy.checkAnswer('your-name', 'Different Name');
  cy.checkAnswer('your-email', 'another@example.com');
});
