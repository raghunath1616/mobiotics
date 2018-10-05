import React from "react"
import styled from "styled-components"
import { Flex } from "@rebass/grid"
import { getInitials } from "services/Utils"

const Image = styled.img`
  border-radius: 6px;
  height: 140px;
  width: 140px;
  object-fit: cover;
`

const StyledFlex = styled(Flex)`
  font-size: 48px;
  color: #ffffff;
  border-radius: 6px;
  height: 140px;
  width: 140px;
  background-color: #2684ff;
  text-align: center;
  @media (max-width: 500px) {
    margin: 0 auto;
  }
`

const ProfileImage = ({
  image, name = "", onErrorLoad, allowImage,
}) => !image || !allowImage ? (
  <StyledFlex alignItems="center" justifyContent="center">
    {getInitials(name)}
  </StyledFlex>
) : (
  <Image src={image} alt="association profile" onError={onErrorLoad} />
)

export default ProfileImage
