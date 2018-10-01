import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import Heading from "dumbComponents/common/Typography/Heading";
import Paragraph from "dumbComponents/common/Typography/Paragraph";
import { UrlSearchParams } from "services/Utils";
import Loader from "dumbComponents/common/UI/Loader";
import Navbar from "dumbComponents/common/Navbar";

const StyledSection = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: block;
  &:before {
    box-sizing: border-box;
  }
  &:after {
    box-sizing: border-box;
  }
`;

const Highlighter = styled.div`
  height: 6px;
  width: 55px;
  border-radius: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #11adf3;
`;

class SignContract extends Component {

  state = {
    loader: true
  };

  loadState = event => {
    if (this.state.loader) {
      this.setState({ loader: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <StyledSection
          className={"container"}
          style={{ display: this.state.loader ? "none" : "block" }}
        >
          <Flex justifyContent={"center"}>
            <Heading type={"h2"}>Let's get started</Heading>
          </Flex>
          <Highlighter />
          <Flex justifyContent={"center"}>
            <Box width={1 / 2}>
              <Paragraph align={"center"}>
                By signing the Referral Concierge Agreement, <br /> you’ll be
                able to start receiving and sending referrals.
              </Paragraph>
            </Box>
          </Flex>
          <Flex>
            <iframe
              ref="iframe"
              width="100%"
              style={{ height: "100vh" }}
              frameBorder="0"
              id={"agreementView"}
              src={decodeURIComponent(UrlSearchParams("url"))}
              onLoad={this.loadState}
            />
          </Flex>
        </StyledSection>
        {/* <Loader style={{ display: this.state.loader ? "block" : "none" }} /> */}
      </React.Fragment>
    );
  }
}

export default SignContract;
