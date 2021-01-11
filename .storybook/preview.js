import React from 'react';
import Theme from '../src/components/Layout/Theme';
import { GlobalStyle } from '../src/components/Layout/Layout';
import { ThemeProvider } from 'styled-components';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },

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
  },
};
