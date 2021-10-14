import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Link } from 'gatsby';
import { withTheme, css } from 'styled-components';
import { InstantSearch } from 'react-instantsearch-dom';
import styled from 'styled-components';
import { Location } from '@reach/router';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaWindowClose } from 'react-icons/fa';
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineSearch,
  HiOutlineNewspaper,
} from 'react-icons/hi';

import useModal from '../../hooks/useModal';
import { useMedia } from '../../hooks/useMedia';
import { useWindowScrollPosition } from '../../hooks/useWindowScrollPosition';

import Logo from '../Logo';
import SearchBar from '../SearchBar';

import {
  StyledNav,
  StyledNavLogo,
  StyledNavWrapper,
  StyledNavList,
  StyledNavListItemLink,
  StyledWrapper,
} from './StyledNavigation';

const searchClient = algoliasearch(`8C28RWVQVQ`, `8bf43203e68ea1c9d485ccb865e18e99`);

const StyledSearchIcon = styled(HiOutlineSearch)`
  color: ${(props) => props.theme.primary};
  align-self: center;
`;

const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 12px;
  background-color: transparent;
  color: var(--color-text);
  cursor: pointer;
  border: none;
`;

const StyledSearchIconButton = styled.button`
  display: flex;
  width: 4rem;
  height: 7rem;
  background-color: transparent;
  color: var(--color-text);
  cursor: pointer;
  border: none;
`;

const StyledSearch = styled.div`
  align-self: center;
  justify-content: flex-end;
  z-index: 1000;
`;

const StyledModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-background);
  z-index: 100;
  width: 80%;
  height: 80vh;
  padding: 8px;
`;

const StyledDarkLightModeSwitcherButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: var(--border-4);
  color: var(--color-text);
  border: var(--border-2) solid transparent;
  ${(props) =>
    props.primary &&
    css`
      background: var(--color-primary);
      color: var(--color-white);
    `}
  &:hover, &:focus {
    border: var(--border-2) solid var(--color-primary);
    cursor: pointer;
    outline: none;
  }
`;

export const NavLink = (props) => {
  const { children, to, ...rest } = props;
  return (
    <StyledNavListItemLink {...rest}>
      <Link
        css={`
          display: flex;
          gap: 1rem;
        `}
        to={to}
      >
        {' '}
        {children}
      </Link>
    </StyledNavListItemLink>
  );
};

const iconMotion = {
  rest: {
    rotate: 0,
  },
  hover: {
    rotate: 9,
    transition: { type: 'spring', stiffness: 900 },
  },
};

const Navigation = (props) => {
  const {
    theme: { mode },
  } = props;
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
      {({ location: { pathname } }) => (
        <StyledWrapper>
          <StyledNavWrapper>
            <Link to="/" aria-label="Go to home">
              <StyledNavLogo scrollPositionY={pathname === `/` ? y : 1}>
                <Logo />
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
                <NavLink initial={'rest'} whileHover="hover" to="/">
                  <motion.div variants={iconMotion}>
                    <HiOutlineHome></HiOutlineHome>
                  </motion.div>
                  Home
                </NavLink>
                <NavLink initial="rest" to="/blog" whileHover="hover" animate="rest">
                  {' '}
                  <motion.div variants={iconMotion}>
                    <HiOutlineNewspaper></HiOutlineNewspaper>
                  </motion.div>
                  Blog
                </NavLink>
                <NavLink initial="rest" to="/about" whileHover="hover" animate="rest">
                  <motion.div variants={iconMotion}>
                    <HiOutlineUserCircle></HiOutlineUserCircle>
                  </motion.div>
                  About
                </NavLink>
                <li
                  css={`
                    padding: 1rem 1rem;
                    margin-bottom: 0;
                  `}
                >
                  <StyledDarkLightModeSwitcherButton
                    onClick={() => {
                      props.changeTheme();
                    }}
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
