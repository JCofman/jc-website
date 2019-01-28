import React from 'react';
import { Link } from 'gatsby';
import { withTheme } from 'styled-components';
import { FaMoon, FaLightbulb } from 'react-icons/fa';
import Logo from '../Logo';

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
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        // todo find a good way addin hint to user where he ist
        // return {
        //   style: {
        //     color: !isCurrent && '#535B68',
        //   },
        // };
      }}
    />
  </StyledNavListLink>
);

const Navigation = props => {
  const {
    theme: { mode },
  } = props;
  return (
    <StyledNavWrapper>
      <StyledNavLogo>
        <Logo />{' '}
      </StyledNavLogo>
      <StyledNav>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <StyledNavList>
          {/* <li>
            <button disabled onClick={() => props.changeTheme()}>
              {mode === "light" ? <FaLightbulb /> : <FaMoon />}
            </button>
          </li> */}
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/me">About Me</NavLink>
          </li>
        </StyledNavList>
      </StyledNav>
    </StyledNavWrapper>
  );
};

export default withTheme(Navigation);
