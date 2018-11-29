import React, { useState, useEffect } from "react";
import { PoseGroup } from "react-pose";
import SplitText from "react-pose-text";

import { FaTwitter, FaFacebook, FaBehance, FaGithub } from "react-icons/fa";
import {
  HeaderBG,
  Wrapper,
  StyledLogo,
  Information,
  StyledName,
  SubHeaderPose,
  HeaderPose,
  Social
} from "./StyledHome";
import Logo from "../../components/Logo";

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
          <span>
            <SplitText
              charPoses={SubHeaderPose}
              initialPose="exit"
              pose="enter"
            >
              HEY EVERYONE MY NAME IS JACOB COFMAN
            </SplitText>
          </span>
          <h1>
            <SplitText charPoses={HeaderPose} initialPose="exit" pose="enter">
              I LOVE WEB DEVELOPMENT 💻, VOLLEYBALL 🏐 AND TRAVELLING ⛺️ 🌲 🏃
            </SplitText>
          </h1>
        </Information>
      </Wrapper>
      <Social>
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
      </Social>
      <StyledName>Jacob Cofman</StyledName>
    </HeaderBG>
  );
};

export default Home;
