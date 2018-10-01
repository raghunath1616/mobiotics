import React from "react"
import styled, { keyframes } from "styled-components"

export const ShimmerAnimation = keyframes`
  0% {
    background-position: -468px 0px;
  }

  100% {
    background-position: 468px 0px;
  }
`

export const ShimmerWraper = styled.div`
  animation-name: ${ShimmerAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: -webkit-linear-gradient(left, #eeeeee 0%, #dddddd 25%, #eeeeee 40%);
  position: relative;
  background-size: 800px 104px;
  border-radius: 5px;
  margin-bottom: ${props => props.mb};
  width: ${props => props.w};
  height: ${props => props.h};
`

export const ShimmerBox = props => <ShimmerWraper {...props} />
