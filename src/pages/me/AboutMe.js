import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import {
  StyledBlogArtikelHeaderParallelogram,
  StyledBlogArtikelHeaderCircle,
} from '../';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
// import theme from 'styled-theming';

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
  grid-gap: 2rem;
  grid-row-gap: 10rem;
  grid-template-columns: 1fr 1fr;
  ${props => props.theme.small} {
    grid-template-columns: 1fr;
    margin: 5rem 5rem;
  }
  ${props => props.theme.medium} {
    margin: 5rem 3rem;
    align-items: center;
    justify-content: center;
  }
  ${props => props.theme.large} {
    margin: 5rem 3rem;
    align-items: center;
    justify-content: center;
  }
`;

const StyledListTriangle = styled.ul`
  margin: 0.75em 0;
  font-size: 2rem;
  padding: 0 1em;
  list-style: none;
  li:before {
    content: '';
    width: 0;
    height: 0;
    opacity: 0.5;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid ${props => props.theme.colors.white};
    left: -1em;
    top: 0.9em;
    position: relative;
    display: block;
  }
`;

const StyledListDots = styled.ul`
  margin: 0.75em 0;
  font-size: 2rem;
  padding: 0 1em;
  list-style-type: none;
  li:before {
    content: '';
    width: 1rem;
    height: 1rem;
    opacity: 0.5;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.white};
    left: -1em;
    top: 0.9em;
    position: relative;
    display: block;
  }
`;

const StyledListParallelogram = styled.ul`
  margin: 0.75em 0;
  font-size: 2rem;
  padding: 0 1em;
  list-style-type: none;
  li:before {
    content: '';
    width: 1.2rem;
    height: 0.9rem;
    opacity: 0.5;
    background-color: ${props => props.theme.colors.white};
    left: -1em;
    top: 0.9em;
    position: relative;
    display: block;
    clip-path: polygon(0% 0%, 75% 0%, 100% 100%, 25% 100%);
  }
`;

const StyledSkills = styled.ul`
  font-size: 2rem;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  order: 3;
`;

const StyledTriangle = styled.div`
  clip-path: polygon(50% 0%, 0% 150%, 80% 100%);
  align-self: center;
  order: 1;
  width: 100%;
  max-width: 800px;
`;

const StyledParallelogram = styled.div`
  clip-path: polygon(0% 0%, 75% 0%, 100% 100%, 25% 100%);
  max-width: 800px;
  align-self: center;
  width: 70%;
  order: 5;
`;

const StyledCircle = styled.div`
  clip-path: circle(35% at 50% 50%);
  align-self: center;
  width: 100%;
  order: 4;
  ${props => props.theme.small} {
    order: 3;
  }
`;

const StyledMainInformation = styled.div`
  order: 2;
`;
const StyledInformationHobbies = styled.div`
  order: 3;
  ${props => props.theme.small} {
    order: 4;
  }
`;
const StyledInformationSkills = styled.div`
  order: 6;
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
        meJumpingImage: file(relativePath: { eq: "meJumping3.jpg" }) {
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
            <Img
              fluid={data.profileImage.childImageSharp.fluid}
              alt="A picture of me"
            />
          </StyledTriangle>
          <StyledMainInformation>
            <StyledH1>Jacob Cofman</StyledH1>
            <StyledSpan>That`s me 😏</StyledSpan>
            <StyledListTriangle>
              <li> 27 years old</li>
              <li> Living in Karlsruhe Germany</li>
              <li> One twin brother</li>
              <li> A lovely girlfriend</li>
            </StyledListTriangle>
          </StyledMainInformation>
          <StyledInformationHobbies>
            <StyledBlogArtikelHeaderCircle>
              {' '}
              Hobbies{' '}
            </StyledBlogArtikelHeaderCircle>
            <StyledSpan>This is what I love ❤️</StyledSpan>
            <StyledListDots>
              <li> I play volleyball since I am seven years old</li>
              <li> All the things especially frontend engineering stuff</li>
              <li>
                A lot of outdoor activities like snowboarding, hiking and just
                enjoing the nature
              </li>
            </StyledListDots>
          </StyledInformationHobbies>
          <StyledCircle>
            <Img
              fluid={data.meJumpingImage.childImageSharp.fluid}
              alt="Picture of me in the nature"
            />
          </StyledCircle>
          <StyledParallelogram>
            <Img
              fluid={data.meHackingImage.childImageSharp.fluid}
              alt="Coding"
            />
          </StyledParallelogram>
          <StyledInformationSkills>
            <StyledBlogArtikelHeaderParallelogram>
              Skills
            </StyledBlogArtikelHeaderParallelogram>
            <StyledSpan>Major skills 💪</StyledSpan>
            <StyledSkills>
              <StyledListParallelogram>
                <StyledH3>💅 Frontend</StyledH3>

                <li>JavaScript</li>
                <li>CSS</li>
                <li>GraphQL</li>
                <li>React</li>
                <li>Sketch</li>
              </StyledListParallelogram>
              <StyledListParallelogram>
                <StyledH3>💻 Backend</StyledH3>

                <li>GraphQL</li>
                <li>Kubernetes</li>
                <li>Node</li>
              </StyledListParallelogram>
              <StyledListParallelogram>
                <StyledH3>🤓 Things I am currently learning</StyledH3>

                <li>Web-Security</li>
                <li>Vue</li>
                <li>Go</li>
              </StyledListParallelogram>
            </StyledSkills>
          </StyledInformationSkills>
        </Wrapper>
      </Layout>
    )}
  />
);

export default AboutMe;
