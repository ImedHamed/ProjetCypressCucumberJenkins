class LoginPage {
 
  static LoginPageVisit(){
    cy.visit('/') // Naviguer vers la page de login
  }

  static enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  static enterPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  static clickLoginButton() {
    cy.get('button[type="submit"]').click();
  }

  static validateDashboard() {
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  }

  static validateLoginError() {
    cy.contains("Invalid credentials").should("be.visible");
  }
}

export default LoginPage
