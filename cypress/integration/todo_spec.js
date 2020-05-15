describe('TodoMVC', function() {
    beforeEach(function() {
      // Load our app before starting each test case
      cy.visit('https://pedantic-leavitt-6e8302.netlify.app/')
    })
  
    it('Loads the TodoMVC app', function() {
      cy.get('h1').should('exist')
      cy.percySnapshot()
    })
  
    // it('With no todos, hides main section and footer', function() {
    //   cy.get('.main').should('not.be.visible');
    //   cy.get('.footer').should('not.be.visible');
    // })
  
    // it('Accepts a new todo', function() {
    //   // Before adding a todo, we should have none.
    //   cy.get('.todo-count').should('contain', '0 items left')
    //   cy.get('.todo-list').children('li').should('have.length', 0)
  
    //   // Add a new todo item.
    //   cy.get('.new-todo').should('exist')
    //   cy.get('.new-todo').type('New fancy todo {enter}')
    //   // Take a Percy snapshot with different browser widths.
    //   cy.percySnapshot('New todo test', {widths: [300, 600, 1000]})
  
    //   // We should have 1 todo item showing in the todo list and the footer.
    //   cy.get('.todo-list').children('li').should('have.length', 1)
    //   cy.get('.todo-count').should('contain', '1 item left')
    // })
  
    // it('Lets you check off a todo', function() {
    //   // Enter a new todo.
    //   cy.get('.new-todo').type('A thing to accomplish {enter}')
    //   cy.get('.todo-count').should('contain', '1 item left')
  
    //   // Click it off -- it should be marked as completed.
    //   cy.get('.toggle').click()
    //   cy.get('.todo-count').should('contain', '0 items left')
    //   cy.percySnapshot()
    // })
  })