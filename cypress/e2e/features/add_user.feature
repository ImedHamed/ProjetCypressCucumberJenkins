
Feature: Add a new user to the system

  Scenario: Admin adds a new user
    Given I am logged in as an admin
    When I navigate to the "User Management" page
    And I click the "Add" button
    And I fill in the user details 
    And I click on "Save"
    Then the new user should appear in the user list
