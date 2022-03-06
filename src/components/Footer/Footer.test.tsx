import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test(`Footer is rendered properly`, async () => {
  const { getByText } = render(<Footer />);

  getByText(/Home/i);
  getByText(/About/i);
  expect(getByText(/About/i)).toBeDefined();
});
