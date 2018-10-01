import React from "react"
import styled, { css } from "styled-components"
import checkedIcon from "images/icons/icon-blue.svg"

const Wrapper = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
`

const UnChecked = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #e7ebed;
  cursor: pointer;
`

const Checkbox = ({ checked, onClick }) => (
  <Wrapper onClick={onClick}>
    { checked
      ? <img src={checkedIcon} alt="Check Icon" />
      : <UnChecked />
    }

  </Wrapper>
)

Checkbox.defaultProps = {
  checked: false,
  size: 20,
}

export default Checkbox
