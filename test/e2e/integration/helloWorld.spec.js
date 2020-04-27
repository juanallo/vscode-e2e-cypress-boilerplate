/// <reference types="cypress" />
import CommandPalette from '../pageObject/CommandPalette'

context('helloWorld Extension', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })
  
    it('Should load vscode', () => {
        cy.get('.explorer-viewlet').should('exist')
    })

    it('Should execute Hello World command', () => {
        CommandPalette.executeCommand('Hello World')
        cy.findByText('Hello World!').should('exist')
    })
  })
  