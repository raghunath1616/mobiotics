import React, { Component } from "react"
import styled from "styled-components"
import { Flex } from "@rebass/grid"
import Container from "container/SearchAgents"
import Textbox from "dumbComponents/common/UI/Textbox"
import Heading from "dumbComponents/common/Typography/Heading"
import GoogleAutocompleteTextbox from "dumbComponents/common/UI/GoogleAutocompleteTextbox"

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

const PoweredByLogo = styled.img`
  height: 28px;
  padding-left: 10px;
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
            <PoweredByLogo src="//d2fedz0by71ckz.cloudfront.net/images/radius-logo%403x.png" alt="radius agent" />
          </Heading>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default Container(Home)
