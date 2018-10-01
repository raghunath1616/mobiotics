import React, { Component } from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Container from "container/SearchAgents"
import PhoneNumber from "dumbComponents/common/UI/PhoneNumber"
import Button from "dumbComponents/common/UI/Button"
import Paragraph from "./Typography/Paragraph"

const StyledFlex = styled(Flex)`
  align-items: center;
  justify-content: space-evenly;
  background: rgba(1, 137, 171, 0.91);
  padding: 5px;
  @media (max-width: 500px) {
    display: none;
  }
`

const StyledButton = styled(Button)`
  background: #11adf3;
  border-color: #11adf3;
  height: 35px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  &:hover {
    border-color: #11adf3;
  }
`

class DownloadApp extends Component {
  state = {
    phone: null,
    countryCode: "1",
  }

  sendAppDownloadLink = (event) => {
    event.preventDefault()
    const { sendAppLinkToDownload } = this.props
    const { phone, countryCode } = this.state
    sendAppLinkToDownload({ phone: countryCode + phone })
  }

  onPhoneNumberChange = (event) => {
    const { target } = event
    const { rawValue } = target
    this.setState({ phone: rawValue })
  }

  render() {
    const { phone } = this.state
    return (
      <StyledFlex>
        <Paragraph marginBottom={0} size="16px" color="#ffffff">
          Have you downloaded the latest &ldquo;Find an AREAA&rdquo; app?
        </Paragraph>
        <Box width={1 / 4}>
          <form onSubmit={this.sendAppDownloadLink}>
            <Flex flexDirection="row">
              <PhoneNumber placeholder="Mobile number" bordertoprightradius={0} borderbottomrightradius={0} value={phone} onPhoneNumberChange={this.onPhoneNumberChange} />
              <StyledButton type="submit">Get the link</StyledButton>
            </Flex>
          </form>
        </Box>
        <Paragraph marginBottom={0} size="16px" color="#ffffff">
          or download via
        </Paragraph>
        <img src="https://d2fedz0by71ckz.cloudfront.net/images/appstore2.png" height="26" alt="ios" />
        <img src="https://d2fedz0by71ckz.cloudfront.net/images/playstore2.png" height="26" alt="android" />
      </StyledFlex>
    )
  }
}

export default Container(DownloadApp)
