import React from "react"
import styled from "styled-components"
import { Box, Flex } from "@rebass/grid"
import Heading from "dumbComponents/common/Typography/Heading"
import Paragraph from "dumbComponents/common/Typography/Paragraph"

const StyledReferralConcierge = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: block;
  &:before {
    box-sizing: border-box;
  }
  &:after {
    box-sizing: border-box;
  }
`;

const Highlighter = styled.div`
  height: 6px;
  width: 55px;
  border-radius: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #11adf3;
`;

const StyledContent = styled(Box)`
  text-align: left;
  p {
    b {
      font-weight: 500;
    }
  }
`;

const referralConcierge = props => (
  <StyledReferralConcierge>
    <Flex justifyContent="center">
      <Heading type={"h2"}>Our Referral Concierge</Heading>
    </Flex>
    <Highlighter />
    <Flex justifyContent="center">
      <StyledContent width={1 / 3} px={25}>
        <Heading type={"h6"} lineHeight={1.5} font={"Rubik, carrara-bol"}>
          Earn 25% commission
        </Heading>
        <Paragraph size={"14px"} align={"center"}>
          You’ll receive a 25% referral fee on every deal closed, guaranteed. So
          far, our platform has generated <b>over $700 million</b> in referral
          transactions, with <b>over 5,000</b> referrals exchanged.
        </Paragraph>
      </StyledContent>
      <StyledContent width={1 / 3} px={25}>
        <Heading type={"h6"} lineHeight={1.5} font={"Rubik, carrara-bol"}>
          Refer leads you can’t cover
        </Heading>
        <Paragraph size={"14px"} align={"center"}>
          Your submitted referrals will be expertly matched with quality,
          top-performing agents through our superior concierge service. You can
          be confident that your leads are always in good hands.
        </Paragraph>
      </StyledContent>
      <StyledContent width={1 / 3} px={25}>
        <Heading type={"h6"} lineHeight={1.5} font={"Rubik, carrara-bol"}>
          You’re in control
        </Heading>
        <Paragraph size={"14px"} align={"center"}>
          Transparency is key. After you submit a referral, we’ll keep you
          informed of the progress every step of the way. Our team is always
          ready to assist and support you.
        </Paragraph>
      </StyledContent>
    </Flex>
  </StyledReferralConcierge>
);

export default referralConcierge;
