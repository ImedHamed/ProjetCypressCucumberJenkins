import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from 'F:/cucmb/cypress/pages/loginPage.js'

Given('I navigate to the login page', ()=>{
  LoginPage.LoginPageVisit()
})

When('I enter valid username {string}', username =>{
  LoginPage.enterUsername(username)
})

When('I enter valid password {string}', password => {
  LoginPage.enterPassword(password)
})

When('I click on the login button', ()=> {
  LoginPage.clickLoginButton()
})


Then('I should be redirected to the dashboard', ()=> {
  LoginPage.validateDashboard();
})
