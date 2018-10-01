import React, { Component } from "react";
import styled from "styled-components";

const StyledToggler = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;
  height: 60px;
`;

const TogglerLabel = styled.label`
  position: absolute;
  width: 150px;
  border-radius: 40px;
  border-top-left-radius: ${props =>
    props.selected != props.text && props.text == "Sending" ? "0" : ""};
  border-bottom-left-radius: ${props =>
    props.selected != props.text && props.text == "Sending" ? "0" : ""};
  border-top-right-radius: ${props =>
    props.selected != props.text && props.text == "Receiving" ? "0" : ""};
  border-bottom-right-radius: ${props =>
    props.selected != props.text && props.text == "Receiving" ? "0" : ""};
  background: ${props =>
    props.selected == props.text ? "#ffffff" : "#11adf3"};
  color: ${props => (props.selected == props.text ? "#11adf3" : "#ffffff")};
  left: ${props => (props.text == "Receiving" ? "0" : "")};
  z-index: ${props => (props.selected == props.text ? 1 : 0)};
  padding: 10px;
  cursor: pointer;
  border: 3px solid #11adf3;
  transition: 0.3s linear;
`;

const Toggler = props => (
  <StyledToggler>
    <TogglerLabel
      text={props.text1}
      selected={props.selected}
      onClick={props.toggleClass.bind(this, props.text1)}
    >
      {props.text1}
    </TogglerLabel>
    <TogglerLabel
      text={props.text2}
      selected={props.selected}
      onClick={props.toggleClass.bind(this, props.text2)}
    >
      {props.text2}
    </TogglerLabel>
  </StyledToggler>
);

export default Toggler;
