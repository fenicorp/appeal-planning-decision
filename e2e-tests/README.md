# Cypress E2E tests

### Overview

The [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) framework provides support 
for automated testing and BDD. 

#### Video artefacts

Each test run can generate a video record of the tests and the browser behaviour. In addition to their use in 
ci pipelines and local development, these recordings have potential to serve as evidence of delivery of required 
behaviour e.g. played at demo events. Typically, the tests should complete as quickly as possible and this should be 
the default. However, when producing video artefacts intended to be presented it may be convenient to manage periods 
of waiting or pausing during the test execution. Environment variables can be used for this configuration and one 
named `demoDelay` is provided in the `cypress.json` file. The variable can be used in statements 
like `cy.wait(Cypress.env('demoDelay'))` to control wait times i.e. the value is the required delay in milliseconds.
From the `e2e-tests` folder, the tests can be run locally setting the delay period with commands like:
```
node_modules/cypress/bin/cypress run --headed -b chrome --env demoDelay=1000
```