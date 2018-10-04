import React, { Component } from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import { toast } from "react-toastify"
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
  background-image: rgba(255, 0, 0, 0.25), url(https://d2fedz0by71ckz.cloudfront.net/images/background-image-crs.jpg);
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
  height: 68px;
  padding: 0 32px;
  border-left: none;
  border-top: none;
  border-bottom: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 20px;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
    height: 50px;
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

const Wrapper = styled(Flex)`
  min-height: 90vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("https://d2fedz0by71ckz.cloudfront.net/images/Policy+Day+2018.jpg");
  background-size: cover;
  background-position: center center;
  padding: 15px;
  flex-direction: column;
`

const Form = styled.form`
  width: 100%;
  max-width: 1290px;
`

const FormFieldSet = styled.fieldset`
  margin: 0;
  padding: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  -webkit-padding-before: 0;
  -webkit-padding-start: 0;
  -webkit-padding-end: 0;
  -webkit-padding-after: 0;
  border: 0;
  padding: 0.35rem 0.75rem 0.625rem;
`

const FormLegend = styled.legend`
  font-size: 72px;
  line-height: 1;
  color: #fff;
  margin-bottom: 60px;
  margin: 0;
  padding: 0;
  display: block;
  -webkit-padding-start: 0;
  -webkit-padding-end: 0;
  @media screen and (max-width: 992px) {
    font-size: 50px;
    text-align: center;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 767px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`

const FormElement = styled(Flex)`
  background: rgba(0, 0, 0, 0.5);
  padding: 50px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 992px) {
    padding: 30px 35px;
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    padding: 20px;
  }
`

const FormInputContainer = styled.div`
  margin-right: ${props => (props.marginRight ? props.marginRight : "30px")};
  height: 68px;
  flex-grow: ${props => props.flexGrow};
  width: ${props => props.width};
  min-width: ${props => props.minWidth};
  @media screen and (max-width: 992px) {
    height: 50px;
  }
  @media screen and (max-width: 767px) {
    margin-right: 0;
    &.first-wrap {
      width: 100%;
      margin-bottom: 20px;
    }
    &.second-wrap {
      width: calc(50% - 10px);
      min-width: auto;
    }
    &.third-wrap {
      width: calc(50% - 10px);
    }
  }
`

const FormInput = styled(Textbox)`
  height: 100%;
  background: #fff;
  border-radius: 0.5px;
  border: 0;
  display: block;
  width: 100%;
  padding: 0 32px;
  font-size: 20px;
  &:hover,
  &:focus {
    box-shadow: none;
    outline: 0;
  }
`

const SearchButton = styled.button`
  height: 100%;
  width: 100%;
  background: #4272d7;
  white-space: nowrap;
  border-radius: 0.5px;
  font-size: 20px;
  color: #fff;
  transition: all 0.2s ease-out, color 0.2s ease-out;
  border: 0;
  cursor: pointer;
  &:hover {
    background: #2d62d3;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

class Home extends Component {
  state = {
    location: null,
  }

  searchAgents = (event) => {
    event.preventDefault()
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
        {/* <FlexContainer>
          <HeroImage>
            <Flex alignItems="center" justifyContent="center">
              <img src="https://s3.amazonaws.com/icons.agentdesks.com/mail_api/areaa_logo.png" alt="AREAA" />
            </Flex>
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
        </FlexContainer> */}
        <Wrapper>
          <Form onSubmit={this.searchAgents}>
            <FormFieldSet>
              <FormLegend>Find AREAA Members</FormLegend>
            </FormFieldSet>
            <FormElement>
              <FormInputContainer width="32.77%" className="first-wrap">
                <FormInput id="txtName" className="first-wrap" type="text" placeholder="Name" />
              </FormInputContainer>
              <FormInputContainer width="32.77%" className="second-wrap" minWidth="180px">
                <StyledGoogleAutocompleteTextbox
                  id="txtAutocomplete"
                  type={["geocode"]}
                  location={this.handleLocation}
                  style={{ borderTopLeftRadius: 0, borderBottomleftRadius: 0 }}
                  placeholder="City, State or Zip"
                />
              </FormInputContainer>
              <FormInputContainer width="180px" className="third-wrap" marginRight="0">
                <SearchButton type="submit">Search</SearchButton>
              </FormInputContainer>
            </FormElement>
          </Form>
          <Heading type="h5" style={{ display: "flex", alignItems: "center", color: "#ffffff" }}>
            Powered by
            <img src="//d2fedz0by71ckz.cloudfront.net/images/radius-logo%403x.png" style={{ paddingLeft: "10px" }} height="28" alt="radius agent" />
          </Heading>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default Container(Home)
