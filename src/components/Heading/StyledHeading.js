import styled, { css } from 'styled-components';

const sharedHeadingStyles = css`
  font-family: 'Raleway', sans-serif;
  transform: skew(-5deg) rotate(-1deg);
  margin-bottom: 2rem;
  color: var(--color-text);
  text-shadow: var(--text-shadow);
  a {
    color: var(--color-text);
    transition: color var(--theme-transition);
  }
  a:hover,
  a:focus {
    color: var(--color-primary);
    transition: none;
  }
  ${(props) =>
    props.backgroundStyle === 'TRIANGLE' &&
    `:before {
    width: 0;
    height: 0;
    opacity: 0.2;
    border-left: 1em solid transparent;
    border-right: 1em solid transparent;
    border-bottom: 2em solid var(--color-text);
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: -1;
    transform: translateX(-0.5em) translateY(-1.5rem);
  }`}
  ${(props) =>
    props.backgroundStyle === 'PARALLELOGRAM' &&
    `:before {
    width: 50px;
    height: 40px;
    background: var(--color-text);
    opacity: 0.2;
    content: '';
    pointer-events: none;
    position: absolute;
    transform: translateX(-0.5em) translateY(-1.5rem) skew(20deg);
  }`}
  ${(props) =>
    props.backgroundStyle === 'CIRCLE' &&
    `:before {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    opacity: 0.2;
    background-color: var(--color-text);
    content: '';
    pointer-events: none;
    position: absolute;
    transform: translateX(-0.5em) translateY(-1.5rem);
  }`}
`;

const StyledHeadingH1 = styled.h1`
  font-size: var(--font-size-7xl);
  ${sharedHeadingStyles}
`;

const StyledHeadingH2 = styled.h2`
  ${sharedHeadingStyles}
  font-size: var(--font-size-5xl);
`;

const StyledHeadingH3 = styled.h3`
  ${sharedHeadingStyles}
  font-size: var(--font-size-4xl);
`;
const StyledHeadingH4 = styled.h4`
  ${sharedHeadingStyles}
  font-size: var(--font-size-3xl);
`;
const StyledHeadingH5 = styled.h5`
  ${sharedHeadingStyles}
  font-size: var(--font-size-2xl);
`;
const StyledHeadingH6 = styled.h6`
  ${sharedHeadingStyles}
  font-size: var(--font-size-xl);
`;

export { StyledHeadingH1, StyledHeadingH2, StyledHeadingH3, StyledHeadingH4, StyledHeadingH5, StyledHeadingH6 };
