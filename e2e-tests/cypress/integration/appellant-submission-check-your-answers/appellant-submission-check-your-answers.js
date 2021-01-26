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
  cy.wait(0);
  //cy.goToWhoAreYouPage();
  //cy.answerYesOriginalAppellant();
  //cy.clickSaveAndContinue();

  //cy.provideDetailsName('Valid Name');
  //cy.provideDetailsEmail('valid@email.com');
  //cy.clickSaveAndContinue();

  //cy.promptUserToProvidePlanningApplicationNumber();
  //cy.providePlanningApplicationNumber('ValidNumber/12345');
  //cy.goToPlanningApplicationSubmission();
  //cy.uploadPlanningApplicationFile('appeal-statement-valid.doc');
  //cy.clickSaveAndContinue();

  //cy.goToDecisionLetterPage();
  //cy.uploadDecisionLetterFile('appeal-statement-valid.doc');
  //cy.clickSaveAndContinue();

  //cy.goToAppealStatementSubmission();
  //cy.checkNoSensitiveInformation();
  //cy.uploadAppealStatementFile('appeal-statement-valid.doc');
  //cy.clickSaveAndContinue();

  //cy.goToSiteAddressPage();
  //cy.provideAddressLine1('1 Taylor Road');
  //cy.provideAddressLine2('Clifton');
  //cy.provideTownOrCity('Bristol');
  //cy.provideCounty('South Glos');
  //cy.providePostcode('BS8 1TG');
  //cy.clickSaveAndContinue();

  //cy.goToWholeSiteOwnerPage();
  //cy.answerOwnsTheWholeAppeal();
  //cy.clickSaveAndContinue();

  //cy.goToAccessSitePage();
  //cy.answerCanSeeTheWholeAppeal();
  //cy.clickSaveAndContinue();

  //cy.goToHealthAndSafetyPage();
  //cy.answerSiteHasNoIssues();
  //cy.clickSaveAndContinue();

  //cy.clickCheckYourAnswers();
});

When('the user confirms that they are happy with their answers', () => {
  cy.clickSaveAndContinue();
});

When('changes are made for About you section', () => {
  //cy.clickChangeOriginalAppellant();

  //cy.answerNoOriginalAppellant();
  //cy.clickSaveAndContinue();

  //cy.provideDetailsName('Different Name');
  //cy.provideDetailsEmail('another@example.com');

  //cy.clickSaveAndContinue();
  cy.wait(0);
});

// note: this step is very much a WIP
When('changes are made for About the original planning application section', () => {
  //cy.clickChangePlanningApplicationNumber();

  //cy.providePlanningApplicationNumber('Different/78901');
  //cy.clickSaveAndContinue();

  //cy.uploadPlanningApplicationFile('appeal-statement-valid.png');
  cy.wait(0);
});

// note: not sure why "{section}" is an unresolved symbol, this was a copy / paste from another test.
When('section {string} is accessed', (section) => {
  const { name } = getTask(section);
  cy.accessSection(name)
});

When('Check Your Answers is accessed', ()=>{
  cy.clickCheckYourAnswers();
})

Then('the user should be presented with the Terms and Conditions of the service', () => {
  cy.confirmSubmissionPage();
});

Then('the appeal information is presented', () => {

});

Then('the {string} is displayed', (section) => {
  const { url } = getTask(section);
  cy.userIsNavigatedToPage(url)
});

Then('the updated values for About you section are displayed', () => {
  // should not see the "applicant name" section
  // cy.checkAnswer('applicant-name', undefined)

  //cy.checkAnswer('your-name', 'Different Name');
  //cy.checkAnswer('your-email', 'another@example.com');
  cy.wait(0);
});

Then('the updated values for About the original planning application section are displayed', () => {
  cy.wait(0);
  //cy.confirmNavigationPlanningApplicationNumberPage();
});

When('changes are made for About your appeal section', () => {
cy.wait(0);
});

When('changes are made for Visiting the appeal site section', () => {
cy.wait(0);
});

Then('the updated values for About your appeal section are displayed', () => {
cy.wait(0);
});

Then('the updated values for Visiting the appeal site section are displayed', () => {
cy.wait(0);
});

Given('the appeal has more than one other documents', () => {
cy.wait(0);
});

Given('the appeal has no other documents', () => {
cy.wait(0);
});

Then('the absence of other document is correctly displayed', () => {
cy.wait(0);
});
