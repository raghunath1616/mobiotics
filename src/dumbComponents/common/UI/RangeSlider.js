import React from "react";
import styled from "styled-components";

const SlideContainer = styled.div`
  width: 100%;
`;

const StyledRangeSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 12px;
  border-radius: 45px;
  background: #11adf3;
  outline: none;
  opacity: 1;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0 1px 4px 0 rgba(141, 141, 141, 0.5);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0 1px 4px 0 rgba(141, 141, 141, 0.5);
    cursor: pointer;
  }

  &::-ms-thumb {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0 1px 4px 0 rgba(141, 141, 141, 0.5);
    cursor: pointer;
  }
`;

const RangeSlider = props => (
  <SlideContainer>
    <StyledRangeSlider
      type={"range"}
      min={1}
      max={10000000}
      value={props.selectedValue}
      onChange={props.onChange}
    />
  </SlideContainer>
);

export default RangeSlider;
