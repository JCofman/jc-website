import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from './Divider';
import { text } from '@storybook/addon-knobs';

storiesOf(`Divider`, module).add(`Basic`, () => {
  const fillColor = text(`#000`, `#D8D8D8`);
  return <Divider fillColor={fillColor} />;
});
