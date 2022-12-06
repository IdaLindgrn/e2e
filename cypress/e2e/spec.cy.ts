
describe('movieApp', () => {
  it('passes', () => {
    //Arrange
    cy.visit('http://localhost:1234')
    //Assert
    cy.get('div').contains("")
  })
})