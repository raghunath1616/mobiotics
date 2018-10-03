import React, { Component } from "react"
import styled from "styled-components"
import Container from "container/SearchAgents"
import { Flex, Box } from "@rebass/grid"
import Checkbox from "dumbComponents/common/UI/Checkbox"

const StyledBox = styled(Box)`
  margin: 8px 0;
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
          filter && filter.slice(0, mapper[title].limit).map((filterItem, index) => (
            <StyledBox key={filterItem.key}>
              <Checkbox id={`${title}-${index}`} onChange={() => onFilter(title, filterItem)}>
                {`${filterItem.key} (${filterItem.doc_count})`}
              </Checkbox>
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
