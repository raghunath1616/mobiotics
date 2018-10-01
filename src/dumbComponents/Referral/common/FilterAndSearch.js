import React from "react"
import styled from "styled-components"
import Button from "dumbComponents/common/UI/Button"
import SearchIcon from "images/icons/search-icon.svg"

export const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;

  button {
    margin: 0px 5px;
  }
`

const SearchInputWrap = styled.div`
  flex: 1;
  display: flex;
  margin-right: 20px;

  > img {
    background: #ffffff;
    padding: 0px 10px;
  }
  > input {
      flex: 1;
      padding: 12px;
      display: block;
      border: none;
      outline: none;

      &::placeholder {
        color: #fbfcfc;
      }
  }
`

const FilterAndSearch = ({ openFilterPanel }) => (
  <Wrapper>
    <SearchInputWrap>
      <img src={SearchIcon} alt="Search Icon" />
      <input type="text" placeholder="Search for Clients" />
    </SearchInputWrap>
    <Button
      bsStyle="secondary"
      style={{ width: "auto" }}
      onClick={openFilterPanel}
    >
      Filters
    </Button>
    {/*
    <Button
      bsStyle="secondary"
      icon="star"
      style={{ width: "auto" }}
    >
      Starred
    </Button>
    */}
  </Wrapper>
)

export default FilterAndSearch
