import React, { Component } from "react"
import styled from "styled-components"
import { Box } from "@rebass/grid"
import Container from "container/SearchAgents"
import Textbox from "dumbComponents/common/UI/Textbox"
import Button from "dumbComponents/common/UI/Button"
import Heading from "dumbComponents/common/Typography/Heading"
import GoogleAutocompleteTextbox from "dumbComponents/common/UI/GoogleAutocompleteTextbox"

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(7, 14, 40, 0.6);
  padding: 50px;
`

const HeroImage = styled.div`
  background-image: url(https://d2fedz0by71ckz.cloudfront.net/images/background-image-crs.jpg);
  background-size: cover;
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const StyledButton = styled(Button)`
  background: #2684ff;
  border-color: #2684ff;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  padding: 15px 15px;
  @media (max-width: 500px) {
    margin-bottom: 10px;
    width: 100%;
  }
`

const StyledTextbox = styled(Textbox)`
  height: 57px;
  border-left: none;
  border-top: none;
  border-bottom: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`

const StyledGoogleAutocompleteTextbox = styled(GoogleAutocompleteTextbox)`
  height: 57px;
  border-left: none;
  border-top: none;
  border-bottom: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`

const SearchBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  padding: 0 20px;
  margin-top: 10px;
  @media (max-width: 500px) {
    flex-flow: column wrap;
  }
`

class Home extends Component {
  state = {
    location: null,
  }

  searchAgents = () => {
    const { history } = this.props
    const { location } = this.state
    history.push("/search-agents", {
      fullname: document.getElementById("txtName").value,
      location,
      searchString: document.getElementById("txtAutocomplete").value,
    })
  }

  handleLocation = (location) => {
    this.setState({ location })
  }

  render() {
    return (
      <React.Fragment>
        <FlexContainer>
          <HeroImage>
            {/* <Flex alignItems="center" justifyContent="center">
              <img src="https://s3.amazonaws.com/icons.agentdesks.com/mail_api/areaa_logo.png" alt="AREAA" />
            </Flex> */}
            <Footer>
              <Box width={[1, 1, 3 / 5]}>
                <SearchBox>
                  <StyledTextbox placeholder="Name" id="txtName" />
                  <StyledGoogleAutocompleteTextbox
                    id="txtAutocomplete"
                    type={["geocode"]}
                    location={this.handleLocation}
                    style={{ borderTopLeftRadius: 0, borderBottomleftRadius: 0 }}
                    placeholder="City, State or Zip"
                  />
                  <StyledButton onClick={this.searchAgents}>Search</StyledButton>
                </SearchBox>
              </Box>
              <Box>
                <Heading type="h3" color="#ffffff">
                  Powered by Radius Agent
                </Heading>
              </Box>
            </Footer>
          </HeroImage>
        </FlexContainer>
      </React.Fragment>
    )
  }
}

export default Container(Home)
