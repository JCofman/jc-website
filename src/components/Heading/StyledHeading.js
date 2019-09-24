import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const HeadingTextShadow = theme(`mode`, {
  light: `2px 2px 0 rgba(0,0, 0,0.3)`,
  dark: `2px 2px 0 rgba(255,255, 255,0.3)`,
});

const HeadingTextColor = theme(`mode`, {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

const sharedHeadingStyles = css`
  font-family: 'Raleway', sans-serif;
  transform: skew(-5deg) rotate(-1deg);
  margin-bottom: 2rem;
  color: ${HeadingTextColor};
  text-shadow: ${HeadingTextShadow};
  a {
    color: ${HeadingTextColor};
    transition: color ${props => props.theme.themeTransition};
  }
  a:hover,
  a:focus {
    color: ${props => props.theme.colors.primary};
    transition: none;
  }
  :before {
    width: 0;
    height: 0;
    opacity: 0.2;
    border-left: 1em solid transparent;
    border-right: 1em solid transparent;
    border-bottom: 2em solid ${props => props.theme.colors.white};
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: -1;
    transform: translateX(-0.5em) translateY(-1.5rem);
  }
`;

const StyledHeadingH1 = styled.h1`
  font-size: 8rem;
  ${sharedHeadingStyles}
`;

const StyledHeadingH2 = styled.h2`
  ${sharedHeadingStyles}
  font-size: 5rem;
`;

const StyledHeadingH3 = styled.h3`
  ${sharedHeadingStyles}

  font-size: 4rem;
`;
const StyledHeadingH4 = styled.h4`
  ${sharedHeadingStyles}

  font-size: 3rem;
`;
const StyledHeadingH5 = styled.h5`
  ${sharedHeadingStyles}

  font-size: 2.5rem;
`;
const StyledHeadingH6 = styled.h6`
  ${sharedHeadingStyles}
  font-size: 2rem;
`;

export { StyledHeadingH1, StyledHeadingH2, StyledHeadingH3, StyledHeadingH4, StyledHeadingH5, StyledHeadingH6 };
