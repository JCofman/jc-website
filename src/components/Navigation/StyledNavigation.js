import styled from "styled-components";
import theme from "styled-theming";

const NavBackgroundColor = theme("mode", {
  light: props => props.theme.colors.white,
  dark: props => props.theme.colors.black
});

const NavFontColor = theme("mode", {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white
});

export const StyledNavWrapper = styled.div`
  display: flex;
  height: 70px;
  z-index: 1001;
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
  border-top: 1px solid #201c29;
  border-bottom: 1px solid #201c29;
  background-color: ${NavBackgroundColor};
  z-index: 1000;
  float: right;
  overflow: hidden;
  box-shadow: none;
  transition: height 0.25s ease-in-out 0s, box-shadow 0.2s ease-in-out 0.05s,
    background-color ${props => props.theme.themeTransition};
`;

export const StyledNavLogo = styled.svg`
  width: 200px;
  height: 200px;
  transition: all 0.25s ease-out 0s;
  z-index: 2000;
  display: none;
  ${props => props.theme.small} {
    display: inline-block;
  }
  svg {
    width: 100%;
    display: inline-block;
    transition: all 0.25s ease-out 0s;
    z-index: 2000;
  }
`;

export const StyledNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  a,
  button {
    font-size: 2rem;
    font-weight: 800;
    padding: 1rem 3rem;
    background: none;
    border: none;
    display: flex;
    position: relative;
    cursor: pointer;
    align-items: center;
    text-transform: uppercase;
    color: ${NavFontColor};
    ${props => props.theme.medium} {
      font-size: 1.6rem;
    }
    ${props => props.theme.small} {
      font-size: 1.4rem;
    }

    &:after {
      height: 2px;
      background: #50e3c2;
      content: "";
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
