import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from './Divider';
import { select } from '@storybook/addon-knobs';

storiesOf(`Divider`, module).add(`Basic`, () => {
  return <Divider />;
});
