Feature: Login functionality for OrangeHRM

  Scenario: Valid login with admin credentials
    Given I navigate to the login page
    When I enter valid username "Admin"
    And I enter valid password "admin123"
    And I click on the login button
    Then I should be redirected to the dashboard
