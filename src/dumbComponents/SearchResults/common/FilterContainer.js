import React, { Component } from "react"
import styled from "styled-components"
import Container from "container/SearchAgents"
import { Flex, Box } from "@rebass/grid"

const StyledBox = styled(Box)`
  margin: 8px 0;
`
const StyledLabel = styled.label`
  color: #676a6c;
  font-size: 16px;
`

const ShowMoreWrapper = styled(Box)`
  text-align: right;
  margin: 5px 0;
`

const ShowMoreAnchor = styled.a`
  color: #757575;
  text-decoration: none;
  &:hover {
    color: #337ab7;
  }
`

const WrapperFilter = styled(Flex)`
  align-items: flex-start;
  justify-content: center;
  flex-flow: column wrap;
  border-bottom: solid 1px #f2f2f3;
  padding-bottom: 20px;
  &:last-child {
    border-bottom: none;
  }
`

class FilterContainer extends Component {
  expandOrCollapse = (title) => {
    const { mapper, facades } = this.props
    mapper[title].expand = !mapper[title].expand
    mapper[title].limit = (mapper[title].expand) ? facades[title].length : 10
  }

  render() {
    const {
      filter,
      mapper,
      title,
      onAction,
      onFilter,
    } = this.props
    return (
      <WrapperFilter>
        {
          filter && filter.slice(0, mapper[title].limit).map(filterItem => (
            <StyledBox key={filterItem.key}>
              <input type="checkbox" onChange={() => onFilter(title, filterItem)} />
              &nbsp;
              <StyledLabel>{`${filterItem.key} (${filterItem.doc_count})`}</StyledLabel>
            </StyledBox>
          ))
        }
        <ShowMoreWrapper width="100%">
          <ShowMoreAnchor href="javascript:void(0)" onClick={() => onAction(title)}>
            { mapper[title].expand ? "Show less" : "Show more" }
          </ShowMoreAnchor>
        </ShowMoreWrapper>
      </WrapperFilter>
    )
  }
}

export default Container(FilterContainer)
