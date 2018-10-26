import React from "react";
import styled from "styled-components";
import HedaerBG from "./homebg.jpg";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import { FaTwitter, FaFacebook, FaBehance, FaGithub } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    padding-top: 200px;
    padding-bottom: 100px;
  }
  @media (max-width: 700px) {
    padding-top: 200px;
    padding-bottom: 30px;
  }
  & > p {
    color: blanchedalmond;
    font-weight: 800;
  }
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

const HeaderBG = styled.header`
  /* Full height */
  display: flex;
  flex-direction: column;
  background: url(${HedaerBG}) no-repeat center right fixed;
  background-size: auto;
  background-repeat: no-repeat;
  height: 1024px;
  height: 100vh;
  width: 100%;
  @media (max-width: 1024px) {
    height: 800px;
    height: 100vh;
    background: url(${HedaerBG}) no-repeat center center fixed;
  }
  @media (max-width: 700px) {
    height: 600px;
    height: 100vh;
    background: url(${HedaerBG}) no-repeat center center fixed;
  }
`;

const StyledName = styled.span`
  font-size: 1.2rem;
  padding: 20px;
  font-style: italic;
  display: flex;
  justify-content: center;
`;

const Home = () => (
  <HeaderBG>
    <Navigation />
    <Wrapper>
      <Logo />
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
    <StyledName>Jacob Cofman</StyledName>
  </HeaderBG>
);

export default Home;
