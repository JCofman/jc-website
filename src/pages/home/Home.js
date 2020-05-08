import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'styled-components';

import { HeaderBG, Wrapper, Information, StyledName } from '../../templates/PageStyles/StyledHome';
import { useWindowScrollPosition } from '../../hooks/useWindowScrollPosition';

import Social from '../../components/Social';

const Home = () => {
  useWindowScrollPosition();
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

  const themeContext = React.useContext(ThemeContext);

  const backgroundFluidImage = [
    image.childImageSharp.fluid,
    `${
      themeContext && themeContext.mode === `dark`
        ? `linear-gradient(rgba(1, 1, 1, 0.95), rgba(1, 1, 1, 0.95))`
        : `linear-gradient(rgba(244, 244, 244, 0.95), rgba(244, 244, 244, 0.95))`
    }`,
  ].reverse();

  return (
    <>
      <HeaderBG tag={`header`} fluid={backgroundFluidImage}>
        <Wrapper>
          <Information>
            <span>HEY PEOPLE! MY NAME IS RODOLFO OLIVIERI A.K.A NICHT</span>
            <h1>
              I LOVE SOFTWARE ARCHITECTURE
              <span role="img" aria-label="computer">
                {` `}
                💻
              </span>
              , GAMES
              <span role="img" aria-label="games">
                {` `}
                🎮
              </span>
              {` `}
              AND CYBER SECURITY
              <span role="img" aria-label="cyber-security">
                {` `}
                🔑
              </span>
            </h1>
          </Information>
        </Wrapper>
        <Social />
        <StyledName>Rodolfo Olivieri</StyledName>
      </HeaderBG>
    </>
  );
};

export default Home;
