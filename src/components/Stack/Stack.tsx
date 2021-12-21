import React from 'react';
import styled, { CSSProperties } from 'styled-components';

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap, 1.6rem);
`;

const Stack = (props: { children: React.ReactNode; gap?: string }) => {
  const { children, gap = '1.6rem' } = props;
  return <StyledStack style={{ '--gap': gap } as CSSProperties}>{children}</StyledStack>;
};

export default Stack;
