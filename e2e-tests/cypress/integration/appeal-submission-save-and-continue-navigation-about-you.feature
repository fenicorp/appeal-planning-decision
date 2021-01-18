@wip
@UI-ONLY
Feature: Appeal Submission Save and Continue Navigation - About You
    As a prospective appellant, I want to be taken through the submission process efficiently
    so that I do not get confused.
    This feature file covers the navigation between the About You section to the task-list
    The navigation does not depend on the status of a sub-section

  Scenario: Navigation - Is original applicant   
    Given the "Who are you" is presented
    When the "Who are you" is submitted with valid values
    Then the "Your details" is presented
       
  Scenario: Navigation - Your details for original applicant
    Given the "Your details" is presented for an original applicant
    When the "Your details" is submitted with valid values
    Then the "Appeal tasks" is presented

# This scenario should deal with user selecting No(in 'who-are-you' page) and then navigate to your-details page
  Scenario: Navigation - Not the original applicant
    Given the "Your details" is presented for not the original applicant
    When the "Your details" is submitted with valid values
    Then the "Applicant name" is presented

  Scenario: Navigation - Applicant name - not the original applicant    
    Given the "Applicant name" is presented
    When the "Applicant name" is submitted with valid values
    Then the "Appeal tasks" is presented
