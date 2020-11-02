import React from 'react';
import { render } from '@testing-library/react';

import TableOfContents from './TableOfContents';

const items = [
  {
    url: `#exciting-stuff`,
    title: `Exciting Stuff`,
  },
  {
    url: `#what-i-have-learned-in-a-nutshell`,
    title: `What I have learned in a nutshell`,
  },
  {
    url: `#some-improvement-ideas`,
    title: `Some improvement ideas`,
  },
];

test(`Divider is rendered properly`, () => {
  const { container } = render(<TableOfContents items={items} />);

  expect(container).toMatchSnapshot();
});

test(`TableOfContents can render multiple items`, () => {
  const { getByRole } = render(<TableOfContents items={items} />);
  getByRole(`link`, { name: /some improvement ideas/i });
  getByRole(`link`, { name: /what I have learned in a nutshell/i });
  getByRole(`link`, { name: /exciting Stuff/i });
});
test(`TableOfContents can render no items`, () => {
  const { queryByRole } = render(<TableOfContents items={[]} />);
  expect(queryByRole(`link`)).not.toBeInTheDocument();
});
