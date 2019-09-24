import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Link } from 'gatsby';
import { withTheme } from 'styled-components';
import { InstantSearch } from 'react-instantsearch-dom';
import SearchBar from '../SearchBar';
import styled from 'styled-components';
import { Location } from '@reach/router';

// import { FaMoon, FaLightbulb } from 'react-icons/fa';
import Logo from '../Logo';

import { StyledNav, StyledNavLogo, StyledNavList, StyledNavWrapper, StyledNavListLink } from './StyledNavigation';

const searchClient = algoliasearch(`8C28RWVQVQ`, `8bf43203e68ea1c9d485ccb865e18e99`);

const StyledSearch = styled.div`
  align-self: center;
  justify-self: right;
  justify-content: center;
  display: none;

  ${props => props.theme.medium} {
    display: inline;
  }
`;

export const NavLink = props => (
  <StyledNavListLink>
    <Link
      {...props}
      // getProps={({ isCurrent }) => {
      //   the object returned here is passed to the
      //   anchor element's props
      //   todo find a good way addin hint to user where he ist
      //   return {
      //     style: {
      //       color: !isCurrent && '#535B68',
      //     },
      //   };
      // }}
    />
  </StyledNavListLink>
);

const Navigation = () => {
  // const {
  //   theme: { mode },
  // } = props;
  return (
    <Location>
      {({ location }) => (
        <StyledNavWrapper>
          <Link style={{ display: `flex` }} to="/">
            <StyledNavLogo display={location.pathname !== `/` ? `true` : `false`}>
              <Logo />
              {` `}
            </StyledNavLogo>
          </Link>

          <StyledNav>
            <div>&nbsp;</div>
            <StyledSearch>
              <InstantSearch searchClient={searchClient} indexName="jacob-blog">
                <SearchBar />
              </InstantSearch>
            </StyledSearch>
            <StyledNavList>
              {/* <li>
            <button disabled onClick={() => props.changeTheme()}>
              {mode === "light" ? <FaLightbulb /> : <FaMoon />}
            </button>
          </li> */}
              <NavLink to="/">Home</NavLink>
              <NavLink to="/me">About</NavLink>
            </StyledNavList>
          </StyledNav>
        </StyledNavWrapper>
      )}
    </Location>
  );
};

export default withTheme(Navigation);
