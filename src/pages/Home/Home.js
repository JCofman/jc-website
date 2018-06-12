import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";
import HedaerBG from "./homebg.jpg";
import Logo from "./Logo.svg";
import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaBehance from "react-icons/lib/fa/behance";
import FaGithub from "react-icons/lib/fa/github";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIcons = styled.svg`
  margin: 12px;
  width: 48px;
`;

const HeaderBG = styled.div`
  /* Full height */
  background: url(${HedaerBG}) no-repeat center right fixed;
  background-size: auto;
  background-repeat: no-repeat;
  height: 1024px;
  width: 100%;
  @media (max-width: 1024px) {
    height: 800px;

    background: url(${HedaerBG}) no-repeat center center fixed;
  }
  @media (max-width: 700px) {
    height: 600px;

    background: url(${HedaerBG}) no-repeat center center fixed;
  }
`;

const StyledLogo = styled.svg`
  height: 800px;
  width: 600px;
  padding: 50px;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const Home = () => (
  <HeaderBG>
    <Wrapper>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <Information>
        <p>HEY EVERYONE MY NAME IS JACOB COFMAN</p>
        <h1>I LOVE WEB DEVELOPMENT, VOLLEYBALL AND TRAVELLING</h1>
      </Information>
    </Wrapper>
    <Social>
      <SocialIcons>
        <FaTwitter size={24} />
      </SocialIcons>
      <SocialIcons>
        <FaFacebook size={24} />
      </SocialIcons>
      <SocialIcons>
        <FaBehance size={24} />
      </SocialIcons>
      <SocialIcons>
        <FaGithub size={24} />
      </SocialIcons>
    </Social>
  </HeaderBG>
);

export default Home;
