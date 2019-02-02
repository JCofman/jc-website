import React from 'react';
import { useWindowScrollPosition } from '../../hooks/useWindowScrollPosition';

import {
  HeaderBG,
  Wrapper,
  StyledLogo,
  Information,
  StyledName,
  
} from '../../templates/PageStyles/StyledHome';

import Social from '../../components/Social';
import Logo from '../../components/Logo';

const Home = () => {
  const { y } = useWindowScrollPosition();

  return (
    <HeaderBG>
      <Wrapper>
        <StyledLogo key="logo" scrollPositionY={y}>
          <Logo />
        </StyledLogo>
        <Information>
          <span>HEY EVERYONE MY NAME IS JACOB COFMAN</span>
          <h1>
            I LOVE WEB DEVELOPMENT
            <span role="img" aria-label="computer">
              {' '}
              💻
            </span>
            , VOLLEYBALL
            <span role="img" aria-label="computer">
              🏐
            </span>{' '}
            AND TRAVELLING{' '}
            <span role="img" aria-label="tent">
              ⛺️
            </span>{' '}
            <span role="img" aria-label="nature tree">
              🌲
            </span>{' '}
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
