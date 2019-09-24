import React from 'react';
import { render, wait } from '@testing-library/react';

import Footer from './Footer';

test(`Footer is rendered properly`, async () => {
  const { getByText } = render(<Footer />);

  getByText(/Privacy Policy/i);
});

test(`Footer is rendered with async loaded map`, async () => {
  const { container } = render(<Footer />);
  await wait();
  expect(container).toMatchSnapshot();
});
