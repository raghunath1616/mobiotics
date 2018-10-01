import React from "react";
import styled from "styled-components";

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(17, 173, 243, 0.6);
`;

const Backdrop = props => {
  if (props.show) {
    return <StyledBackdrop onClick={props.clicked} />;
  } else {
    return null;
  }
};

export default Backdrop;