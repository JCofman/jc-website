import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Link } from 'gatsby';
import { withTheme, css } from 'styled-components';
import { InstantSearch } from 'react-instantsearch-dom';
import { colors } from '../Layout/Theme';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Location } from '@reach/router';
import { FaMoon, FaSun } from 'react-icons/fa';

import Logo from '../Logo';
import SearchBar from '../SearchBar';

import {
  StyledNav,
  StyledNavLogo,
  StyledNavList,
  StyledNavWrapper,
  StyledNavListLink,
  StyledWrapper,
} from './StyledNavigation';

const searchClient = algoliasearch(`8C28RWVQVQ`, `8bf43203e68ea1c9d485ccb865e18e99`);

const StyledSearch = styled.div`
  align-self: center;
  justify-content: flex-end;
  z-index: 1000;
`;

const StyledDarkLightModeSwitcherButtonColor = theme(`mode`, {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

const StyledDarkLightModeSwitcherButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 3px;
  color: ${StyledDarkLightModeSwitcherButtonColor};
  border: 2px solid transparent;
  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
    `}
  &:hover, &:focus {
    border: 2px solid ${props => props.theme.colors.primary};

    cursor: pointer;
  }
`;

export const NavLink = props => (
  <StyledNavListLink>
    <Link {...props} />
  </StyledNavListLink>
);

const Navigation = props => {
  const {
    theme: { mode },
  } = props;
  let logoFillColor;
  if (mode === `light`) {
    logoFillColor = colors.black;
  } else {
    logoFillColor = colors.white;
  }

  return (
    <Location>
      {({ location }) => (
        <StyledWrapper>
          <StyledNavWrapper>
            <Link to="/">
              <StyledNavLogo display={location.pathname !== `/` ? `true` : `false`}>
                <Logo fillColor={logoFillColor} />
              </StyledNavLogo>
            </Link>
            <StyledSearch>
              <InstantSearch searchClient={searchClient} indexName="jacob-blog">
                <SearchBar />
              </InstantSearch>
            </StyledSearch>
            <StyledNav>
              <div>&nbsp;</div>
              <StyledNavList>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/me">About</NavLink>
                <li
                  css={`
                    padding: 1rem 1rem;
                    margin-bottom: 0;
                  `}
                >
                  <StyledDarkLightModeSwitcherButton onClick={() => props.changeTheme()}>
                    {mode === `light` ? <FaSun /> : <FaMoon />}
                  </StyledDarkLightModeSwitcherButton>
                </li>
                <li
                  css={`
                    padding: 1rem 0.5rem;
                    margin-bottom: 0;
                  `}
                >
                  <a href="https://github.com/JCofman/jc-website">GitHub </a>
                </li>
              </StyledNavList>
            </StyledNav>
          </StyledNavWrapper>
        </StyledWrapper>
      )}
    </Location>
  );
};

export default withTheme(Navigation);
