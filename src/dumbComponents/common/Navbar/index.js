import React from "react"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"

const StyledBox = styled.div`
  z-index: 2999;
  box-shadow: 0 0.5px 2.5px 0 rgba(0, 0, 0, 0.25);
  &:before {
    box-sizing: border-box;
  }
`

const ContainerBox = styled(Box)`
  height: 70px;
`

const Brand = styled.div`
  float: left;
  padding: 2;
`

const NavCollapse = styled.div`
  border-top: none;
  padding-right: 0;
  background: #ffffff;
  padding-left: 15px;
  position: relative;
  display: block;
  padding-bottom: 0;
  overflow: visible;
  &::before {
    box-sizing: border-box;
  }
  @media (max-width: 500px) {
    display: none;
  }
`

const NavLeft = styled.ul`
  height: auto;
  position: relative;
  margin: 0px 15px 0 0;
  cursor: pointer;
  float: left;
  list-style: none;
  padding-left: 5px;
  display: inline-flex;
  &:before {
    box-sizing: border-box;
  }
`

const NavRight = styled(NavLeft)`
  float: right;
`

const NavItem = styled.li`
  display: block;
`

const NavAnchor = styled.a`
  border-radius: 0px;
  color: #354052;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 19px;
  opacity: 0.9;
  padding: 0 12px 0 12px;
  position: relative;
  text-align: center;
  height: 66px;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    background: #fff;
    cursor: pointer;
    color: #11adf3;
    border-bottom: 4px solid #11adf3;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  &:before {
    box-sizing: border-box;
  }
  &:after {
    box-sizing: border-box;
  }
  img {
    margin: 0 auto 3px;
    display: block;
    max-width: none;
    vertical-align: middle;
    border: 0;
    padding-top: 5px;
  }
`

const Navbar = () => (
  <StyledBox>
    <Flex alignItems="center">
      <ContainerBox className="container">
        <Brand>
          <img
            src="https://s3.amazonaws.com/icons.agentdesks.com/mail_api/areaa_logo.png"
            height={65}
            alt="Asian Real Estate Association of America"
          />
        </Brand>
        <NavCollapse>
          <NavRight>
            <NavItem>
              <NavAnchor href={`${CRM_URL}app/clients?type=Buyer`}>
                <span>Login</span>
              </NavAnchor>
            </NavItem>
          </NavRight>
        </NavCollapse>
      </ContainerBox>
    </Flex>
  </StyledBox>
)

export default Navbar
