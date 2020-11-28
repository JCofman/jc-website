import React from 'react';
import theme from 'styled-theming';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaListUl } from 'react-icons/fa';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Divider from '../Divider';
import Heading from '../Heading';

const TableOfContentsColor = theme(`mode`, {
  light: (props) => props.theme.colors.black,
  dark: (props) => props.theme.colors.white,
});

const TableOfContentsBackgroundColor = theme(`mode`, {
  light: (props) => props.theme.colors.light,
  dark: (props) => props.theme.colors.dark,
});

const StyledTableOfContentsNavigation = styled.nav`
  display: none;
  padding: 1.6rem;
  margin-left: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 300px;
  font-family: 'Raleway', sans-serif;
  color: ${TableOfContentsColor};
  background: ${TableOfContentsBackgroundColor};
  position: sticky;
  top: 70px;

  ${(props) => props.theme.xlarge} {
    display: flex;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-rendering: optimizelegibility;
    margin-bottom: 16px;
  }

  a {
    display: block;
    opacity: 0.8;
    text-decoration: none;
    transition: opacity 500ms ease 0s;
    margin-top: 1rem;
    text-align: left;
  }

  a:hover,
  a:focus {
    color: var(--color-primary);
  }
`;

const TableOfContents = (props) => {
  const { items } = props;
  return (
    <div>
      {items && items.length > 0 ? (
        <StyledTableOfContentsNavigation>
          <Heading appearance={`H2`}>
            <FaListUl></FaListUl> Table of contents
          </Heading>

          <Divider></Divider>
          {items.map((item) => {
            const { url, title } = item;
            return (
              <AnchorLink key={title} to={`./${url}`}>
                {title}
              </AnchorLink>
            );
          })}
        </StyledTableOfContentsNavigation>
      ) : null}
    </div>
  );
};

PropTypes.displayName = `TableOfContents`;

export default TableOfContents;
