import React, { Component } from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Container from "container/SearchAgents"
import Heading from "dumbComponents/common/Typography/Heading"
import { ShimmerBox } from "shared/styles/animation"
import FilterContainer from "./FilterContainer"

const StyledFlex = styled(Flex)`
  margin: 20px 0 0;
  border: 1px solid #e7eaec;
  padding: 20px;
  margin-left: 20px;
  @media (max-width: 500px) {
    display: none;
  }
`

class Filters extends Component {
  state = {
    mapper: {
      specializations: {
        display: "Speciality",
        limit: 10,
        expand: false,
        value: "specialties",
      },
      languages: {
        display: "Languages",
        limit: 10,
        expand: false,
        value: "languages",
      },
      designations: {
        display: "Designations",
        limit: 10,
        expand: false,
        value: "designation",
      },
      certifications: {
        display: "Certifications",
        limit: 10,
        expand: false,
        value: "certifications",
      },
      citiesServed: {
        display: "Neighborhoods Served",
        limit: 10,
        expand: false,
        value: "citiesServed",
      },
      counties: {
        display: "Counties Served",
        limit: 10,
        expand: false,
        value: "countiesServed",
      },
      companies: {
        display: "Company",
        limit: 10,
        expand: false,
        value: "companies",
      },
    },
  }

  expandOrCollapse = (title) => {
    const { mapper } = this.state
    const { facades } = this.props
    const newMapper = {
      ...mapper,
      [title]: {
        ...mapper[title],
        expand: (mapper[title].expand = !mapper[title].expand),
        limit: mapper[title].limit > 10 ? 10 : facades[title].length,
      },
    }

    this.setState({ mapper: newMapper })
  }

  filterResults = (key, item) => {
    const { request, fetchAgents, resetPagination } = this.props
    const { mapper } = this.state
    const newRequest = { ...request }
    if (!newRequest[mapper[key].value]) {
      newRequest[mapper[key].value] = []
    }
    newRequest.facade = false
    newRequest.from = 0
    newRequest[mapper[key].value] = newRequest[mapper[key].value]
      && newRequest[mapper[key].value].indexOf(item.key) > -1
      ? newRequest[mapper[key].value].filter(filterItem => filterItem !== item.key)
      : newRequest[mapper[key].value].concat(item.key)
    fetchAgents(newRequest)
    resetPagination()
  }

  render() {
    const { mapper } = this.state
    const { facades } = this.props
    return (
      <StyledFlex>
        <Box width="100%">
          <Flex justifyContent="center">
            <Heading type="h4">FILTERS</Heading>
          </Flex>
          {facades
            && Object.keys(mapper).map(key => (
              <React.Fragment key={key}>
                <Flex>
                  <Heading type="h5">{mapper[key].display}</Heading>
                </Flex>
                <FilterContainer
                  filter={facades[key]}
                  mapper={mapper}
                  title={key}
                  onAction={this.expandOrCollapse}
                  onFilter={this.filterResults}
                />
              </React.Fragment>
            ))}
        </Box>
      </StyledFlex>
    )
  }
}

const ShimmerItem = (props) => {
  const { iterator } = props
  return (
    <Box>
      {iterator.map(item => (
        <ShimmerBox key={item} w="200px" h="10px" mb="20px" />
      ))}
    </Box>
  )
}

export const Shimmer = () => (
  <StyledFlex>
    <Box width="100%">
      <Flex>
        <ShimmerBox w="140px" h="20px" style={{ margin: "30px auto" }} />
      </Flex>
      {[1, 2, 3, 4, 5, 6, 7].map(item => (
        <div key={item}>
          <Flex>
            <ShimmerBox w="140px" h="16px" mb="20px" />
          </Flex>
          <ShimmerItem iterator={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        </div>
      ))}
    </Box>
  </StyledFlex>
)

export default Container(Filters)
