import React from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "dumbComponents/common/Layout"
import UserLogin from "dumbComponents/Forms"
import withOnboarding from "hoc/withOnboarding"
import ContactDetails from "dumbComponents/Forms/ContactDetails"
import UserDetails from "dumbComponents/Forms/UserDetails"
import { ToastContainer, toast } from "react-toastify"

const Router = () => (
  <Layout>
    <Switch>
      <Route path="/" component={withOnboarding(UserLogin)} exact />
      <Route path="/contact-details" component={withOnboarding(ContactDetails)} />
      <Route path="/user-details" component={withOnboarding(UserDetails)} />
    </Switch>
    {/*Main container for the toast. You can configure global
      config here. Check API here: https://github.com/fkhadra/react-toastify#api */}
    <ToastContainer position={toast.POSITION.TOP_RIGHT} />
  </Layout>
)

export default Router
