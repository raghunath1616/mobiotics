import React, { Component } from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"

const Wrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const ContentBox = styled.div`
  width: 450px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  border: solid 0.5px #ced8e1;
  @media (max-width: 350px) {
    width: 290px;
  }
`

const withOnboarding = WrappedComponent => class extends Component {
  render() {
    return (
      <Wrapper>
        <ContentBox>
          <WrappedComponent {...this.props} />
        </ContentBox>
      </Wrapper>
    )
  }
}

export default withOnboarding
