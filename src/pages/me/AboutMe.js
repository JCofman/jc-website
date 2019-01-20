import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
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
const StyledPentagon = styled.div`
  -webkit-clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
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
            <span>lorem ipsum</span>
            <ul>
              <li>27 years old</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <h2>Jacob Cofman</h2>
            <span>lorem ipsum</span>
            <ul>
              <li>27 years old</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <StyledCircle>
            <Img fluid={data.meJumpingImage.childImageSharp.fluid} alt="test" />
          </StyledCircle>
        </Wrapper>
        <Wrapper>
          <StyledPentagon>
            <Img fluid={data.meHackingImage.childImageSharp.fluid} alt="test" />
          </StyledPentagon>
          <div>
            <h2>Jacob Cofman</h2>
            <span>lorem ipsum</span>
            <ul>
              <li>27 years old</li>
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
