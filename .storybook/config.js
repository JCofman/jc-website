import React from 'react';
import 'typeface-raleway';
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { addParameters } from '@storybook/react'; // <- or your storybook framework
import { withKnobs } from '@storybook/addon-knobs';

import Theme from '../src/components/Layout/Theme';
import { GlobalStyle } from '../src/components/Layout/Layout';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));
addDecorator(withA11y);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
addDecorator(withKnobs);

addParameters({
  backgrounds: [
    {
      name: 'white',
      value: `#F4F4F4`,
      default: true,
    },
    {
      name: `black`,
      value: `#010101`,
    },
  ],
});
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};
configure(loadStories, module);
