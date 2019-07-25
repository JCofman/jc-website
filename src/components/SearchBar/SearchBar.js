import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from "downshift";

import { FaSearch } from 'react-icons/fa';
import { connectSearchBox } from 'react-instantsearch-dom';

const StyledSearchIcon = styled(FaSearch)`
  position: absolute;
  top: 27px;
  color: ${props => props.theme.primary};
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: 0;
  padding: 4px 4px 4px 29px;
  color: white;

  &:focus,
  &:active {
    border-radius: 0.25rem;
  }
  &::placeholder {
    color: ${props => props.theme.primary};
  }
`;

const StyledForm = styled.form`
  margin-bottom: 0px;
`
    
  </StyledForm>
const SearchBar = ({ currentRefinement, isSearchStalled, refine }) => (
  <Downshift
  onChange={selection =>
    alert(selection ? `You selected ${selection.value}` : "Selection Cleared")
  }
  itemToString={item => (item ? item.value : "")}
>
  {({
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItem
  }) => (
    <StyledForm noValidate action="" role="search">
    <label {...getLabelProps()}><StyledSearchIcon /></label>
      <StyledInput
      placeholder="Search blog..."
      type="search"
      value={currentRefinement}
      {...getInputProps()}
      onChange={event => refine(event.currentTarget.value)}
    />
      <ul {...getMenuProps()}>
        {isOpen
          ? items
              .filter(item => !inputValue || item.value.includes(inputValue))
              .map((item, index) => (
                <li
                  {...getItemProps({
                    key: item.value,
                    index,
                    item,
                    style: {
                      backgroundColor:
                        highlightedIndex === index ? "lightgray" : "white",
                      fontWeight: selectedItem === item ? "bold" : "normal"
                    }
                  })}
                >
                  {item.value}
                </li>
              ))
          : null}
      </ul>
      {isSearchStalled ? `My search is stalled` : ``}
    </StyledForm>
  )}
</Downshift>
);

SearchBar.displayName = `SearchBar`;

SearchBar.propTypes = {
  /** any nodes to be rendered (usually text nodes) */
  currentRefinement: PropTypes.string,

  /** typography of the SearchBar */
  isSearchStalled: PropTypes.bool,
  refine: PropTypes.func,
};

export default connectSearchBox(SearchBar);
