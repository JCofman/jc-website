import React from "react";
import styled from "styled-components";
import WorldMap from "./WorldMap";

const Map = styled.div`
  display: flex;
  width: 1024px;
  height: 500px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const FooterIcons = styled.div``;

const StyledFooter = styled.footer`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 100;
  text-decoration: line-through;
  padding: 15px 20px 18px;
  color: #fff;
  a:hover {
    color: #f1c40f;
  }
  a {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Map>
        <WorldMap />{" "}
      </Map>
      <FooterIcons />
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
    </StyledFooter>
  );
};

export default Footer;
