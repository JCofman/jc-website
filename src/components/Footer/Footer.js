import React, { Suspense } from 'react';
import styled from 'styled-components';

import Social from '../../components/Social';
import { NavLink } from '../../components/Navigation/Navigation';

const StyledMap = styled.div`
  margin: 5rem auto;
  transition: background-color ${props => props.theme.themeTransition};
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  ${props => props.theme.small} {
    margin: 0px;
  }
  ${props => props.theme.medium} {
    margin: 1rem auto;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 2rem;
  border-top: 1px solid #201c29;
`;

const NavListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  ${props => props.theme.small} {
    grid-template-columns: 1 1fr;
  }
  ${props => props.theme.medium} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${props => props.theme.large} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${props => props.theme.xlarge} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const LazyWorldMap = React.lazy(() =>
  import('../ReactMap' /* webpackChunkName: "WorldMap" */)
);

const Footer = () => {
  return (
    <StyledFooter>
      <StyledMap>
        {typeof window === 'undefined' ? null : (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyWorldMap />{' '}
          </Suspense>
        )}
      </StyledMap>
      <NavListWrapper>
        <NavList>
          <NavLink to="/">Home</NavLink>
        </NavList>
        <Social />
        <NavList>
          <NavLink to="/me">About</NavLink>
        </NavList>
      </NavListWrapper>
    </StyledFooter>
  );
};

export default Footer;
