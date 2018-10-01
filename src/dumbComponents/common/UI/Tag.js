import React from "react";
import styled from "styled-components";

const Tag = styled.div`
  display: inline-flex;
  margin: 5px;
  font-size: ${props => (props.size ? props.size : "14px")};
  padding: 10px 15px 10px 15px;
  text-align: left;
  color: #ffffff;
  font-weight: normal;
  background: #354052;
  border-radius: 25px;
  i {
    position: relative;
    top: -11px;
    left: 22px;
    background: #f85359;
    height: 18px;
    padding: 4px;
    font-size: 10px;
    border-radius: 50%;
    width: 18px;
    text-align: center;
    cursor: pointer;
  }
`;

const tags = props => (
  <Tag size={props.size}>
    {props.children}{" "}
    {props.hide ? "" : <i className={"fas fa-times"} onClick={props.remove} />}
  </Tag>
);

export default tags;
