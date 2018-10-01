import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Container from "container/Referral"
import UnsignedReferral from "dumbComponents/Referral/Unsigned";
import SignContract from "dumbComponents/Referral/SignContract";
import DocumentSigned from "dumbComponents/Referral/DocumentSigned";
import SubmitReferral from "dumbComponents/Referral/SignedReferral";
import ReferralLoader from "dumbComponents/Referral/ReferralLoader";
import { faDivide } from "@fortawesome/free-solid-svg-icons";
import OutboundReferral from "./Outbound"


class Referral extends Component {
  state = {}

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/referrals/unsigned" component={UnsignedReferral} />
          <Route path="/referrals/sign-contract" component={SignContract} />
          <Route path="/referrals/document-signed" component={DocumentSigned} />
          <Route path="/referrals/submit-first-referral" component={SubmitReferral} />
          <Route path="/referrals/referral-loader" component={ReferralLoader} />
          <Route path="/referrals/outbound" component={OutboundReferral} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default Container(Referral)
