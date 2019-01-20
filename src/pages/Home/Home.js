import React, { useState, useEffect } from "react";
import { PoseGroup } from "react-pose";
import SplitText from "react-pose-text";

import {
  HeaderBG,
  Wrapper,
  StyledLogo,
  Information,
  StyledName,
  SubHeaderPose,
  HeaderPose
} from "../../templates/PageStyles/StyledHome";

import Social from "../../components/Social";
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
        <div className="stars">
          <PoseGroup>
            {logoIsVisible && (
              <StyledLogo key="logo">
                <Logo />
              </StyledLogo>
            )}
          </PoseGroup>
          <div className="small" />
          <div className="medium" />
          <div className="big" />
        </div>

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
              I LOVE WEB DEVELOPMENT
            </SplitText>
            <span role="img" aria-label="computer">
              {" "}
              💻
            </span>
            <SplitText charPoses={HeaderPose} initialPose="exit" pose="enter">
              , VOLLEYBALL
            </SplitText>{" "}
            <span role="img" aria-label="computer">
              🏐
            </span>{" "}
            <SplitText charPoses={HeaderPose} initialPose="exit" pose="enter">
              AND TRAVELLING
            </SplitText>{" "}
            <span role="img" aria-label="tent">
              ⛺️
            </span>{" "}
            <span role="img" aria-label="nature tree">
              🌲
            </span>{" "}
            <span role="img" aria-label="run">
              🏃
            </span>
          </h1>
        </Information>
      </Wrapper>
      <Social />
      <StyledName>Jacob Cofman</StyledName>
    </HeaderBG>
  );
};

export default Home;
