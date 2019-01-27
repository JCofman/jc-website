import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from 'styled-theming';

import Social from '../../components/Social';
import { StyledNavList } from '../../components/Navigation/StyledNavigation';
import WorldMap from '../WorldMap';

const MapColor = theme('mode', {
  light: props => props.theme.colors.white,
  dark: props => props.theme.colors.black,
});

const Map = styled.div`
  display: flex;
  max-width: ${props => props.theme.maxWidth};
  height: 500px;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  transition: background-color ${props => props.theme.themeTransition};
  svg {
    width: 100%;
    stroke: black;
    ${props => props.theme.small} {
      width: 80%;
    }
    svg g {
      stroke: ${MapColor};
    }
    ${props => props.theme.medium} {
      width: 80%;
    }
    ${props => props.theme.large} {
      width: 80%;
    }
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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

const Footer = () => {
  return (
    <StyledFooter>
      <Map>
        <WorldMap />{' '}
      </Map>
      <NavListWrapper>
        <NavList>
          <StyledNavList>
            <Link to="/">Home</Link>
          </StyledNavList>
        </NavList>
        <Social />
        <NavList>
          <StyledNavList>
            <Link to="/aboutme">About Me</Link>
          </StyledNavList>
        </NavList>
      </NavListWrapper>
    </StyledFooter>
  );
};

export default Footer;
