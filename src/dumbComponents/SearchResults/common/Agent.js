import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Heading from "dumbComponents/common/Typography/Heading"
import Paragraph from "dumbComponents/common/Typography/Paragraph"
import { ShimmerBox } from "shared/styles/animation"

const StyledFlex = styled(Flex)`
  margin: 20px 0 0;
  padding: 20px;
  border: 1px solid #dedde2;
  background: #ffffff;
  flex-flow: row wrap;
`

const StyledFlexFlow = styled(Flex)`
  flex-flow: row nowrap;
  @media (max-width: 500px) {
    flex-flow: column wrap;
    align-items: center;
  }
`

const StyledBox = styled(Box)`
  padding: 0 10px;
  @media (max-width: 500px) {
    text-align: center;
    margin-bottom: 15px;
  }
`

const StyledImage = styled.img`
  border-radius: 6px;
  height: 140px;
  width: 140px;
  object-fit: cover;
`

const StyledHeading = styled(Heading)`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.08;
  color: #11adf3;
  text-align: left;
  margin-top: 0;
`

const StyledAnchor = styled.a`
  color: #11adf3;
  text-decoration: underline;
  @media (max-width: 500px) {
    display: none;
  }
`

const StyledParagraph = styled(Paragraph)`
  text-overflow: ellipsis;
  overflow: auto;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 16px;
  @media (max-width: 500px) {
    text-align: center;
    margin-bottom: 10px;
  }
`

const StyledViewProfile = styled(Box)`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`
const StyledMobileAnchor = styled.a`
  color: #11adf3;
  text-decoration: underline;
`

const Agent = (props) => {
  const { agent } = props
  return (
    <StyledFlex>
      <StyledBox width={[1, 1, 1 / 5]}>
        <StyledImage src={agent.agent_image} height="140" />
      </StyledBox>
      <StyledBox width={[1, 1, 4 / 5]}>
        <StyledFlexFlow alignItems="center" justifyContent="space-between" style={{ margin: "0 10px" }}>
          <StyledHeading>{agent.firstname + " " + agent.lastname}</StyledHeading>
          <StyledAnchor href={agent.profile_url} target="_blank">
            View profile
          </StyledAnchor>
        </StyledFlexFlow>
        <StyledFlexFlow>
          <StyledBox width={[1, 1, 1 / 2]}>
            <StyledParagraph>{agent.agency_name}</StyledParagraph>
            <StyledParagraph>{agent.display_email}</StyledParagraph>
            <StyledParagraph>{agent.phone}</StyledParagraph>
            <StyledParagraph>
              {agent.office_city}, {agent.office_state}
            </StyledParagraph>
          </StyledBox>
          <StyledBox width={[1, 1, 1 / 2]}>
            <StyledParagraph>CRS Designee since 2014</StyledParagraph>
          </StyledBox>
          <StyledViewProfile>
            <StyledMobileAnchor href={agent.profile_url} target="_blank">
              View profile
            </StyledMobileAnchor>
          </StyledViewProfile>
        </StyledFlexFlow>
      </StyledBox>
    </StyledFlex>
  )
}

export const Shimmer = (props) => {
  const { shimmerIterator } = props
  return (
    <div style={{ marginTop: 20 }}>
      {shimmerIterator.map(item => (
        <StyledFlex key={item}>
          <StyledBox width={[1, 1, 1 / 5]}>
            <ShimmerBox w="140px" h="140px" />
          </StyledBox>
          <StyledBox width={[1, 1, 4 / 5]}>
            <StyledFlexFlow alignItems="center" justifyContent="space-between" style={{ margin: "0 10px" }}>
              <ShimmerBox w="220px" h="16px" mb="20px" />
            </StyledFlexFlow>
            <StyledFlexFlow>
              <StyledBox width={[1, 1, 1 / 2]}>
                <ShimmerBox w="200px" h="12px" mb="10px" />
                <ShimmerBox w="140px" h="12px" mb="10px" />
                <ShimmerBox w="210px" h="12px" mb="10px" />
                <ShimmerBox w="220px" h="12px" mb="10px" />
              </StyledBox>
            </StyledFlexFlow>
          </StyledBox>
        </StyledFlex>
      ))}
    </div>
  )
}

export default Agent
