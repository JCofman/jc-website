import React from 'react';

import { renderWithTheme } from '../../../utils/jest-utils';
import Kbd from './Kbd';

test(`should render a kbd tag with content`, () => {
  const { container } = renderWithTheme(<Kbd>CMD</Kbd>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      font-family: var(--font-mono);
      background: var(--color-grey-400);
      border-radius: 3px;
      border-width: 1px 1px 3px;
      font-size: var(--font-size-base);
      font-weight: 800;
      line-height: var(--line-height-base);
      padding-inline: 0.4em;
      white-space: nowrap;
    }

    <kbd
      class="c0"
    >
      CMD
    </kbd>
  `);
});
