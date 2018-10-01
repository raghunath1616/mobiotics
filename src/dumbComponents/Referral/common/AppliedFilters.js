import React from "react"
import styled from "styled-components"
import closeIcon from "images/icons/error-icon.svg"

const Wrapper = styled.div`
`

const FilterBox = styled.span`
  border-radius: 18px;
  border: 2px solid #354052;
  padding: 5px 10px;
  margin-right: 10px;
  text-align: center;
  > span {
    color: #354052;
  }
`

const DullButton = styled.button`
  background: transparent;
  border: none;
`

const Img = styled.img`
  position: relative;
  top: 3px;
  left: 3px;
`
//const CloseBTN = styled

const Filter = ({ id, item, onClick }) => (
  <FilterBox>
    <span>{item.display_name}</span>
    <DullButton onClick={() => { onClick({ id, item }) }}>
      <Img
        src={closeIcon}
        alt="Close Icon"
      />
    </DullButton>
  </FilterBox>
)

const AppliedFilters = ({ appliedFilters, removeFilter }) => (
  appliedFilters ? (
    <Wrapper>
      { Object.keys(appliedFilters).map((key) => {
        if (Array.isArray(appliedFilters[key])) {
          return appliedFilters[key].map(item => (
            <Filter
              key={item.value}
              id={key}
              item={item}
              onClick={removeFilter}
            />
          ))
        }
        return null
      })
      }
    </Wrapper>
  ) : null
)

export default AppliedFilters
