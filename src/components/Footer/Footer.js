import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import theme from "styled-theming";

const FooterBackground = theme("mode", {
  light: props => props.theme.colors.white,
  dark: props => props.theme.colors.black
});

import WorldMap from "../WorldMap";

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
  background: ${FooterBackground};
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
          <Link to="/">Home</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/aboutme">About Me</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/blog">Blog</Link>
        </NavListItem>
      </NavList>
    </StyledFooter>
  );
};

export default Footer;
