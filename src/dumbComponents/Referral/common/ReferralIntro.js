import React from "react";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid"
import Paragraph from "dumbComponents/common/Typography/Paragraph";

const StyledReferralIntro = styled.div`
  width: 21%;
  height: 200px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  margin-top: -5%;
  text-align: center;
  margin-left: 15px;
  padding: 10px;
  margin-right: 15px;
  img {
    margin-top: -45px;
    height: 70px;
    width: 70px;
    margin-bottom: 15px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${props => (props.large ? "22px" : "18px")};
  line-height: ${props => (props.large ? 1.33 : 1.44)};
  text-align: center;
  font-weight: 300;
  span {
    font-size: 18px;
    font-weight: 500;
    color: #354052;
  }
`;

const ReferralIntro = props => (
  <StyledReferralIntro>
    <img alt={"Pin"} src={props.image} />
    <StyledParagraph large>{props.children}</StyledParagraph>
  </StyledReferralIntro>
);

export default ReferralIntro;
