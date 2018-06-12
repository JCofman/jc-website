import React from "react";
import styled from "styled-components";
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
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 100;
  padding: 15px 20px 18px;
  color: #fff;
  a:hover {
    color: #f1c40f;
  }
  a {
    color: #fff;
  }
`;

const Navigation = () => {
  const onMouseOver = el => {
    console.log(el);
    console.log(el.target);
    console.log("test");
  };
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <a href="./">Home</a>
        </NavListItem>
        <NavListItem>
          <a href="./">About Me</a>
        </NavListItem>
        <NavListItem>
          <a href="./">Blog</a>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
