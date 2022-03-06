import React from 'react';

import { renderWithTheme } from '../../../utils/jest-utils';
import Kbd from './Kbd';

test(`should render a kbd tag with content`, () => {
  const { container } = renderWithTheme(<Kbd>CMD</Kbd>);
  expect(container.firstChild).toMatchInlineSnapshot();
});
