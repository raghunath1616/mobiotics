import React, { Component } from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import Container from "container/SearchAgents"
import PhoneNumber from "dumbComponents/common/UI/PhoneNumber"
import Button from "dumbComponents/common/UI/Button"
import Paragraph from "./Typography/Paragraph"

library.add(faTimes)

const StyledFlex = styled(Flex)`
  align-items: center;
  justify-content: space-evenly;
  background: rgba(1, 137, 171, 0.91);
  padding: 5px;
  @media (max-width: 500px) {
    display: none;
  }
`

const DownloadAppContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
`

class DownloadApp extends Component {
  sendAppDownloadLink = (event) => {
    event.preventDefault()
    const { sendAppLinkToDownload, phone, countryCode } = this.props
    sendAppLinkToDownload({ phone, countryCode })
  }

  onPhoneNumberChange = (event) => {
    const {
      target: { rawValue },
    } = event
    const { updatePhoneNumber } = this.props
    updatePhoneNumber({ phone: rawValue })
  }

  render() {
    const { hideAppBar, phone, isSendingAppLink } = this.props
    return (
      <StyledFlex>
        <div className="container" style={{ padding: "0 0" }}>
          <DownloadAppContainer>
            <Paragraph marginBottom={0} size="16px" color="#ffffff">
              Have you downloaded the latest &ldquo;Find an AREAA&rdquo; app?
            </Paragraph>
            <Box width={1 / 4}>
              <form onSubmit={this.sendAppDownloadLink}>
                <Flex flexDirection="row">
                  <PhoneNumber
                    placeholder="Mobile number"
                    bordertoprightradius={0}
                    borderbottomrightradius={0}
                    phone={phone}
                    onPhoneNumberChange={this.onPhoneNumberChange}
                  />
                  <StyledButton type="submit">{ !isSendingAppLink ? "Get the link" : "Sending..." }</StyledButton>
                </Flex>
              </form>
            </Box>
            <Paragraph marginBottom={0} size="16px" color="#ffffff">
              or download via
            </Paragraph>
            <a href="https://itunes.apple.com/us/app/agentdesks-real-estate-agents/id974478110?mt=8" target="_blank">
              <img src="https://d2fedz0by71ckz.cloudfront.net/images/appstore2.png" height="26" alt="ios" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.agentdesks.android.crm&hl=en" target="_blank">
              <img src="https://d2fedz0by71ckz.cloudfront.net/images/playstore2.png" height="26" alt="android" />
            </a>
            <StyledFontAwesomeIcon icon="times" onClick={hideAppBar} />
          </DownloadAppContainer>
        </div>
      </StyledFlex>
    )
  }
}

export default Container(DownloadApp)
