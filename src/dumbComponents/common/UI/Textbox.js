import React from "react";
import styled from "styled-components";

let Input = styled.input`
  outline: none;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 0.5px solid #d4d4d4;
  border-radius: 2px;
  height: 40px;
  box-shadow: none;
  overflow: visible;
  margin: 0;
  color: inherit;
  cursor: text;
  &:focus,
  &:active {
    box-shadow: none;
    border: solid 0.5px #11adf3;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ccc !important;
    font-weight: 300;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #ccc !important;
    font-weight: 300;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #ccc !important;
    font-weight: 300;
  }
`;

const textBox = props => {
  if (props.withoutBorder) {
    Input = styled(Input)`
      border: none;
    `;
  }
  return (
    <Input
      innerRef={props.reference}
      onKeyPress={props.onKeyPress}
      className={props.className}
      readOnly={props.readOnly}
      onBlur={props.onBlur}
      onChange={props.update}
      {...props}
    />
  );
};

export default textBox;
