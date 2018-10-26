import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "../pages/Home/Logo";

const Nav = styled.nav`
  display: flex;
  float: right;
  overflow: hidden;
`;
const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavListItem = styled.li`
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 800;
  padding: 15px 20px 18px;
  color: #fff;
  a:hover {
    color: #f1c40f;
  }
  a {
    color: #fff;
  }
`;
const StyledLogo = styled.svg`
  display: none;
  float: left;
  margin-left: 20px;

  height: 120px;
  width: 80px;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const Navigation = () => {
  return (
    <div>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <Nav>
        <NavList>
          <NavListItem>
            <Link to="/Home/">Home</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/AboutMe/">About Me</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/Blog/">Blog</Link>
          </NavListItem>
        </NavList>
      </Nav>
    </div>
  );
};

export default Navigation;
