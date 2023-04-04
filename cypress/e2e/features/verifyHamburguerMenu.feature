Feature: Verify hamburguer left menu

    Background:
        Given I navigate to Amazon

    Scenario: Verify hamburguer left menu
        When Click on the left menu All
        Then Verify elements in the menu section

    Scenario: Verify hamburguer left menu - Negative scenario
        When Click on the left menu All
        Then Verify elements in the menu section NOT have visible