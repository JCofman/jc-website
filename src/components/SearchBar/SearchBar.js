import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import { navigate } from 'gatsby';
import theme from 'styled-theming';
import { FaSearch } from 'react-icons/fa';
import { connectAutoComplete, connectHits } from 'react-instantsearch-dom';

import Hits from '../Hits';
import { sizes } from '../Layout/Theme';

const ConnectedHits = connectHits(Hits);

const InputBackgroundColor = theme(`mode`, {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

const InputColorSmall = theme(`mode`, {
  light: props => props.theme.colors.white,
  dark: props => props.theme.colors.black,
});

const InputColor = theme(`mode`, {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

const StyledSearchIcon = styled(FaSearch)`
  position: absolute;
  top: 27px;
  color: ${props => props.theme.primary};
`;

const StyledForm = styled.form`
  margin-bottom: 0px;
  display: 'flex';
  flex: '0 0 auto';
  flex-direction: 'row';
  align-items: 'center';
  padding-left: '0.25rem';
  padding-right: '0.25rem';
  ${props => props.theme.small} {
    justify-content: 'flex-end';
    margin-right: 10;
  }
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: 0;
  color: ${InputColor};
  appearance: 'none';
  width: 100%;
  font-size: 18px;
  padding: 4px 4px 4px 29px;

  &:focus,
  &:active {
    border-radius: 0.25rem;
    outline: 0;
  }
  &::placeholder {
    color: ${props => props.theme.primary};
  }

  @media (max-width: ${sizes.phone}px) {
    font-size: 16px;
    width: 16px;
    transition: width 0.2s ease padding 0.2s ease;
    padding-left: 16px;
    &:focus {
      padding-left: 29px;
      width: 15rem;
      outline: none;
      background-color: ${InputBackgroundColor};
      color: ${InputColorSmall};
    }
  }
`;

const SearchBar = ({ isSearchStalled, refine, hits }) => {
  const [inputValue, setState] = React.useState({ inputValue: `` });

  return (
    <Downshift
      itemToString={i => (i ? i.frontmatter.title : i)}
      onChange={item => navigate(item.frontmatter.path)}
      defaultHighlightedIndex={0}
      initialInputValue=""
      inputValue={inputValue.inputValue}
    >
      {({ getInputProps, getItemProps, getLabelProps, getMenuProps, isOpen, highlightedIndex, selectedItem }) => (
        <div>
          <StyledForm noValidate action="" role="search">
            <label {...getLabelProps()}>
              <StyledSearchIcon />
            </label>
            <StyledInput
              placeholder="Search blog..."
              type="search"
              aria-label="Search"
              {...getInputProps({
                onChange(e) {
                  setState({ inputValue: e.target.value });
                  refine(e.target.value);
                },
              })}
            />
            {isOpen && (
              <div>
                <ConnectedHits
                  getMenuProps={getMenuProps}
                  hits={hits}
                  getItemProps={getItemProps}
                  highlightedIndex={highlightedIndex}
                  selectedItem={selectedItem}
                />
              </div>
            )}
            {isSearchStalled ? `My search is stalled` : ``}
          </StyledForm>
        </div>
      )}
    </Downshift>
  );
};

SearchBar.displayName = `SearchBar`;

SearchBar.propTypes = {
  currentRefinement: PropTypes.string,
  isSearchStalled: PropTypes.bool,
  refine: PropTypes.func,
};

export default connectAutoComplete(SearchBar);
