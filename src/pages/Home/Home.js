import React from "react";
import styled from "styled-components";
import HedaerBG from "./homebg.jpg";
import { FaTwitter, FaFacebook, FaBehance, FaGithub } from "react-icons/fa";

import Logo from "../../components/Logo";

const StyledLogo = styled.svg`
  height: 800px;
  width: 600px;
  padding: 50px;

  ${props => props.theme.medium} {
    display: none;
  }
  ${props => props.theme.small} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  h1 {
    font-size: 5rem;
    text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
    ${props => props.theme.large} {
      font-size: 4rem;
    }
    ${props => props.theme.medium} {
      font-size: 3rem;
    }
  }

  ${props => props.theme.large} {
    padding-top: 200px;
    padding-bottom: 100px;
  }
  ${props => props.theme.medium} {
    padding-top: 200px;
    padding-bottom: 30px;
  }
  p {
    font-size: 2rem;
    color: ${props => props.theme.colors.secondary};
    font-weight: 800;
    ${props => props.theme.large} {
      font-size: 1.5rem;
    }
    ${props => props.theme.medium} {
      font-size: 1.2rem;
    }
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
  ${props => props.theme.large} {
    height: 800px;
    height: 100vh;
    background: url(${HedaerBG}) no-repeat center center fixed;
  }
  ${props => props.theme.medium} {
    height: 600px;
    height: 100vh;
    background: url(${HedaerBG}) no-repeat center center fixed;
  }
`;

const StyledName = styled.span`
  font-size: 1.5rem;
  padding: 20px;
  font-style: italic;
  display: flex;
  justify-content: center;
`;

const Home = () => (
  <HeaderBG>
    <Wrapper>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <Information>
        <p>HEY EVERYONE MY NAME IS JACOB COFMAN</p>
        <h1>
          I LOVE WEB DEVELOPMENT
          <span role="img" aria-label="web dev emoji">
            💻
          </span>
          , VOLLEYBALL
          <span role="img" aria-label="volleyball emoji">
            🏐
          </span>{" "}
          AND TRAVELLING
          <span role="img" aria-label="outdoor emoji">
            ⛺️ 🌲 🏃
          </span>
        </h1>
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
