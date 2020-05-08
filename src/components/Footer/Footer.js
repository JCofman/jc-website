import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import Social from '../../components/Social';
import { StyledName } from '../../templates/PageStyles/StyledHome';

export const StyledFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 2rem;
  border-top: 1px solid #201c29;
`;

const NavListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  ${(props) => props.theme.small} {
    grid-template-columns: 1 1fr;
  }
  ${(props) => props.theme.medium} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${(props) => props.theme.large} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${(props) => props.theme.xlarge} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NavFontColor = theme(`mode`, {
  light: (props) => props.theme.colors.black,
  dark: (props) => props.theme.colors.white,
});

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterListLink = styled.li`
  margin-bottom: 0px;

  a {
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 3rem;
    margin-bottom: 0px;
    background: none;
    border: none;
    display: flex;
    position: relative;
    cursor: pointer;
    align-items: center;
    text-transform: uppercase;
    color: ${NavFontColor};

    &:after {
      height: 2px;
      background: #651fff;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooter>
        <NavListWrapper>
          <Social />
          <StyledName>
            Layout made by
            <a href="https://github.com/JCofman" style={{ marginLeft: `5px` }}>
              Jacob Cofman
            </a>
            .
          </StyledName>
        </NavListWrapper>
      </StyledFooter>
    </StyledFooterWrapper>
  );
};

export default Footer;
