import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'styled-components';

import { StyledHeaderBG, StyledWrapper, StyledInformation, StyledName } from '../../templates/PageStyles/StyledHome';

import Social from '../../components/Social';

const LightHeader = () => {
  const themeContext = React.useContext(ThemeContext);
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const backgroundFluidImage = [
    image.childImageSharp.fluid,
    `${
      themeContext && themeContext.mode === `dark`
        ? `linear-gradient(rgba(1, 1, 1, 0.95), rgba(1, 1, 1, 0.95))`
        : `linear-gradient(rgba(244, 244, 244, 0.95), rgba(244, 244, 244, 0.95))`
    }`,
  ].reverse();
  return (
    <StyledHeaderBG tag={`header`} fluid={backgroundFluidImage}>
      <StyledWrapper>
        <StyledInformation>
          <span>HEY EVERYONE MY NAME IS JACOB COFMAN</span>
          <h1>
            I LOVE WEB DEVELOPMENT
            <span role="img" aria-label="computer">
              {` `}
              💻
            </span>
            , VOLLEYBALL
            <span role="img" aria-label="computer">
              🏐
            </span>
            {` `}
            AND TRAVELLING{` `}
            <span role="img" aria-label="tent">
              ⛺️
            </span>
            {` `}
            <span role="img" aria-label="nature tree">
              🌲
            </span>
            {` `}
            <span role="img" aria-label="run">
              🏃
            </span>
          </h1>
        </StyledInformation>
      </StyledWrapper>
      <Social />
      <StyledName>Jacob Cofman</StyledName>
    </StyledHeaderBG>
  );
};

export default LightHeader;
