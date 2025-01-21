

class UserManagementPage {
    
    static navigateToUserManagement() {
        cy.get("nav").contains("Admin").click()
        cy.contains("User Management").click()
    }
  
    static clickAddButton() {
      cy.contains("Add").click();
    }
  
    static fillUserDetails({ employeeName, username, password, confirmPassword }) {
      cy.get('input[placeholder="Type for hints..."]').type(employeeName);
      cy.get('input.oxd-input.oxd-input--active').eq(1).type(username);
      cy.get('input[type="password"]').eq(0).type(password);
      cy.get('input[type="password"]').eq(1).type(confirmPassword);
      // Sélectionner des options dans les menus déroulants
    cy.get('.oxd-select-text').eq(0).click(); // User Role
    cy.contains('Admin').click();
    cy.get('.oxd-select-text').eq(1).click(); // Status
    cy.contains('Enabled').click();
    }
  
    static clickSave() {
      cy.get('button[type="submit"]').click();
    }
  
    static verifyUserInList(username) {
      // Vérifiez que la liste des utilisateurs est visible
      cy.get('div[role="table"]', { timeout: 10000 }).should('be.visible');

      // Vérifiez que l'utilisateur ajouté est présent
      const usernameToSearch = 'johndoe';

      cy.get('div.oxd-table-row.oxd-table-row--with-border', { timeout: 10000 })
      .should('be.visible')
      
      



    }
  }
  
  export default UserManagementPage
  