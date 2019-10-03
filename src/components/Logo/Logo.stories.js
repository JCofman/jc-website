import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Logo from './Logo';

storiesOf(`Logo`, module).add(`Basic`, () => {
  const customWidth = text(`500px`, `200px`);

  return (
    <>
      <Logo width={customWidth}></Logo>
    </>
  );
});
