/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.intercept('https://jsonplaceholder.typicode.com/users/1').as(
      'testRequest',
    );

    cy.visit('http://localhost:5173/');

    cy.get('[data-cy="EditorSidebar-item-2"] > div').click();

    cy.get('[data-cy="EditorContent-1"]').click();
    cy.get('[data-cy="RequestTab-sendRequest"] > div').click();

    cy.wait('@testRequest');

    cy.get('[data-cy="EditorContent-2"]').click();
    cy.get('[data-cy="PropertyJsonPath-add"] > div').click();

    cy.get('[data-cy=PropertyJsonPath-0-name]').click();
    cy.get('[data-cy=PropertyJsonPath-0-name]').type('name');
    cy.get('[data-cy=PropertyJsonPath-0-value]').click();
    cy.get('[data-cy=PropertyJsonPath-0-value]').type('$.name');
  });
});
