import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Link } from 'gatsby';
import { Highlight } from 'react-instantsearch-dom';

import Divider from '../Divider';
import Heading from '../Heading';

const StyledHitsBackgroundColor = theme(`mode`, {
  light: props => props.theme.colors.white,
  dark: props => props.theme.colors.black,
});

const StyledHits = styled.ul`
  background-color: ${StyledHitsBackgroundColor};
  position: absolute;
  list-style: none;
`;

const StyledHitColor = theme(`mode`, {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

const StyledHit = styled.li`
  background-color: ${StyledHitsBackgroundColor};
  color: ${StyledHitColor};
  padding: 0.8rem;
  letter-spacing: 0.05px;
  font-size: 18px;
  color: ${props => (props.highlightedIndex === props.index ? props.theme.colors.primary : StyledHitColor)};
  a {
    color: ${props => (props.highlightedIndex === props.index ? props.theme.colors.primary : StyledHitColor)};
  }
`;

const Hits = ({ getMenuProps, hits, getItemProps, highlightedIndex }) => {
  return (
    <StyledHits {...getMenuProps()}>
      <Heading
        appearance={`H6`}
        css={`
          margin-left: 2rem;
          margin-top: 2rem;
        `}
      >
        Blogposts
      </Heading>
      <Divider
        style={{
          backgroundColor: `black`,
        }}
      ></Divider>
      {hits.length > 0 ? (
        hits.map((hit, index) => {
          return (
            <StyledHit
              index={index}
              highlightedIndex={highlightedIndex}
              key={hit.objectID}
              {...getItemProps({
                item: hit,
                key: hit.objectID,
                index,
                style: {
                  fontWeight: highlightedIndex === index ? `bold` : `normal`,
                },
              })}
            >
              <Link to={hit.path}>
                <Highlight hit={hit} attribute="title" tagName="mark" />
              </Link>
            </StyledHit>
          );
        })
      ) : (
        <StyledHit
          key={`nothing-found`}
          {...getItemProps({
            item: `nothing-found`,
            index: 1,
          })}
        >
          😢 Sorry no search results found
        </StyledHit>
      )}
    </StyledHits>
  );
};

Hits.propTypes = {
  hits: PropTypes.array,
  getMenuProps: PropTypes.func,
  getItemProps: PropTypes.func,
  highlightedIndex: PropTypes.number,
  selectedItem: PropTypes.object,
};
export default Hits;
