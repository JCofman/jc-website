import styled, { css } from 'styled-components';
import DarkHeaderBG from './homebg.jpg';
import WhiteHeaderBG from './whiteHomeBg.jpg';
import DarkHeaderBGWebP from './homebg.webp';
import WhiteHeaderBGWebP from './whiteHomeBg.webp';
import { zIndexLogo } from '../../components/Styles/zIndex';

import theme from 'styled-theming';

export const StyledLogo = styled.svg`
  display: none;
  position: ${props => (props.scrollPositionY > 0 ? 'fixed' : 'static')};
  top: -235px;

  left: -200px;
  align-self: flex-start;
  z-index: ${zIndexLogo};
  height: 60rem;
  width: 40rem;

  margin-left: 6rem;
  transition: all 0.25s ease-out 0s;
  transform: ${props =>
    props.scrollPositionY > 0 ? 'scale(0.2)' : 'scale(1.0)'};

  ${props => props.theme.xsmall} {
    display: none;
  }
  ${props => props.theme.small} {
    display: none;
  }
  ${props => props.theme.medium} {
    display: none;
  }
  ${props => props.theme.large} {
    display: flex;
    top: -320px;
    height: 81rem;
    width: 60rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  height: 1028px;
  height: 80vh;
`;

const InformationTextShadow = theme('mode', {
  light: '3px 3px 0 rgba(0, 0, 0, 0.2)',
  dark: '3px 3px 0 rgba(255, 255, 255, 0.2)',
});

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  position: initial;
  padding-top: 18rem;
  padding-bottom: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
  text-shadow: ${InformationTextShadow};

  
  ${props => props.theme.small} {
    position: initial;
    padding-top: 18rem;
    padding-bottom: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  ${props => props.theme.medium} {
    position: initial;
    padding-top: 25rem;
    padding-bottom: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
  
  }
  ${props => props.theme.large} {
    position: absolute;
    padding-top: 10rem;
    padding-bottom: 10rem;
    top: 15rem;
    left: 25rem;
  }

  ${props => props.theme.xlarge} {
    position: absolute;
    top: 15rem;
    left: 30rem;
    margin-left: 2rem;
    margin-right: 6rem;
    text-shadow: ${InformationTextShadow};
  }

  h1 {
    font-size: 3rem;
    transition: color ${props => props.theme.themeTransition};
    ${props => props.theme.xsmall} {
      font-size: 3rem;
    }
    ${props => props.theme.small} {
      font-size: 4rem;
    }
    ${props => props.theme.medium} {
      font-size: 4rem;
    }
    ${props => props.theme.large} {
      font-size: 5rem;
    }
    span {
      font-size: 3rem;
    ${props => props.theme.xsmall} {
      font-size: 3rem;
    }
    ${props => props.theme.small} {
        font-size: 4rem;
    }
    ${props => props.theme.medium} {
      font-size: 4rem;
    }
    ${props => props.theme.large} {
      font-size: 5rem;
    }
    }
  }

  span {
    font-size: 1.5rem;
    /* color: ${props => props.theme.colors.secondary}; */
    font-weight: 800;
    ${props => props.theme.small} {
      font-size: 1.5rem;
    }
    ${props => props.theme.medium} {
      font-size: 2rem;
    }
    ${props => props.theme.large} {
      font-size: 2rem;
    }
  }
`;

const themedHeaderBG = theme('mode', {
  // touch action comes close to the webpp implementation usage now. It shows webp on most browsers but doesnt load on safari
  light: css`
    @supports (display: touch-action) {
      background: url(${WhiteHeaderBG}) no-repeat center right fixed;
    }
    @supports not (display: touch-action) {
      background: url(${WhiteHeaderBGWebP}) no-repeat center right fixed;
    }
  `,
  dark: css`
    @supports (display: touch-action) {
      background: url(${DarkHeaderBGWebP}) no-repeat center right fixed;
    }
    @supports not (display: touch-action) {
      background: url(${DarkHeaderBG}) no-repeat center right fixed;
    }
  `,
});

export const HeaderBG = styled.header`
  /* Full height */
  display: flex;
  flex-direction: column;
  ${themedHeaderBG}
  background-size: auto;
  background-repeat: no-repeat;
  height: 1024px;
  height: 100vh;
  width: 100%;
  ${props => props.theme.medium} {
    height: 600px;
    height: 100vh;
    background: url(${DarkHeaderBGWebP}) no-repeat center center fixed;
  }
  ${props => props.theme.large} {
    height: 800px;
    height: 100vh;
    background: url(${DarkHeaderBGWebP}) no-repeat center center fixed;
  }
`;

export const StyledName = styled.span`
  font-size: 1.5rem;
  padding: 20px;
  font-style: italic;
  display: flex;
  justify-content: center;
`;
