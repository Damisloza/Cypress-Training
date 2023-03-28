Feature: Amazon search

    Background:
        Given I navigate to Amazon

    Scenario Outline: Search items in Amazon ('<product>')
        When In the searchBar type '<product>' and search
        When In the resultPage click in first resultPage
        Then Print price

        Examples:
            | product            |
            | iPhone 14 pro max  |
            | Macbook Air M1     |
            | Samsung Galaxy S23 |
