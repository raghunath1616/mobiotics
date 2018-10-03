import React from "react"
import styled from "styled-components"
import Container from "container/SearchAgents"
import Textbox from "dumbComponents/common/UI/Textbox"
import Button from "dumbComponents/common/UI/Button"
import GoogleAutocompleteTextbox from "dumbComponents/common/UI/GoogleAutocompleteTextbox"
import { Flex, Box } from "@rebass/grid"

const WrapperSearchBar = styled(Flex)`
  align-items: center;
  flex-direction: row;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const StyledImage = styled.img`
  padding: 8px 10px;
  border: 0.5px solid #d4d4d4;
  background: #ffffff;
  border-right: none;
  padding: 8px 10px;
`

const StyledButton = styled(Button)`
  background: #2684ff;
  border-color: #2684ff;
  padding: 15px 15px;
  border-radius: 0;
  @media (max-width: 500px) {
    width: 100%;
  }
`

const StyledTextbox = styled(Textbox)`
  border-left: none;
  border-top-left-radius: none;
  border-bottom-left-radius: none;
  height: 50px;
  &:focus {
    box-shadow: none;
    border: solid 0.5px #d4d4d4;
    border-left: none;
  }
`

const StyledGoogleAutocompleteTextbox = styled(GoogleAutocompleteTextbox)`
  border-left: none;
  border-top-left-radius: none;
  border-bottom-left-radius: none;
  height: 50px;
  &:focus {
    box-shadow: none;
    border: solid 0.5px #d4d4d4;
    border-left: none;
  }
`

const StyledBox = styled(Box)`
  margin: 10px 0;
  &:first-child {
    margin-left: 0;
  }
`

const SearchBar = (props) => {
  const { location, onSearch, request } = props
  return (
    <div style={{ background: "#f0f0f1" }}>
      <div className="container">
        <WrapperSearchBar>
          <StyledBox width={[1, 1, 1 / 3]} pr={[0, 0, 15]}>
            <Flex>
              <StyledImage src="https://s3.amazonaws.com/cdn.agentdesks.com/images/user-icon.png" />
              <StyledTextbox
                placeholder="Search agent name"
                id="txtName"
                defaultValue={request ? request.fullname : ""}
              />
            </Flex>
          </StyledBox>
          <StyledBox width={[1, 1, 1 / 3]} pl={[0, 0, 15]}>
            <Flex>
              <StyledImage src="https://s3.amazonaws.com/cdn.agentdesks.com/images/location-icon.png" />
              <StyledGoogleAutocompleteTextbox
                id="txtAutocomplete"
                type={["geocode"]}
                location={location}
                placeholder="City, State or Zip"
                defaultValue={request ? request.searchString : ""}
              />
            </Flex>
          </StyledBox>
          <StyledBox width={[1, 1, 1 / 3]} pl={[0, 0, 20]}>
            <Flex>
              <StyledButton onClick={onSearch}>Search</StyledButton>
            </Flex>
          </StyledBox>
        </WrapperSearchBar>
      </div>
    </div>
  )
}

export default Container(SearchBar)
