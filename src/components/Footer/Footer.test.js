import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Footer from './Footer';
// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test(`Footer is rendered properly`, async () => {
  const { getByText, debug } = render(<Footer />);
  getByText(/Privacy Policy/i);
});
