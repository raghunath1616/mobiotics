import React, { Component } from "react";
import styled from "styled-components";
import CookiesStorage from "services/CookieStorage";
import axios from "axios";

const user = CookiesStorage.load("user");
const StyledDropdown = styled.div`
  position: relative;
  &:hover {
    ul {
      display: block;
    }
  }
`;

const DropdownAnchor = styled.a`
  border-radius: 0px;
  color: #354052;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 19px;
  opacity: 0.9;
  padding: 0 12px 0 12px;
  position: relative;
  text-align: center;
  height: 46px;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  display: block;
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
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 51px;
  left: -60px;
  z-index: 1;
  width: 160px;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  display: none;
  &:before {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #fff;
    content: "";
    height: 0;
    right: 60px;
    position: absolute;
    top: -6px;
    width: 0;
  }
  &:hover {
    display: block;
  }
`;

const DropdownItem = styled.li`
  &:first-child {
    a {
      border-top: none !important;
      padding-top: 15px;
    }
  }

  a {
    border-bottom: 1px solid #e8eaeb !important;
    font-size: 15px;
    line-height: 15px;
    color: #3b4859;
    padding: 10px;
    font-weight: 300;
    clear: both;
    display: block;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      text-decoration: none;
      background-color: #f5f5f5;
    }
  }
`;

class ProfileDropdown extends Component {
  state = {
    listVisible: false
  };

  select() {
    this.props.selected = item;
  }

  logout() {
    axios.get(API_URL + "users/logout").then(result => {
      CookiesStorage.remove("currentGroup");
      CookiesStorage.remove("currentGroup");
      CookiesStorage.remove("secureId");
      CookiesStorage.remove("user");
      window.location.href = RADIUS_URL + "/login";
    });
  }

  render() {
    return (
      <StyledDropdown>
        <DropdownAnchor href="javascript:void(0);">
          <img
            height="21"
            width="21"
            src={user.agent_image}
            style={{ borderRadius: "50%", paddingTop: "0", marginTop: "5px" }}
          />
          <span>Profile</span>
        </DropdownAnchor>
        <DropdownList>
          <DropdownItem>
            <a
              href={
                user.profile_url
                  ? user.profile_url
                  : PROFILE_URL + "profile/agent?id=" + user.id
              }
            >
              View my profile
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href={CRM_URL + "app/settings"}>Settings</a>
          </DropdownItem>
          <DropdownItem>
            <a href="https://blog.radiusagent.com/" target="_blank">
              Blog
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="https://knowledgebase.radiusagent.com/" target="_blank">
              Help
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="javascript:void(0);" onClick={this.logout.bind(this)}>
              Logout
            </a>
          </DropdownItem>
        </DropdownList>
      </StyledDropdown>
    );
  }
}

export default ProfileDropdown;
