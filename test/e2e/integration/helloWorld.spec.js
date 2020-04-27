/// <reference types="cypress" />

context('Flash Cards', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })
  
    it('Should load vscode', () => {
        cy.get('.explorer-viewlet').should('exist')
    })
  })
  