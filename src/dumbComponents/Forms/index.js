import React, { Component } from "react"
import Container from "container/Forms"
import Textbox from "dumbComponents/common/UI/Textbox"
import { Form, FormGroup, FormLabel } from "dumbComponents/common/UI/FormElements"
import Button from "dumbComponents/common/UI/Button"

class UserLogin extends Component {
  goToContactDetails = (event) => {
    event.preventDefault()
    const {
      history: { push },
    } = this.props
    push("/contact-details")
  }

  storeUpdatedInfo = (key, value) => {
    const { storeUserInfo } = this.props
    storeUserInfo({ key, value })
  }

  render() {
    const {
      user: { name, email, password },
    } = this.props
    return (
      <Form onSubmit={this.goToContactDetails}>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <Textbox
            type="text"
            id="name"
            value={name}
            onChange={event => this.storeUpdatedInfo("name", event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <Textbox
            type="email"
            value={email}
            id="email"
            onChange={event => this.storeUpdatedInfo("email", event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <Textbox
            type="password"
            value={password}
            id="password"
            onChange={event => this.storeUpdatedInfo("password", event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup align="center">
          <Button type="submit">Next</Button>
        </FormGroup>
      </Form>
    )
  }
}

export default Container(UserLogin)
