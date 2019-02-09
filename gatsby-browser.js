import React from 'react';
import Transition from './src/components/Transition';
import 'typeface-raleway';

export const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>;
};
