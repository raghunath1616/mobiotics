import styled from "styled-components"

const headingTypes = {
  h1: "43px",
  h2: "36px",
  h3: "30px",
  h4: "24px",
  h5: "20px",
  h6: "16px",
}

const Heading = styled.h1`
  font-family: ${props => (props.font ? props.font : "carrara-bol, Rubik")};
  font-size: ${props => headingTypes[props.type]};
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: ${props => (props.lineHeight ? props.lineHeight : 1)};
  letter-spacing: normal;
  text-align: ${props => (props.center ? "center" : "")};
  color: ${props => (props.color ? props.color : "#354052")};
`

Heading.defaultProps = {
  type: "h1",
  center: true,
  color: "#354052",
  lineHeight: 1,
  font: "carrara-bol",
}

export default Heading
