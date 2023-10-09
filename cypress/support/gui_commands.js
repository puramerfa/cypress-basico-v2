Cypress.Commands.add('enviarFormulario', project => {
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