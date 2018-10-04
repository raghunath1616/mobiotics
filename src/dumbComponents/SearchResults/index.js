import React, { Component } from "react"
import { Flex, Box } from "@rebass/grid"
import Container from "container/SearchAgents"
import Select from "dumbComponents/common/UI/Select"
import Paragraph from "dumbComponents/common/Typography/Paragraph"
import SearchBar from "dumbComponents/SearchResults/common/SearchBar"
import Agent, { Shimmer as AgentHolderShimmer } from "dumbComponents/SearchResults/common/Agent"
import Filters, { Shimmer as FilterHolderShimmer } from "dumbComponents/SearchResults/common/Filters"
import { mapLocation } from "services/Utils"
import Pagination from "rc-pagination"
import styled from "styled-components"
import Heading from "../common/Typography/Heading"
require("style-loader!css-loader!rc-pagination/assets/index.css")

const StyledFlex = styled(Flex)`
  margin: 15px 15px;
`
const StyledBox = styled(Box)`
  margin-top: 20px;
  padding-left: 20px;
`
const StyledParagraph = styled(Paragraph)`
  padding-top: 20px;
  margin-bottom: 0;
  text-align: right;
`

const EmptyStateWrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
`

const limit = 15
class SearchResults extends Component {
  state = {
    place: null,
    request: {
      areaa: true,
      size: limit,
      from: 0,
      fullname: "",
      sortByEntity: "random",
      sortIsAsc: true,
    },
    currentPage: 1,
    pageSize: limit,
    sortBy: [
      {
        label: "Random",
        value: "value",
      },
      {
        label: "A to Z",
        value: "sortByNameAsc",
      },
      {
        label: "Z to A",
        value: "sortByNameDesc",
      },
    ],
  }

  componentDidMount() {
    const { fetchAgents, location } = this.props
    const { state } = location
    const { request } = this.state
    const data = mapLocation({ ...request }, state)
    fetchAgents(data)
  }

  handleLocation = location => this.setState({ place: location })

  searchAgents = () => {
    const { fetchAgents } = this.props
    const { place, request } = this.state
    const data = mapLocation(
      { ...request },
      {
        location: place,
        fullname: document.getElementById("txtName").value,
        searchString: document.getElementById("txtAutocomplete").value,
      }
    )
    fetchAgents(data)
    this.setState({ currentPage: 1 })
  }

  fetchPaginatedResults = (page) => {
    const { request, fetchAgents } = this.props
    const newRequest = {
      ...request,
      from: (page - 1) * limit,
      facade: false,
    }
    this.setState({ currentPage: page })
    fetchAgents(newRequest)
    window.scrollTo(0, 0)
  }

  sortResults = (status) => {
    const { request, fetchAgents } = this.props
    const newRequest = { ...request }
    switch (status.value) {
      case "sortByNameAsc":
        newRequest.sortByEntity = "firstname"
        newRequest.sortIsAsc = true
        break
      case "sortByNameDesc":
        newRequest.sortByEntity = "firstname"
        newRequest.sortIsAsc = false
        break
      case "crsSinceAsc":
        newRequest.sortByEntity = "crs_designee_since"
        newRequest.sortIsAsc = false
        break
      default:
        newRequest.sortByEntity = "random"
        break
    }
    fetchAgents(newRequest)
  }

  render() {
    const {
      agents, agentsTotalCount, isFetchingAgents, isFilterFetching,
    } = this.props
    const { currentPage, pageSize, sortBy } = this.state
    return (
      <React.Fragment>
        <SearchBar location={this.handleLocation} onSearch={this.searchAgents} />
        <div style={{ background: "#ffffff" }}>
          <div className="container">
            <Flex alignItems="center" justifyContent="flex-end">
              <Box width={[1, 1, 2 / 3]}>
                <StyledParagraph>
                  <b>{agentsTotalCount}</b>
                  &nbsp;results
                </StyledParagraph>
              </Box>
              <StyledBox width={[1, 1, 1 / 3]}>
                <Select options={sortBy} defaultValue={sortBy[0]} onChange={this.sortResults} />
              </StyledBox>
            </Flex>
            <Flex>
              <Box width={[1, 1, 2 / 3]}>
                {!isFetchingAgents
                  && (agentsTotalCount > 0 ? agents.map(agent => <Agent agent={agent} key={agent.id} />) : <EmptyState />)}

                {isFetchingAgents && (
                  <AgentHolderShimmer shimmerIterator={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]} />
                )}

                {agentsTotalCount > 0 && (
                  <StyledFlex alignItems="center" justifyContent="center" style={{ marginTop: "30px" }}>
                    <Pagination
                      className="ant-pagination"
                      onChange={this.fetchPaginatedResults}
                      current={currentPage}
                      pageSize={pageSize}
                      total={agentsTotalCount}
                    />
                  </StyledFlex>
                )}
              </Box>
              <Box width={1 / 3}>
                {!isFilterFetching && <Filters />}
                {isFilterFetching && <FilterHolderShimmer />}
              </Box>
            </Flex>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const EmptyState = () => (
  <EmptyStateWrapper>
    <img src="https://s3.amazonaws.com/icons.agentdesks.com/mail_api/no-message%402x.png" alt="empty state" />
    <Heading type="h4">No agents found</Heading>
  </EmptyStateWrapper>
)

export default Container(SearchResults)
