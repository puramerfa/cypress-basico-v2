/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {

    beforeEach(() => {
        cy.visit('./src/index.html')
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })


    it('Enviar formulário com sucesso usando custom command', function () {
        cy.enviarFormulario()

    })
    it('Enviar formulário', function () {
        cy.get('#firstName')
          .should('be.visible')
          .type('Guilherme', {delay:0})

        cy.get('#lastName')
          .should('be.visible')
          .type('Mello')

        cy.get('#email')
            .should('be.visible')
            .type('guilehrerasdfdslk@gmail.com', {delay:0})

        cy.get('#open-text-area')
            .should('be.visible')
            .type('Teste de execução cypres para uma execuçãaaaaaaaaaaaaaaaaaaao long e demorada', {delay:0})
        cy.get('.button').click()

        cy.get('#subtitle').should('be.visible')

    })

    it('Enviar formulário com erro', function () {
        cy.get('#firstName')
          .should('be.visible')
          .type('Guilherme', {delay:0})

        cy.get('#lastName')
          .should('be.visible')
          .type('Mello')

        cy.get('#email')
            .should('be.visible')
            .type('guilehrerasdfdslkgmail.com', {delay:0})

        cy.get('#open-text-area')
            .should('be.visible')
            .type('Teste de execução cypres para uma execuçãaaaaaaaaaaaaaaaaaaao long e demorada', {delay:0})
        cy.get('.button').click()

        cy.get('.error').should('be.visible')

    })
    
    it('Telefone obrigatório mas não preenchido', function () {
        cy.get('#firstName')
          .should('be.visible')
          .type('Guilherme', {delay:0})

        cy.get('#lastName')
          .should('be.visible')
          .type('Mello')

        cy.get('#email')
            .should('be.visible')
            .type('guilehrerasdfdslkgmail.com', {delay:0})

        cy.get('#open-text-area')
            .should('be.visible')
            .type('Teste de execução cypres para uma execuçãaaaaaaaaaaaaaaaaaaao long e demorada', {delay:0})
        cy.get('.button').click()

        cy.get('#phone-checkbox').check()

        cy.get('#phone').type('sda1fasdf').should('have.value','12')

        cy.get('.error').should('be.visible')

    })

    it('Anexar arquivo', function () {
      cy.get('#file-upload')
        .selectFile('cypress/fixtures/example.json')
     

  })

  it('Verifica que a politica privacidade abre em outra aba', function () {
    cy.get('#privacy a')
    cy.get('#privacy a').should('have.attr','target','_blank')
   

})
it('Verifica que a politica privacidade abre em outra aba', function () {
  
  cy.get('#privacy a').invoke('removeAttr', 'target')
  cy.get('#privacy a').click()
  cy.get('#title').should('have.text', 'CAC TAT - Política de privacidade')

})
})