import React from "react";
import styled from "styled-components";
import theme from "styled-theming";

import { FaTwitter, FaFacebook, FaBehance, FaGithub } from "react-icons/fa";

const SocialIconColor = theme("mode", {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white
});

export const StyledSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: ${SocialIconColor};
    margin: 2rem;
  }
  svg {
    transition: all 0.5s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
      transform: scale(1.5);
    }
  }
`;

const Social = () => {
  return (
    <StyledSocial>
      <a href="https://twitter.com/JCofman">
        <FaTwitter size={24} />
      </a>
      <a href="https://www.facebook.com/jac.cof">
        <FaFacebook size={24} />
      </a>
      <a href="https://www.behance.net/cofmanjacob2a8">
        <FaBehance size={24} />
      </a>
      <a href="https://github.com/JCofman">
        <FaGithub size={24} />
      </a>
    </StyledSocial>
  );
};

export default Social;
