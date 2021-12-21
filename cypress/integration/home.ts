describe(`home page render`, () => {
  it(`should render home page`, () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'cy'.
    cy.visit(`/`);
  });
});
