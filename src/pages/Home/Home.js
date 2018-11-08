import React, { useState, useEffect } from "react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import { FaTwitter, FaFacebook, FaBehance, FaGithub } from "react-icons/fa";

import Logo from "../../components/Logo";
import HedaerBG from "./homebg.jpg";

const LogoAnimation = posed.svg({
  enter: {
    y: 0,
    opacity: 1,
    delay: 100
  },
  exit: {
    opacity: 0,
    transition: { duration: 150 }
  }
});

const StyledLogo = styled(LogoAnimation)`
  height: 800px;
  width: 600px;
  padding: 50px;
  display: block;
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

  ${props => props.theme.small} {
    padding-top: 150px;
    padding-bottom: 30px;
  }
  ${props => props.theme.medium} {
    padding-top: 200px;
    padding-bottom: 30px;
  }
  ${props => props.theme.large} {
    padding-top: 200px;
    padding-bottom: 100px;
  }

  h1 {
    font-size: 5rem;
    text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
    ${props => props.theme.small} {
      font-size: 4rem;
    }
    ${props => props.theme.medium} {
      font-size: 4rem;
    }
    ${props => props.theme.large} {
      font-size: 4rem;
    }
  }

  p {
    font-size: 2rem;
    color: ${props => props.theme.colors.secondary};
    font-weight: 800;
    ${props => props.theme.small} {
      font-size: 1.5rem;
    }
    ${props => props.theme.medium} {
      font-size: 1.5rem;
    }
    ${props => props.theme.large} {
      font-size: 1.5rem;
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
  ${props => props.theme.medium} {
    height: 600px;
    height: 100vh;
    background: url(${HedaerBG}) no-repeat center center fixed;
  }
  ${props => props.theme.large} {
    height: 800px;
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

const Home = () => {
  const [logoIsVisible, setLogoToVisible] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    setLogoToVisible(true);
  });

  return (
    <HeaderBG>
      <Wrapper>
        <PoseGroup>
          {logoIsVisible && (
            <StyledLogo key="logo">
              <Logo />
            </StyledLogo>
          )}
        </PoseGroup>

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
};

export default Home;
