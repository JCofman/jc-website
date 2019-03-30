import React from 'react';
import { oneOf, any } from 'prop-types';

export const APPEARANCES = {
  H1: `H1`,
  H2: `H2`,
  H3: `H3`,
  H4: `H4`,
  H5: `H5`,
  H6: `H6`,
};

const Heading = ({ appearance, children, ...rest }) => {
  const { ...headingProps } = rest;
  return React.createElement(
    appearance.toLowerCase(),
    {
      ...headingProps,
    },
    children
  );
};

Heading.displayName = `Heading`;

Heading.propTypes = {
  /** any nodes to be rendered (usually text nodes) */
  children: any,

  /** typography of the heading */
  appearance: oneOf(Object.keys(APPEARANCES)),
};

Heading.defaultProps = {
  appearance: APPEARANCES.H1,
};

export default Heading;
