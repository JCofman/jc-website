import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import theme from 'styled-theming';

import { Link } from 'gatsby';

const StyledH1 = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 8rem;
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
    transform: translateX(-0.5em) translateY(-1.5rem);
  }
`;

const StyledSpan = styled.span`
  font-style: italic;
`;
const color = theme('mode', {
  light: props => props.theme.colors.dark,
  dark: props => props.theme.colors.white,
});

const StyledH2Circle = styled.h2`
  color: ${color};
  font-size: 5rem;
  :before {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    opacity: 0.2;
    background-color: ${props => props.theme.colors.white};
    content: '';
    pointer-events: none;
    position: absolute;
    transform: translateX(-0.5em) translateY(-1.5rem);
  }
`;

const StyledH2Parallelogram = styled.h2`
  color: ${color};
  font-size: 5rem;
  :before {
    width: 50px;
    height: 40px;
    background: ${props => props.theme.colors.white};
    opacity: 0.2;
    content: '';
    pointer-events: none;
    position: absolute;
    transform: translateX(-0.5em) translateY(-1.5rem) skew(20deg);
  }
`;

export const Wrapper = styled.div`
  display: grid;
  margin: 5rem auto;
  height: 50vh;
  align-items: center;
  max-width: ${props => props.theme.maxWidth};
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  ${props => props.theme.small} {
    grid-template-columns: 1fr;
  }
`;

const StyledTriangle = styled.div`
  clip-path: polygon(50% 0%, 0% 150%, 80% 100%);
  align-self: center;
  width: 100%;
  max-width: 800px;
`;
const StyledParallelogram = styled.div`
  clip-path: polygon(0% 0%, 75% 0%, 100% 100%, 25% 100%);
  max-width: 800px;
  align-self: center;
  width: 70%;
`;
const StyledCircle = styled.div`
  clip-path: circle(35% at 50% 50%);
  align-self: center;
  width: 100%;
`;

export const StyledHeader = styled.h1`
  display: flex;
  align-items: left;
`;
export const StyledH3 = styled.h3`
  font-size: 3rem;
`;

const AboutMe = () => (
  <StaticQuery
    query={graphql`
      {
        profileImage: file(relativePath: { eq: "profilePicture.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        meJumpingImage: file(relativePath: { eq: "meJumping.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        meHackingImage: file(relativePath: { eq: "meHacking.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Wrapper>
          <StyledTriangle>
            {' '}
            <Img fluid={data.profileImage.childImageSharp.fluid} alt="test" />
          </StyledTriangle>
          <div>
            <StyledH1>Jacob Cofman</StyledH1>
            <StyledSpan>This is me</StyledSpan>
            <ul>
              <li>👴 27 years old</li>
              <li>🏠 Living in Karlsruhe Germany</li>
              <li>👪 One twin brother</li>
            </ul>
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <StyledH2Circle> Hobbies </StyledH2Circle>
            <StyledSpan>This is what I love ❤️</StyledSpan>
            <ul>
              <li>🏐 I play volleyball since I am 7</li>
              <li>💻 All the things especially frontend engineering stuff</li>
              <li>
                🏂 🏃 ⛺️ A lot of outdoor activities like snowboarding, hiking
                and just enjoing the nature
              </li>
            </ul>
          </div>
          <StyledCircle>
            <Img fluid={data.meJumpingImage.childImageSharp.fluid} alt="test" />
          </StyledCircle>
        </Wrapper>
        <Wrapper>
          <StyledParallelogram>
            <Img fluid={data.meHackingImage.childImageSharp.fluid} alt="test" />
          </StyledParallelogram>
          <div>
            <StyledH2Parallelogram>Skills</StyledH2Parallelogram>
            <StyledSpan>major skills</StyledSpan>
            <ul>
              <StyledH3>Frontend</StyledH3>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>Node</li>
              <li>Sketch</li>

              <StyledH3>Backend</StyledH3>
              <StyledH3>Things I am currently learning</StyledH3>
              <li>Security</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
        </Wrapper>
      </Layout>
    )}
  />
);

export default AboutMe;
