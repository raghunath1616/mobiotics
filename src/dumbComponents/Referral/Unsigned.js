import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Flex, Box } from "grid-styled";
import { UrlSearchParams } from "services/Utils";
import EarnSlider from "dumbComponents/Referral/common/EarnSlider";
import ReferralConcierge from "dumbComponents/Referral/common/ReferralConcierge";
import TopAgents from "dumbComponents/Referral/common/TopAgents";
import GetStarted from "dumbComponents/Referral/common/GetStarted";
import Button from "dumbComponents/common/UI/Button";
import HeroImage from "dumbComponents/common/UI/HeroImage";
import Modal from "dumbComponents/common/UI/Modal";
import Heading from "dumbComponents/common/Typography/Heading";
import Paragraph from "dumbComponents/common/Typography/Paragraph";
import Container from "container/Referral";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";
import DropdownMenu from "../common/UI/DropdownMenu";

library.add(faTimes);

const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  @media (max-width: 500px) {
    bottom: -40px;
    h1 {
      font-size: 26px;
    }
  }
  @media (min-width: 1580px) {
    bottom: 0;
  }
`;

const StyledHeading = styled(Heading)`
  line-height: 1.28;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const HeroHeading = styled(Heading)`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 500;
  @media (min-width: 1285px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 1500px) {
    margin-top: 4rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 1900px) {
    margin-top: 5rem;
    margin-bottom: 4rem;
  }
`;

const StyledModal = styled(Modal)`
  width: 40%;
  > div {
    filter: blur(4px);
  }
`;

const Wrapper = styled.div`
  filter: ${props => (props.blur ? "blur(4px)" : "none")};
`;

const StyledFontAwesome = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #dadada;
  cursor: pointer;
`;

class Unsigned extends Component {
  state = {
    viewModal: UrlSearchParams("viewed") ? true : false
  };

  componentDidMount() {
    // axios.get(API_URL + "metrics/agentdess", {
    //   headers: {"internal-id": "d3abb3c23d1692f2cc9abb85d6f4ce66"}
    // }).then(result => {
    //   console.log("API RESPONSOSE", result);
    // }).catch(error => {
    //   toast.error("Error Notification!");
    // });
  }

  signContract = () => {
    // this.setState({ loader: true });
    // axios
    //   .get(
    //     API_URL +
    //       "refer/signLeadAgreement?loadUrl=" +
    //       encodeURIComponent(APP_URL) +
    //       "&returnUrl=" +
    //       encodeURIComponent(APP_URL) + "/referrals=/referral-loader"
    //   )
    //   .then(result => {
    //     this.props.history.push(
    //       "/referrals/sign-contract?url=" +
    //         encodeURIComponent(result.data.response.url)
    //     );
    //   },
    //   error => {
    //     this.setState({loader : false});
    //   });
  }

  closeModal = () => {
    this.setState({ viewModal: false });
  }

  render() {

    return (
      <div>

        <StyledModal show={this.state.viewModal}>
          <Flex justifyContent="flex-end">
            <StyledFontAwesome icon="times" onClick={this.closeModal} />
          </Flex>
          <Flex justifyContent="center">
            <Box>
              <StyledHeading type={"h2"} lineHeight={1.28}>
                You’re almost there!
              </StyledHeading>

              <Paragraph lineHeight={1.5} align={"center"}>
                You’ll be able to start submitting and receiving referrals as soon as you finish signing the Referral Concierge Agreement.
              </Paragraph>
            </Box>
          </Flex>
          <Flex justifyContent="center">
            <Box>
              <Button style={{ margin: "40px 0" }} onClick={this.signContract}>
                Get Started
              </Button>
            </Box>
          </Flex>
        </StyledModal>

        <Wrapper blur={this.state.viewModal}>

          <HeroImage>
            <HeroText>
              <HeroHeading type={"h1"} color={"#ffffff"} lineHeight={1.08}>
                Close more deals with <br /> the Radius referral concierge
              </HeroHeading>
              <Button bsStyle={"primary"} onClick={this.signContract}>
                Get started
              </Button>
            </HeroText>
          </HeroImage>
          <EarnSlider />

          <div className={"container"}>
            <ReferralConcierge />
            <TopAgents />
          </div>

          <GetStarted signContract={this.signContract} />

        </Wrapper>

      </div>
    );
  }
}

export default Container(Unsigned);
