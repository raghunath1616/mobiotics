import styled from "styled-components";

const Paragraph = styled.p`
  font-family: "Rubik";
  font-size: ${props => props.size};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 300)};
  text-align: ${props => props.align};
  margin-bottom: ${props => props.marginBottom};
`;

Paragraph.defaultProps = {
  size: "20px",
  lineHeight: 1.71,
  align: "left",
  color: "#354052",
  fontWeight: 300
};

export default Paragraph;
