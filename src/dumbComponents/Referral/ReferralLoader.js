import React, { Component } from "react";
import Loader from "dumbComponents/common/UI/Loader";
import { UrlSearchParams } from "services/Utils";

class ReferralLoader extends Component {
  constructor(props) {
    super(props);
    if (window.self !== window.top) {
      var query = UrlSearchParams("event")
      window.frameElement.contentWindow.postMessage({ statusText: query }, "*");
    }
  }

  handleIframeSrcChange = event => {
    if (event.data.statusText == "signing_complete") {
      window.parent.location.href = APP_URL + "/referrals/document-signed";
    } else if (event.data.statusText) {
      window.parent.location.href = APP_URL + "/referrals";
    }
  };

  removeMessageEventListener = event => {
    console.log(event);
  };

  componentDidMount() {
    window.addEventListener("message", this.handleIframeSrcChange);
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.removeMessageEventListener);
  }

  render() {
    return <Loader />;
  }
}

export default ReferralLoader;
