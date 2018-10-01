import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components";
import Heading from "dumbComponents/common/Typography/Heading";
import GoogleAutoComplete from "dumbComponents/common/UI/GoogleAutoComplete";
import Tag from "dumbComponents/common/UI/Tag";
import axios from "axios";

const StyledTopAgents = styled.div`
  padding-bottom: ${props =>
    props.paddingBottom ? props.paddingBottom : "90px"};
`;

const StyledAutoCompleteBox = styled.div`
  margin-top: 30px;
`;

const Highlighter = styled.div`
  height: 6px;
  width: 55px;
  border-radius: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #11adf3;
`;

const TagBlock = styled.div`
  display: inline-block;
  margin-bottom: 10px;
`;

const Bold = styled.b`
  font-weight: 500;
`;

class TopAgents extends Component {
  state = {
    callbackUrl: APP_URL + "referrals/document-signed",
    agentMetrics: false,
    autoCompleteLoader: false
  };

  handleCity(location) {
    console.log("location", location);
    this.setState({ autoCompleteLoader: true });
    const data = {
      type: "LOCATION",
      city: location.locality.long_name,
      searchString: location.address,
      state: location.administrative_area_level_1
        ? location.administrative_area_level_1.long_name
        : undefined,
      country: location.country.long_name,
      facade: true,
      from: 0,
      size: 1
    };
    axios.post(API_URL + "agent/elastic/metrics", data).then(
      result => {
        if (result.data.response.metrics.length > 0) {
          this.setState({
            agentMetrics: result.data.response.metrics,
            autoCompleteLoader: false
          });
        } else {
          this.setState({
            agentMetrics: [{ count: "20+", text: "top agents in the city" }],
            autoCompleteLoader: false
          });
        }
      },
      error => {
        this.setState({ autoCompleteLoader: false });
      }
    );
  }

  render() {
    if (this.state.agentMetrics) {
      console.log("rerendering");
    } else {
      console.log("rendering");
    }
    return (
      <StyledTopAgents paddingBottom={this.props.paddingBottom}>
        <Flex justifyContent="center">
          <Heading type={"h2"}>
            A national network of over 40,000 top agents
          </Heading>
        </Flex>
        <Highlighter />
        <Flex justifyContent="center">
          <Box width={1 / 4}>
            <StyledAutoCompleteBox>
              <GoogleAutoComplete
                id={"cities"}
                types={["(cities)"]}
                location={this.handleCity.bind(this)}
                placeholder={"Search by city"}
                loader={this.state.autoCompleteLoader}
              />
            </StyledAutoCompleteBox>
          </Box>
        </Flex>
        {this.state.agentMetrics &&
          this.state.agentMetrics.map((stats, index) => (
            <Flex key={index} justifyContent={"center"}>
              <Box>
                <TagBlock>
                  <Tag hide={true} size={"1rem"}>
                    <Bold>{stats.count}</Bold> &nbsp; {stats.text}
                  </Tag>
                </TagBlock>
              </Box>
            </Flex>
          ))}
      </StyledTopAgents>
    );
  }
}

export default TopAgents;
