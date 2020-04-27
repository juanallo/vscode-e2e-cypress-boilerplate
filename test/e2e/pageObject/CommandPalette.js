export default class CommandPalette {

    static open(){
        return cy.get('.explorer-viewlet')
        .type('{meta}{shift}P')
    }
    static type(command){ 
        this.open()
        return cy.focused().type(command)
    }

    static executeCommand(command) {
        this.type(command).type('{enter}')
    }
}