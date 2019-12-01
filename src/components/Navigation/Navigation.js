import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Link } from 'gatsby';
import { withTheme, css } from 'styled-components';
import { InstantSearch } from 'react-instantsearch-dom';
import { colors } from '../Layout/Theme';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Location } from '@reach/router';
import { FaMoon, FaSun, FaSearch, FaWindowClose } from 'react-icons/fa';

import useModal from '../../hooks/useModal';
import { useMedia } from '../../hooks/useMedia';
import { useWindowScrollPosition } from '../../hooks/useWindowScrollPosition';

import Logo from '../Logo';
import SearchBar from '../SearchBar';

import {
  StyledNav,
  StyledNavLogo,
  StyledNavList,
  StyledNavWrapper,
  StyledNavListLink,
  StyledWrapper,
} from './StyledNavigation';

const searchClient = algoliasearch(`8C28RWVQVQ`, `8bf43203e68ea1c9d485ccb865e18e99`);

const StyledSearchIcon = styled(FaSearch)`
  color: ${props => props.theme.primary};
  align-self: center;
`;

const StyledModalCloseButtonColor = theme(`mode`, {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 12px;
  background-color: transparent;
  color: ${StyledModalCloseButtonColor};
  cursor: pointer;
  border: none;
`;

const StyledSearchIconButtonColor = theme(`mode`, {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

const StyledSearchIconButton = styled.button`
  display: flex;
  width: 40px;
  height: 70px;
  background-color: transparent;
  color: ${StyledSearchIconButtonColor};
  cursor: pointer;
  border: none;
`;

const StyledSearch = styled.div`
  align-self: center;
  justify-content: flex-end;
  z-index: 1000;
`;

const StyledModalBackgroundColor = theme(`mode`, {
  light: props => props.theme.colors.white,
  dark: props => props.theme.colors.black,
});

const StyledModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${StyledModalBackgroundColor};
  z-index: 100;
  width: 80%;
  height: 80vh;
  padding: 8px;
`;

const StyledDarkLightModeSwitcherButtonColor = theme(`mode`, {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

const StyledDarkLightModeSwitcherButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 3px;
  color: ${StyledDarkLightModeSwitcherButtonColor};
  border: 2px solid transparent;
  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
    `}
  &:hover, &:focus {
    border: 2px solid ${props => props.theme.colors.primary};

    cursor: pointer;
  }
`;

export const NavLink = props => (
  <StyledNavListLink>
    <Link {...props} />
  </StyledNavListLink>
);

const Navigation = props => {
  const {
    theme: { mode },
  } = props;
  let logoFillColor;
  if (mode === `light`) {
    logoFillColor = colors.black;
  } else {
    logoFillColor = colors.white;
  }
  const { closeModal, isOpen, Modal, toggleModal } = useModal();
  const { y } = useWindowScrollPosition();

  const searchBarRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen) {
      if (searchBarRef.current !== null) {
        searchBarRef.current.querySelector(`input`).focus();
      }
    }
  }, [isOpen]);

  const isMobile = useMedia(
    // Media queries
    [`(max-width: 576px)`],
    //
    [true],
    // default
    [false]
  );

  if (Array.isArray(isMobile) && isMobile[0] === false && isOpen) {
    closeModal();
  }

  return (
    <Location>
      {() => (
        <StyledWrapper>
          <StyledNavWrapper>
            <Link to="/" aria-label="Go to home">
              <StyledNavLogo scrollPositionY={y}>
                <Logo fillColor={logoFillColor} />
              </StyledNavLogo>
            </Link>
            {!Array.isArray(isMobile) && isMobile ? (
              <>
                <StyledSearchIconButton aria-label="search button" aria-haspopup="true" onClick={toggleModal}>
                  <StyledSearchIcon></StyledSearchIcon>
                </StyledSearchIconButton>
                {isOpen && (
                  <Modal>
                    <StyledModal>
                      <StyledSearch ref={searchBarRef}>
                        <InstantSearch searchClient={searchClient} indexName="jacob-blog">
                          <SearchBar />
                        </InstantSearch>
                      </StyledSearch>
                      <StyledModalCloseButton onClick={() => closeModal()}>
                        <FaWindowClose></FaWindowClose>
                      </StyledModalCloseButton>
                    </StyledModal>
                  </Modal>
                )}
              </>
            ) : (
              <StyledSearch>
                <InstantSearch searchClient={searchClient} indexName="jacob-blog">
                  <SearchBar />
                </InstantSearch>
              </StyledSearch>
            )}

            <StyledNav>
              <div>&nbsp;</div>
              <StyledNavList>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/me">About</NavLink>
                <li
                  css={`
                    padding: 1rem 1rem;
                    margin-bottom: 0;
                  `}
                >
                  <StyledDarkLightModeSwitcherButton
                    onClick={() => props.changeTheme()}
                    aria-label="Switch dark and light mode"
                  >
                    {mode === `light` ? <FaSun /> : <FaMoon />}
                  </StyledDarkLightModeSwitcherButton>
                </li>
                <li
                  css={`
                    padding: 1rem 0.5rem;
                    margin-bottom: 0;
                  `}
                >
                  <a href="https://github.com/JCofman/jc-website">GitHub </a>
                </li>
              </StyledNavList>
            </StyledNav>
          </StyledNavWrapper>
        </StyledWrapper>
      )}
    </Location>
  );
};

export default withTheme(Navigation);
