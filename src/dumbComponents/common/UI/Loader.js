import React from "react";
import styled from "styled-components";
const LoaderImage = styled.div`
  margin: 0 auto;
  width: fit-content;
  position: relative;
  top: 45px;
  bottom: 45px;
`;
const Loader = () => (
  <LoaderImage>
    <img
      src={"https://d2fedz0by71ckz.cloudfront.net/images/rds-logo-blue.gif"}
      alt={"radius loader"}
    />
  </LoaderImage>
);

export default Loader;
