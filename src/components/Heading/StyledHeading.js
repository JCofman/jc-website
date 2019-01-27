import styled from 'styled-components';
import theme from 'styled-theming';

const HeadingTextShadow = theme('mode', {
  light: '2px 2px 0 rgba(0,0, 0,0.3)',
  dark: '2px 2px 0 rgba(255,255, 255,0.3)',
});

const HeadingTextColor = theme('mode', {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

const StyledHeadingH1 = styled.h1`
  font-size: 8rem;
  transform: skew(-5deg) rotate(-1deg);
  margin-bottom: 2rem;
  color: ${HeadingTextColor};
  text-shadow: ${HeadingTextShadow};
  a {
    color: ${HeadingTextColor};
    transition: color ${props => props.theme.themeTransition};
  }
  a:hover {
    color: ${props => props.theme.colors.primary};
    transition: none;
  }
  :before {
    width: 0;
    height: 0;
    opacity: 0.2;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 50px solid ${props => props.theme.colors.white};
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: -1;
    transform: translateX(-0.5em) translateY(-1.5rem);
  }
`;

const StyledHeadingH2 = styled(StyledHeadingH1)`
  font-size: 5rem;
`;

const StyledHeadingH3 = styled(StyledHeadingH1)`
  font-size: 4rem;
`;
const StyledHeadingH4 = styled(StyledHeadingH1)`
  font-size: 3rem;
`;
const StyledHeadingH5 = styled(StyledHeadingH1)`
  font-size: 2.5rem;
`;
const StyledHeadingH6 = styled(StyledHeadingH1)`
  font-size: 2rem;
`;
