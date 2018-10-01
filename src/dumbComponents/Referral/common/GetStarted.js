import React from "react"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"
import Button from "dumbComponents/common/UI/Button"
import Heading from "dumbComponents/common/Typography/Heading"

const StyledStart = styled.div`
  background-color: #ffffff;
  border: solid 1px #ebeaea;
  padding: 2rem;
`;

const GetStarted = props => (
  <StyledStart>
    <Flex justifyContent="center">
      <Box width={2 / 3} pb={30}>
        <Heading type={"h2"} lineHeight={1.28}>
          Join our free referral platform and boost your <br /> business by
          sending and receiving referrals.
        </Heading>
      </Box>
    </Flex>
    <Flex justifyContent="center">
      <Box>
        <Button onClick={props.signContract}>Get Started</Button>
      </Box>
    </Flex>
  </StyledStart>
);

export default GetStarted;
