import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Heading, { APPEARANCES } from './Heading';
// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

Object.keys(APPEARANCES).forEach(appearance => {
  test(`should render a ${appearance} header tags`, () => {
    const { container } = render(<Heading appearance={appearance}>I am a {appearance} headline</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
