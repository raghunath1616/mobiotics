import React from "react"
import styled from "styled-components"
import SelectBox from "react-select"

const StyledSelect = styled(SelectBox)`
  height: 40px;
  width: 100%;
`

const Select = (props) => {
  const { options } = props
  return <StyledSelect options={options} {...props} />
}

export default Select
