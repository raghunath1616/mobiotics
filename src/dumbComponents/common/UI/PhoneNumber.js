import React from "react"
import Cleave from "cleave.js/react"
import CleavePhone from "cleave.js/dist/addons/cleave-phone.us"
import styled from "styled-components"

const StyledCleave = styled(Cleave)`
  border-radius: 2px;
  padding: 0 10px;
  height: 35px;
  width: 100%;
  font-size: 16px;
  border: none;
  border-top-right-radius: ${props => props.bordertoprightradius};
  border-bottom-right-radius: ${props => props.borderbottomrightradius};
  border: 1px solid #e5e6e7;
  box-sizing: border-box;
  outline: 0;
`

const PhoneNumber = (props) => {
  const {
    placeholder,
    bordertoprightradius,
    borderbottomrightradius,
    onPhoneNumberChange,
    phone,
  } = props
  return (
    <StyledCleave
      placeholder={placeholder || "xxx xxx xxxx"}
      options={{ prefix: "+1", phone: true, phoneRegionCode: "US" }}
      onChange={onPhoneNumberChange}
      value={phone}
      bordertoprightradius={bordertoprightradius}
      borderbottomrightradius={borderbottomrightradius}
      id="txtPhoneNumber"
      name="phone-number"
      required
    />
  )
}

export default PhoneNumber
