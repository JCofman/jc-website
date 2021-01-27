import React, { Suspense } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import Social from '../../components/Social';
import { NavLink } from '../../components/Navigation/Navigation';

const StyledMap = styled.div`
  margin: 5rem auto;
  transition: background-color ${(props) => props.theme.themeTransition};
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  ${(props) => props.theme.small} {
    margin: 0px;
  }
  ${(props) => props.theme.medium} {
    margin: 1rem auto;
  }
`;

export const StyledFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  ${(props) => props.theme.small} {
    grid-template-columns: 1 1fr;
  }
  ${(props) => props.theme.medium} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${(props) => props.theme.large} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${(props) => props.theme.xlarge} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NavFontColor = theme(`mode`, {
  light: (props) => props.theme.colors.black,
  dark: (props) => props.theme.colors.white,
});

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterListLink = styled.li`
  margin-bottom: 0px;

  a {
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 3rem;
    margin-bottom: 0px;
    background: none;
    border: none;
    display: flex;
    position: relative;
    cursor: pointer;
    align-items: center;
    text-transform: uppercase;
    color: ${NavFontColor};

    &:after {
      height: 2px;
      background: #50e3c2;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
`;
const LazyWorldMap = React.lazy(() => import(`../ReactMap` /* webpackChunkName: "WorldMap" */));

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooter>
        <StyledMap>
          {typeof window === `undefined` ? null : (
            <Suspense fallback={<div>Loading...</div>}>
              <LazyWorldMap />
              {` `}
            </Suspense>
          )}
        </StyledMap>
        <NavListWrapper>
          <NavList>
            <NavLink to="/">Home</NavLink>
            <FooterListLink></FooterListLink>
          </NavList>
          <Social />
          <NavList>
            <NavLink to="/about">About</NavLink>
          </NavList>
        </NavListWrapper>
      </StyledFooter>
    </StyledFooterWrapper>
  );
};

export default Footer;
