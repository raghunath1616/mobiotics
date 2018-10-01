import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import Navbar from "dumbComponents/common/Navbar";
import HeroImage from "dumbComponents/common/UI/HeroImage";
import Button from "dumbComponents/common/UI/Button";
import Heading from "dumbComponents/common/Typography/Heading";
import ReferralIntro from "dumbComponents/Referral/common/ReferralIntro";
import ReferralConcierge from "dumbComponents/Referral/common/ReferralConcierge";
import TopAgents from "dumbComponents/Referral/common/TopAgents";

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

const HeroHeading = styled(Heading)`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 0.7rem;
  font-weight: 500;
  @media (min-width: 1285px) {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 1500px) {
    margin-top: 5rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 1900px) {
    margin-top: 6rem;
    margin-bottom: 1rem;
  }
`;

const SignedReferral = props => (
  <React.Fragment>
    <Navbar />
    <HeroImage
      url={"https://d2fedz0by71ckz.cloudfront.net/images/hero-img-signed.png"}
    >
      <HeroText>
        <HeroHeading type={"h1"} color={"#ffffff"} lineHeight={2.5}>
          Send your first referral
        </HeroHeading>
        <a href={NETWORK_URL + "referral/lead"}>
          <Button bsStyle={"primary"}>Submit a referral</Button>
        </a>
      </HeroText>
    </HeroImage>
    <Flex justifyContent={"center"}>
      <ReferralIntro
        image={
          "https://d2fedz0by71ckz.cloudfront.net/images/pin-gradient%402x.png"
        }
      >
        Agents in your area are making an additional <span>$50,000</span>{" "}
        through submitting referrals
      </ReferralIntro>
      <ReferralIntro
        image={
          "https://d2fedz0by71ckz.cloudfront.net/images/wallet-gradient%402x.png"
        }
      >
        Make an additional <span>$8,000</span> per year by submitting leads you
        can’t cover
      </ReferralIntro>
    </Flex>
    <ReferralConcierge />
    <TopAgents paddingBottom={"30px"} />
    <Flex justifyContent={"center"} style={{ paddingBottom: "30px" }}>
      <a href={NETWORK_URL + "referral/lead"}>
        <Button>Submit a referral</Button>
      </a>
    </Flex>
  </React.Fragment>
);

export default SignedReferral;
