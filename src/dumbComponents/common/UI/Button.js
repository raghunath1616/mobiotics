import styled from "styled-components"
import colors from "library/colors"
import { hexRgba } from "library/cssUtils"

const btnColors = {
  primary: {
    backgroundColor: colors.primaryColor,
    fontColor: colors.white,
    fontHoverColor: colors.primaryHover,
    borderColor: colors.primaryColor,
    boxShadowColor: colors.primaryColor,
    disabledColor: colors.disabledColor,
  },
  secondary: {
    backgroundColor: colors.white,
    fontColor: colors.primaryColor,
    fontHoverColor: colors.primaryHover,
    borderColor: colors.primaryColor,
    boxShadowColor: false,
    disabledColor: colors.disabledColor,
  },
}

const Button = styled.button`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: none;
  cursor: pointer;
  width: ${props => (props.width ? props.width : "auto")};
  line-height: normal;
  padding: 8px 12px;
  font-size: 16px;
  font-weight: normal;
  color: ${props => btnColors[props.bsStyle].fontColor};
  border: ${props => props.border
    ? `1px solid ${btnColors[props.bsStyle].borderColor}`
    : "none"};
  border-radius: ${props => props.borderRadius ? props.borderRadius : "25px"};
  background-color: ${props => btnColors[props.bsStyle].backgroundColor};
  box-shadow: ${props => props.boxShadow && btnColors[props.bsStyle].boxShadowColor
    ? `24px 12px 30px 0 ${hexRgba(btnColors[props.bsStyle].boxShadowColor, 0.23)}`
    : "none"};
  &:hover,
  &:active {
    border-color: ${props => btnColors[props.bsStyle].borderColor};
    color: ${props => btnColors[props.bsStyle].fontHoverColor};
    outline: 0;
  }

  &:disabled {
    cursor: not-allowed;
    border: ${props => `1px solid ${btnColors[props.bsStyle].disabledColor}`};
    background-color: ${props => btnColors[props.bsStyle].disabledColor};
  }

  &:disabled:hover {
    border: ${props => `1px solid ${btnColors[props.bsStyle].disabledColor}`};
    background-color: ${props => btnColors[props.bsStyle].disabledColor};
    color: ${props => btnColors[props.bsStyle].fontColor};
  }
`

Button.defaultProps = {
  bsStyle: "primary",
  boxShadow: false,
  border: true,
  width: "150px",
}

export default Button
