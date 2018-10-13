import React, { Component } from "react"
import Container from "container/Forms"
import Textbox from "dumbComponents/common/UI/Textbox"
import Select from "dumbComponents/common/UI/Select"
import { Form, FormGroup, FormLabel } from "dumbComponents/common/UI/FormElements"
import Button from "dumbComponents/common/UI/Button"
import { Flex } from "@rebass/grid"

const gender = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
]

class ContactDetails extends Component {
  storeUpdatedInfo = (key, value) => {
    const { storeUserInfo } = this.props
    storeUserInfo({ key, value })
  }

  goToUserDetails = (event) => {
    event.preventDefault()
    const {
      history: { push },
    } = this.props
    push("/user-details")
  }

  goBackToLogin = (event) => {
    event.preventDefault()
    const {
      history: { push },
    } = this.props
    push("/")
  }

  render() {
    return (
      <Form onSubmit={this.goToUserDetails}>
        <FormGroup>
          <FormLabel>Date of Birth</FormLabel>
          <Textbox type="date" onChange={event => this.storeUpdatedInfo("birthday", event.target.value)} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>Mobile</FormLabel>
          <Textbox type="phone" onChange={event => this.storeUpdatedInfo("phone", event.target.value)} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>Gender</FormLabel>
          <Select options={gender} onChange={event => this.storeUpdatedInfo("gender", event.value)} required />
        </FormGroup>
        <Flex alignItems="center" justifyContent="space-between">
          <Button type="button" bsStyle="secondary" onClick={this.goBackToLogin}>
            Back
          </Button>
          <Button type="submit">Next</Button>
        </Flex>
      </Form>
    )
  }
}

export default Container(ContactDetails)
