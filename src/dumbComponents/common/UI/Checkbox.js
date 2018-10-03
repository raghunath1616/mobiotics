import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 0 0;
`

const StyledCheckbox = styled.input`
  position: absolute; // take it out of document flow
  opacity: 0; // hide it

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
    white-space: nowrap;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // Box.
  & + label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 18px;
    height: 18px;
    border: 1px solid #dadada;
  }

  // Box hover
  &:hover + label:before {
    background: #d8d8d8;
  }

  // Box checked
  &:checked + label:before {
    background: #f35429;
  }

  // Disabled state label.
  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  // Checkmark. Could be replaced with an image
  &:checked + label:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`

const StyledLabel = styled.label`
  color: #676a6c;
  font-size: 16px;
`

const Checkbox = (props) => {
  const { id, children } = props
  return (
    <Wrapper>
      <StyledCheckbox id={id} type="checkbox" onChange={props.onChange} />
      &nbsp;
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
    </Wrapper>
  )
}

Checkbox.defaultProps = {
  checked: false,
  size: 20,
}

export default Checkbox
