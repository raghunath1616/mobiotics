import React from "react"
import styled from "styled-components"

const Img = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EEE;
`

const NameChar = styled.div`
  font-size: 22px;
  color: red;
`

const ProfileImage = ({ image, name = "" }) => (
  !image ? (
    <Img>
      <NameChar>{name.substring(0, 2).toUpperCase()}</NameChar>
    </Img>
  ) : (
    <Img style={{ backgroundImage: `url(${image})` }} />
  )
)

export default ProfileImage
