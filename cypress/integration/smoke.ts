describe(`Website smoke tests`, () => {
  it(`should work`, () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'cy'.
    cy.visit(`/`);
  });

  it(`should be able to visit about me`, () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'cy'.
    cy.visit(`/`)
      .getByText(/about/i)
      .click()
      .getByText(/Jacob Cofman/i);
  });
});
