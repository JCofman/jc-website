import React from 'react';
import styled from 'styled-components';

const StyledKbd = styled.kbd`
  font-family: var(--font-mono);
  background: var(--color-grey-400);
  border-radius: 3px;
  border-width: 1px 1px 3px;
  font-size: var(--font-size-base);
  font-weight: 800;
  line-height: var(--line-height-base);
  padding-inline: 0.4em;
  white-space: nowrap;
`;

const Kbd = (props) => {
  const { children, ...rest } = props;
  return <StyledKbd {...rest}>{children}</StyledKbd>;
};

export default Kbd;
