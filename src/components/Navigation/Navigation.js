import React from "react";
import { Link } from "gatsby";
import { withTheme } from "styled-components";
import { FaMoon, FaLightbulb } from "react-icons/fa";
import Logo from "../Logo";

import {
  StyledNav,
  StyledNavLogo,
  StyledNavList,
  StyledNavWrapper
} from "./StyledNavigation";

const Navigation = props => {
  const {
    theme: { mode }
  } = props;
  return (
    <StyledNavWrapper>
      <StyledNavLogo>
        <Logo />{" "}
      </StyledNavLogo>
      <StyledNav>
        <StyledNavList>
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
        </StyledNavList>
      </StyledNav>
    </StyledNavWrapper>
  );
};

export default withTheme(Navigation);
