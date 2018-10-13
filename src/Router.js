import React from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "dumbComponents/common/Layout"
import UserLogin from "dumbComponents/Forms"
import withOnboarding from "hoc/withOnboarding"
import ContactDetails from "dumbComponents/Forms/ContactDetails"
import UserDetails from "dumbComponents/Forms/UserDetails"

const Router = () => (
  <Layout>
    <Switch>
      <Route path="/" component={withOnboarding(UserLogin)} exact />
      <Route path="/contact-details" component={withOnboarding(ContactDetails)} />
      <Route path="/user-details" component={withOnboarding(UserDetails)} />
    </Switch>
  </Layout>
)

export default Router
