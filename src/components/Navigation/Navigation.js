import React from 'react';
import { Link } from 'gatsby';
import { withTheme } from 'styled-components';
// import { FaMoon, FaLightbulb } from 'react-icons/fa';
import Logo from '../Logo';
import { Location } from '@reach/router';

import {
  StyledNav,
  StyledNavLogo,
  StyledNavList,
  StyledNavWrapper,
  StyledNavListLink,
} from './StyledNavigation';

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
          <Link to="/">
            <StyledNavLogo
              display={location.pathname !== `/` ? `true` : `false`}
            >
              <Logo />
              {` `}
            </StyledNavLogo>
          </Link>

          <StyledNav>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
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
