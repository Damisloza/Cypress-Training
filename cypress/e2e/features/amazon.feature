Feature: Amazon search

    Background:
        Given I navigate to Amazon

    Scenario: iPhone 14 Pro search
        When In the searchBar type iPhone 14 Pro and search
            | product   |
            | iPhone 14 |
        When In the resultPage click in first resultPage
        Then Print price

    Scenario: Macbook Air search
        When In the searchBar type iPhone 14 Pro and search
            | product     |
            | Macbook Air |
        When In the resultPage click in first resultPage
        Then Print price

    Scenario: Samsung Galaxy S23 search
        When In the searchBar type iPhone 14 Pro and search
            | product     |
            | Samsung Galaxy S23 |
        When In the resultPage click in first resultPage
        Then Print price
