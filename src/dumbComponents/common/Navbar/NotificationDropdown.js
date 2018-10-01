import React, { Component } from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid
import axios from "axios"
import Moment from "react-moment"

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
    margin: 5px auto 3px;
    display: block;
    max-width: none;
    vertical-align: middle;
    border: 0;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 46px;
  right: 0;
  z-index: 1;
  width: 350px;
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
    right: 40px;
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
      padding-top: 10px;
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

const StyledMarker = styled.div`
  width: 8px;
  height: 8px;
  position: absolute;
  right: 40%;
  background: #11adf3;
  border-radius: 50%;
  top: 1px;
  display: ${props => (props.count == 0 ? "block" : "none")};
`;

const NotificationIcon = styled.img`
  margin-top: 0 !important;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const NotificationText = styled.span`
  color: #6f7d88;
`;

const NotificationTime = styled.span`
  color: #abb3ba;
  font-size: 12px;
  display: block;
  margin-top: 4px;
`;

class NotificationDropdown extends Component {
  state = {
    notifications: false,
    notificationCount: 0
  };

  gotoNotification = function(notification) {
    // notification.readAt = 10;
    // axios
    //   .put(API_V2_URL + "notification-status?read=true&id=" + notification.id)
    //   .then(function(res) {});
    // if (notification.webUrl && notification.webUrl.length) {
    //   if (
    //     notification.webUrl.indexOf("network.agentdesks.com") < 0 &&
    //     notification.webUrl.indexOf("details/client") < 0 &&
    //     notification.webUrl.indexOf("details/contact") < 0 &&
    //     notification.webUrl.indexOf("page/redirect?tag=client_profile") < 0
    //   ) {
    //     if (url.indexOf("http") < 0) {
    //       window.location.href =
    //         window.location.protocol() +
    //         "://" +
    //         window.location.host() +
    //         ":" +
    //         window.location.port() +
    //         url;
    //     } else {
    //       window.location.href = url;
    //     }
    //   } else if (
    //     notification.webUrl.indexOf("network.agentdesks.com") >= 0 ||
    //     notification.webUrl.indexOf("details/client") >= 0 ||
    //     notification.webUrl.indexOf("details/contact") >= 0 ||
    //     notification.webUrl.indexOf("page/redirect?tag=client_profile") >= 0
    //   )
    //     window.open(notification.webUrl, "_blank");
    // }
  };

  componentDidMount() {
    axios.get(API_V2_URL + "notifications/unread-count").then(result => {
      this.setState({ notificationCount: result.data.response.unread });
    });
    axios.get(API_V2_URL + "notification?startTime=0&count=7").then(result => {
      this.setState({ notifications: result.data.response.notification });
    });
  }

  render() {
    let notificationsList;
    if (this.state.notifications) {
      if (this.state.notifications.length === 0) {
        notificationsList = this.state.notifications.map(
          (notification, index) => {
            return (
              <DropdownItem key={"notification-" + index}>
                <DropdownAnchor
                  href={"javascript:void(0);"}
                  onClick={this.gotoNotification.bind(this, notification)}
                >
                  <Flex alignItems={"center"}>
                    <Box width={1 / 5}>
                      <NotificationIcon
                        src={notification.imageUrl}
                        alt={"notifications"}
                      />
                    </Box>
                    <Box width={4 / 5} css={{ textAlign: "left" }}>
                      <NotificationText style={{ color: "#6f7d88" }}>
                        {notification.title}
                      </NotificationText>
                      <NotificationTime>
                        <Moment fromNow ago>
                          {notification.updatedAt}
                        </Moment>
                        &nbsp; ago
                      </NotificationTime>
                    </Box>
                  </Flex>
                </DropdownAnchor>
              </DropdownItem>
            );
          }
        );
      } else {
      }
    }
    return (
      <StyledDropdown>
        <DropdownAnchor href="javascript:void(0);">
          <img
            height="21"
            width="17"
            src="//d2fedz0by71ckz.cloudfront.net/images/no-notifications%403x.png"
          />
          <span>Notifications</span>
          <StyledMarker count={this.state.notificationCount} />
        </DropdownAnchor>
        <DropdownList>
          {this.state.notifications &&
            this.state.notifications.map((notification, index) => {
              return (
                <DropdownItem key={"notification-" + index}>
                  <DropdownAnchor
                    href={"javascript:void(0);"}
                    onClick={this.gotoNotification.bind(this, notification)}
                  >
                    <Flex alignItems={"center"}>
                      <Box width={1 / 5}>
                        <NotificationIcon
                          src={notification.imageUrl}
                          alt={"notifications"}
                        />
                      </Box>
                      <Box width={4 / 5} css={{ textAlign: "left" }}>
                        <NotificationText style={{ color: "#6f7d88" }}>
                          {notification.title.length > 70 ? notification.title.substring(0,70) + '...' : notification.title}
                        </NotificationText>
                        <NotificationTime>
                          <Moment fromNow ago>
                            {notification.updatedAt}
                          </Moment>
                          &nbsp; ago
                        </NotificationTime>
                      </Box>
                    </Flex>
                  </DropdownAnchor>
                </DropdownItem>
              );
            })}
          {this.state.notifications && this.state.notifications.length >= 7 ? (
            <DropdownItem>
              <DropdownAnchor href={NETWORK_URL + "network/notifications"}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <span>See all notifications</span>
                </Flex>
              </DropdownAnchor>
            </DropdownItem>
          ) : (
            ""
          )}
        </DropdownList>
      </StyledDropdown>
    );
  }
}

export default NotificationDropdown;
