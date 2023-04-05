Feature: Reqres API

    Scenario: Create three scripts for REQRES
        Given Navigate to Reqres
        When Create user - POST
        When Update user - PUT
        Then Delete user - DELETE