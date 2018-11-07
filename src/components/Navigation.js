import React from "react";
import { Link } from "gatsby";
import styled, { withTheme } from "styled-components";
import theme from "styled-theming";
import { FaMoon, FaLightbulb } from "react-icons/fa";

import Logo from "./Logo";
// import LogoDark from "../../assets/Logo-dark.svg";

const NavBackgroundColor = theme("mode", {
  light: props => props.theme.colors.white,
  dark: props => props.theme.colors.black
});

const StyledNavWrapper = styled.div`
  display: flex;
  height: 70px;
  z-index: 1001;
`;

const StyledLogo = styled.svg`
  width: 200px;
  height: 200px;
  display: inline-block;
  transition: all 0.25s ease-out 0s;
  z-index: 2000;
  svg {
    width: 100%;
    display: inline-block;
    transition: all 0.25s ease-out 0s;
    z-index: 2000;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 70px;
  position: fixed;
  left: 0px;
  right: 0px;
  border-top: 3px solid ${props => props.theme.colors.primary};
  background-color: ${NavBackgroundColor};
  z-index: 1000;
  float: right;
  overflow: hidden;
  box-shadow: none;
  transition: height 0.25s ease-in-out 0s, box-shadow 0.2s ease-in-out 0.05s;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
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
    color: #fff;
    @media (max-width: 700px) {
      font-size: 1.6rem;
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

const Navigation = props => {
  const {
    theme: { mode }
  } = props;

  return (
    <StyledNavWrapper>
      <StyledLogo>
        <Logo />{" "}
      </StyledLogo>
      <Nav>
        <NavList>
          <li>
            <button onClick={() => props.changeTheme()}>
              {mode === "light" ? <FaLightbulb /> : <FaMoon />}
            </button>
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutMe/">About Me</Link>
          </li>
          <li>
            <Link to="/Blog/">Blog</Link>
          </li>
        </NavList>
      </Nav>
    </StyledNavWrapper>
  );
};

export default withTheme(Navigation);
