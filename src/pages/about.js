import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { StyledBlogArtikelHeaderParallelogram, StyledBlogArtikelHeaderCircle } from '.';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  transform: skew(-5deg) rotate(-1deg);
  font-size: 6rem;
  :before {
    width: 0;
    height: 0;
    opacity: 0.2;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 50px solid ${(props) => props.theme.colors.white};
    content: '';
    pointer-events: none;
    position: absolute;
    transform: translateX(-0.5em) translateY(-1.5rem);
  }
  ${(props) => props.theme.xsmall} {
    font-size: 6rem;
  }
  ${(props) => props.theme.small} {
    font-size: 8rem;
  }
`;

const StyledSpan = styled.span`
  text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.2);
`;

const Wrapper = styled.div`
  display: grid;
  margin: 5rem 5rem;
  min-height: 50vh;
  align-items: center;
  max-width: ${(props) => props.theme.maxWidth};
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  grid-row-gap: 10rem;

  ${(props) => props.theme.small} {
    grid-template-columns: 1fr;
    margin: 10rem 5rem;
  }

  ${(props) => props.theme.medium} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    margin: 10rem 3rem;
  }

  ${(props) => props.theme.large} {
    margin: 8rem auto;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
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
    border-bottom: 10px solid ${(props) => props.theme.colors.white};
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
    background-color: ${(props) => props.theme.colors.white};
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
    background-color: ${(props) => props.theme.colors.white};
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
  grid-template-columns: 1fr;
  order: 3;
  ${(props) => props.theme.small} {
    grid-template-columns: 1fr 1fr;
  }
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
  order: 3;
  ${(props) => props.theme.medium} {
    order: 4;
  }
`;

const StyledMainInformation = styled.div`
  order: 2;
`;

const StyledInformationHobbies = styled.div`
  order: 4;
  ${(props) => props.theme.medium} {
    order: 3;
  }
`;

const StyledInformationSkills = styled.div`
  order: 6;
`;

const StyledH3 = styled.h3`
  font-size: 3rem;
`;

const calculateAge = (birthday) => {
  // birthday is a date
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

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
    render={(data) => (
      <Layout>
        <SEO title="About Me" keywords={[`about me`, `jacob cofman`, `frontend`, `engineer`]} />
        <Wrapper>
          <StyledTriangle>
            {` `}
            <Img fluid={data.profileImage.childImageSharp.fluid} alt="A picture of myself" />
          </StyledTriangle>
          <StyledMainInformation>
            <StyledH1>Jacob Cofman</StyledH1>
            <StyledSpan>That`s me 😏</StyledSpan>
            <StyledListTriangle>
              <li> {calculateAge(new Date(1991, 8, 31))} years old</li>
              <li> Living in Lörrach Germany</li>
              <li> One twin brother</li>
              <li> A lovely girlfriend</li>
            </StyledListTriangle>
          </StyledMainInformation>
          <StyledInformationHobbies>
            <StyledBlogArtikelHeaderCircle>
              {` `}
              Hobbies{` `}
            </StyledBlogArtikelHeaderCircle>
            <StyledSpan>This is what I love ❤️</StyledSpan>
            <StyledListDots>
              <li>I play volleyball since I am seven years old</li>
              <li>Home automation things and especially frontend engineering stuff</li>
              <li>A lot of outdoor activities like snowboarding, hiking and just enjoying the nature</li>
            </StyledListDots>
          </StyledInformationHobbies>
          <StyledCircle>
            <Img fluid={data.meJumpingImage.childImageSharp.fluid} alt="Picture of me in the nature" />
          </StyledCircle>
          <StyledParallelogram>
            <Img fluid={data.meHackingImage.childImageSharp.fluid} alt="Coding" />
          </StyledParallelogram>
          <StyledInformationSkills>
            <StyledBlogArtikelHeaderParallelogram>Skills</StyledBlogArtikelHeaderParallelogram>
            <StyledSpan>Major skills 💪</StyledSpan>
            <StyledSkills>
              <StyledListParallelogram>
                <StyledH3>💅 Frontend</StyledH3>

                <li>TypeScript - JavaScript</li>
                <li>Styled-Components - SCSS - CSS</li>
                <li>REST - GraphQL</li>
                <li>React - Angular</li>
                <li>Figma - Sketch</li>
              </StyledListParallelogram>
              <StyledListParallelogram>
                <StyledH3>💻 Backend</StyledH3>
                <li>Node - Express - NestJS</li>
                <li>REST</li>
                <li>GraphQL</li>
                <li>Kubernetes</li>
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
