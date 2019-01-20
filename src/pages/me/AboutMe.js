import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import {
  StyledBlogArtikelHeaderParallelogram,
  StyledBlogArtikelHeaderCircle,
} from '../';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import theme from 'styled-theming';

import { Link } from 'gatsby';

const StyledH1 = styled.h1`
  color: ${props => props.theme.colors.primary};
  transform: skew(-5deg) rotate(-1deg);
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

export const Wrapper = styled.div`
  display: grid;
  margin: 5rem auto;
  min-height: 50vh;
  align-items: center;
  max-width: ${props => props.theme.maxWidth};
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  ${props => props.theme.small} {
    grid-template-columns: 1fr;
  }
`;

// const StyledListTriangle = styled.ul`
//   margin: 0.75em 0;
//   font-size: 2rem;
//   padding: 0 1em;
//   list-style: none;
//   li:before {
//     content: '';
//     width: 0;
//     height: 0;
//     opacity: 0.5;
//     border-left: 5px solid transparent;
//     border-right: 5px solid transparent;
//     border-bottom: 10px solid ${props => props.theme.colors.white};
//     left: -1em;
//     top: 0.9em;
//     position: relative;
//     display: block;
//   }
// `;

const StyledList = styled.ul`
  margin: 0.75em 0;
  font-size: 2rem;
  padding: 0 1em;
  list-style: none;
`;

const StyledSkills = styled.ul`
  font-size: 2rem;

  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
            <StyledSpan>This is me 😏</StyledSpan>
            <StyledList>
              <li>👴 27 years old</li>
              <li>🏠 Living in Karlsruhe Germany</li>
              <li>👪 One twin brother</li>
              <li>💁 A lovely girlfriend</li>
            </StyledList>
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <StyledBlogArtikelHeaderCircle>
              {' '}
              Hobbies{' '}
            </StyledBlogArtikelHeaderCircle>
            <StyledSpan>This is what I love ❤️</StyledSpan>
            <StyledList>
              <li>🏐 I play volleyball since I am seven years old</li>
              <li>💻 All the things especially frontend engineering stuff</li>
              <li>
                🏂 🏃 ⛺️ A lot of outdoor activities like snowboarding, hiking
                and just enjoing the nature
              </li>
            </StyledList>
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
            <StyledBlogArtikelHeaderParallelogram>
              Skills
            </StyledBlogArtikelHeaderParallelogram>
            <StyledSpan>major skills</StyledSpan>
            <StyledSkills>
              <StyledList>
                <StyledH3>💅 Frontend</StyledH3>

                <li>JavaScript</li>
                <li>CSS</li>
                <li>GraphQL</li>
                <li>React</li>
                <li>Sketch</li>
              </StyledList>
              <StyledList>
                <StyledH3>💻 Backend</StyledH3>

                <li>GraphQL</li>
                <li>Kubernetes</li>
                <li>Node</li>
              </StyledList>
              <StyledList>
                <StyledH3>🤓 Things I am currently learning</StyledH3>

                <li>Web-Security</li>
                <li>In depth JS</li>
                <li>Vue</li>
              </StyledList>
            </StyledSkills>
          </div>
        </Wrapper>
      </Layout>
    )}
  />
);

export default AboutMe;
