import styled from 'styled-components';
import theme from 'styled-theming';
import { zIndexLogo, zIndexNavigation } from '../../components/Styles/zIndex';

const NavBackgroundColor = theme(`mode`, {
  light: props => props.theme.colors.white,
  dark: props => props.theme.colors.black,
});

const NavFontColor = theme(`mode`, {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

export const StyledNavWrapper = styled.div`
  display: flex;
  height: 70px;
  z-index: ${zIndexNavigation};
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  height: 70px;
  position: fixed;
  left: 0px;
  right: 0px;
  border-top: 2px solid ${props => props.theme.colors.primary};
  border-bottom: 1px solid #201c29;
  background-color: ${NavBackgroundColor};
  z-index: ${zIndexNavigation};
  float: right;
  overflow: hidden;
  box-shadow: none;
  transition: height 0.25s ease-in-out 0s, box-shadow 0.2s ease-in-out 0.05s,
    background-color ${props => props.theme.themeTransition};
`;

export const StyledNavLogo = styled.svg`
  width: 80px;
  height: 140px;
  transition: all 0.25s ease-out 0s;
  margin-top: 5px; /* green top border margin */
  z-index: ${zIndexLogo};

  ${props => props.theme.xsmall} {
    width: 150px;
    height: 150px;
  }
  ${props => props.theme.medium} {
    top: 3px;
    width: 120px;
    height: 140px;
    left: 70px;
    display: inline-block;
  }
  ${props => props.theme.large} {
    display: ${props => (props.display === `true` ? `inline-block` : `none`)};
    position: fixed;
  }
  svg {
    width: 100%;
    display: inline-block;
    transition: all 0.25s ease-out 0s;
    z-index: ${zIndexLogo};
  }
`;

export const StyledNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const StyledNavListLink = styled.li`
  margin-bottom: 0px;
  a,
  button {
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 3rem;
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
      bottom: 0.1em;
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
