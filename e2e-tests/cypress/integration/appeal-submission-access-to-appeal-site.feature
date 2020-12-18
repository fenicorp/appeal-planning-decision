Feature: Access to the Appeal Site
I want to notify the Planning Inspectorate if access to the appeal site is restricted so they are aware to contact me for access.

    Scenario: Prospective appellant provide access to the appeal site
        Given the user is prompted to provide access to the inspector visiting the appeal site
        When the user selects "Yes" to provide access
        Then the user can see the selected option "Yes is" submitted

     Scenario: Prospective appellant does not provide additional information and access to the appeal site
        Given the user is prompted to provide access to the inspector visiting the appeal site
        When the user selects "No" to provide access
        And the user "does not" provide additional information
        Then the user is informed that "further information is required to gain access to the restricted site"
        And the user can see the selected option "is not" submitted

      Scenario: Prospective appellant provide additional information on restricted access to the appeal site
        Given the user is prompted to provide access to the inspector visiting the appeal site
        When the user selects "No" to provide access
        And the user "does" provide additional information
        Then the user can see the selected option "No is" submitted

    Scenario: Prospective appellant does not select any option to provide access to the appeal site
        Given the user is prompted to provide access to the inspector visiting the appeal site
        When the user does not select any option
        Then the user is told to "Select Yes if the appeal site can be seen from a public road"











