import React from 'react';
import { connectHits } from 'react-instantsearch-dom';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHits = styled.ol`
  position: absolute;
  list-style: none;
`;

const Hits = ({ hits }) => {
  return (
    <StyledHits>
      {hits.map(hit =>(
        <li key={hit.objectID}>{hit.frontmatter.title}</li>
      ))}
    </StyledHits>
  );
};

Hits.propTypes = {
  hits: PropTypes.array,
};
export default connectHits(Hits);
