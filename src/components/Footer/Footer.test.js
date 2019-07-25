import React from 'react';
import { render, wait } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import Footer from './Footer';
// automatically unmount and cleanup DOM after the test is finished.

test(`Footer is rendered properly`, async () => {
  const { getByText } = render(<Footer />);

  getByText(/Privacy Policy/i);
});

test(`Footer is rendered with async loaded map`, async () => {
  const { container } = render(<Footer />);
  await wait();
  expect(container).toMatchSnapshot();
});
