@Login
@Regression
Feature: Login Tests Feature
    This tests covers the login functionalities 

@Acceptance @test
Scenario Outline: Verify that a user can login to OSSR
    Given User is in the landing page
    When User <user> logins to OSSR
    Then User is on the home page

Examples:
    | user              |
    | GasOnly           |