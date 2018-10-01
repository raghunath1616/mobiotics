import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid"
import axios from "axios";
import CookiesStorage from "services/CookieStorage";
import "confetti-js";
import Button from "dumbComponents/common/UI/Button";
import Heading from "dumbComponents/common/Typography/Heading";
import Paragraph from "dumbComponents/common/Typography/Paragraph";
import Navbar from "dumbComponents/common/Navbar";

const user = CookiesStorage.load("user");
const StyledBox = styled.div`
  margin-top: 7rem;
`;

const StyledPara = styled(Paragraph)`
  line-height: 1.5;
  margin: 20px 0;
  text-align: center;
`;

const ReferralManager = styled.div`
  margin-top: 60px;
  margin-bottom: 15px;
  width: 360px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
  text-align: center;
  position: relative;
`;

const ReferralManagerImage = styled.img`
  height: 5rem;
  width: 5rem;
  object-fit: contain;
  margin-top: -30px;
`;

const StyledReferralBox = styled(Box)`
  padding: 10px;
  background-color: rgba(248, 249, 250, 0.5);
  border: solid 1px #e7ebed;
  color: #11adf3;
  line-height: 20px;
`;

const StyledAnchor = styled.a`
  color: #11adf3;
  text-decoration: none;
`;

const confettiSettings = {
  target: "canvas",
  width: window.screen.width,
  height: window.screen.height,
  max: 100,
  props: ["square", "circle", "triangle"],
  colors: [
    [126, 35, 144],
    [0, 86, 246],
    [232, 91, 207],
    [223, 28, 91],
    [242, 179, 11],
    [228, 86, 35]
  ],
  clock: 30,
  size: 1.3
};

class DocumentSigned extends Component {
  createThread() {
    const participant = [
      {
        id: user.id.toString(),
        type: "agent",
        isOwner: true
      },
      {
        id: "484725",
        type: "agent",
        isOwner: false
      }
    ];
    axios
      .post(API_URL + "gabby/thread/createOrRetrieve", {
        participant: participant
      })
      .then(result => {
        window.location.href =
          NETWORK_URL +
          "referral/lead?viewType=thread&openchat=true&threadId=" +
          result.data.response.id;
      });
  }

  componentDidMount() {
    let confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Box>
          <canvas id={"canvas"} style={{ position: "absolute" }} />
        </Box>
        <Box css={{ position: "relative" }}>
          <Flex justifyContent="center">
            <StyledBox>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="88"
                height="87"
                viewBox="0 0 88 87"
              >
                <defs>
                  <rect id="a" width="81" height="81" rx="40.5" />
                  <path
                    id="b"
                    d="M58.894 32.834L36 57.134c-1.474 1.565-3.861 1.565-5.332 0l-9.564-10.147c-1.47-1.565-1.47-4.099 0-5.664 1.475-1.56 3.862-1.56 5.333 0l6.897 7.321 20.229-21.47c1.47-1.565 3.858-1.565 5.332 0 1.475 1.56 1.475 4.095 0 5.66"
                  />
                </defs>
                <g fill="none" fillRule="evenodd" transform="translate(3 3)">
                  <use
                    fill="#51D3B7"
                    stroke="#FFF"
                    strokeWidth="6"
                    xlinkHref="#a"
                  />
                  <use fill="#FFF" xlinkHref="#b" />
                </g>
              </svg>
            </StyledBox>
          </Flex>
          <Flex justifyContent="center">
            <Box width={1 / 3}>
              <Heading type={"h2"}>Congrats!</Heading>
              <StyledPara>
                Integrate your current phonebook and Gmail contacts to find
                potential leads to refer out.
              </StyledPara>
            </Box>
          </Flex>
          <Flex
            justifyContent="center"
            style={{ marginBottom: "2rem", marginTop: "1rem" }}
          >
            <a href={NETWORK_URL + "referral/lead"}>
              <Button>Submit a referral</Button>
            </a>
          </Flex>
          <Flex justifyContent="center">
            <Box>
              <ReferralManager>
                <ReferralManagerImage
                  src={
                    "https://d2fedz0by71ckz.cloudfront.net/images/tsion-profile-img.png"
                  }
                  alt={"referral manager"}
                />
                <Paragraph
                  align={"center"}
                  lineHeight={1.5}
                  style={{ margin: "10px 0" }}
                >
                  Meet your referral manager,
                </Paragraph>
                <Paragraph
                  align={"center"}
                  lineHeight={1.5}
                  fontWeight={500}
                  style={{ margin: "10px 0" }}
                >
                  Tsion Goytom
                </Paragraph>
                <Flex alignItems="center">
                  <StyledReferralBox width={1 / 2}>
                    <StyledAnchor
                      href="javascript:void(0);"
                      onClick={this.createThread.bind(this)}
                    >
                      <img
                        src={
                          "https://d2fedz0by71ckz.cloudfront.net/images/message-active%403x.png"
                        }
                        height={"20"}
                        alt={"message to referral manager"}
                      />
                      <br />
                      Message
                    </StyledAnchor>
                  </StyledReferralBox>
                  <StyledReferralBox width={1 / 2}>
                    <StyledAnchor
                      href="mailto:tsion@radiusagent.com"
                      style={{
                        display: "block",
                        height: "45px",
                        lineHeight: "1.45"
                      }}
                    >
                      <img
                        src={
                          "https://d2fedz0by71ckz.cloudfront.net/images/mail-submit%403x.png"
                        }
                        height={"14"}
                        width={"18"}
                        alt={"message to referral manager"}
                      />
                      <br />
                      Email
                    </StyledAnchor>
                  </StyledReferralBox>
                </Flex>
              </ReferralManager>
            </Box>
          </Flex>
        </Box>
      </React.Fragment>
    );
  }
}

export default DocumentSigned;
