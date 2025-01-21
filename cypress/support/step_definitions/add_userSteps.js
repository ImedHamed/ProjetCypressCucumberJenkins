import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from 'F:/cucmb/cypress/pages/loginPage.js';
import UserManagementPage from 'F:/cucmb/cypress/pages/add_userPage.js';




  Given('I am logged in as an admin', ()=> {
    LoginPage.LoginPageVisit()
    LoginPage.enterUsername("Admin")
    LoginPage.enterPassword("admin123")
    LoginPage.clickLoginButton()

  });

  When('I navigate to the "User Management" page', ()=> {
    UserManagementPage.navigateToUserManagement() 
  });

  When('I click the "Add" button',  ()=> {
    UserManagementPage.clickAddButton()
  });

  When('I fill in the user details', ()=> {
    UserManagementPage.fillUserDetails({
        employeeName: "SHARATH  AKASH",
        username: "Imeeed11Imeeed",
        password: "Password123@",
        confirmPassword: "Password123@",
      });
  });

  When('I click on "Save"', ()=> { 
    UserManagementPage.clickSave()
  });

  Then('the new user should appear in the user list', username => {
    UserManagementPage.verifyUserInList(username)
  });





