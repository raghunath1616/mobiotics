import cookie from "react-cookies";
import CookiesStorage from "./CookieStorage";

const getUserBrowser = () => {
  let returnObject = {
    browser: "Undefined Navigator",
    majorVersion: 1.0,
    fullVersion: 1.0,
    userAgent: "undefined navigator"
  };

  if (navigator) {
    let nAgt = navigator.userAgent;
    let browserName = navigator.appName;
    let fullVersion = "" + parseFloat(navigator.appVersion);
    let majorVersion = parseInt(navigator.appVersion, 10);
    let verOffset;
    // In Opera 15+, the true version is after "OPR/"
    if ((verOffset = nAgt.indexOf("OPR/")) !== -1) {
      browserName = "Opera";
      fullVersion = nAgt.substring(verOffset + 4);
    }
    // In older Opera, the true version is after "Opera" or after "Version"
    else if ((verOffset = nAgt.indexOf("Opera")) !== -1) {
      browserName = "Opera";
      fullVersion = nAgt.substring(verOffset + 6);
      if ((verOffset = nAgt.indexOf("Version")) !== -1)
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("MSIE")) !== -1) {
      browserName = "Microsoft Internet Explorer";
      fullVersion = nAgt.substring(verOffset + 5);
    }
    // In Chrome, the true version is after "Chrome"
    else if ((verOffset = nAgt.indexOf("Chrome")) !== -1) {
      browserName = "Chrome";
      fullVersion = nAgt.substring(verOffset + 7);
    }
    // In Safari, the true version is after "Safari" or after "Version"
    else if ((verOffset = nAgt.indexOf("Safari")) !== -1) {
      browserName = "Safari";
      fullVersion = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf("Version")) !== -1)
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In Firefox, the true version is after "Firefox"
    else if ((verOffset = nAgt.indexOf("Firefox")) !== -1) {
      browserName = "Firefox";
      fullVersion = nAgt.substring(verOffset + 8);
    } else {
      browserName = "Chrome";
      majorVersion = "5";
    }

    returnObject = {
      browser: browserName,
      majorVersion: majorVersion,
      fullVersion: fullVersion,
      userAgent: nAgt
    };
  }
  return returnObject;
};

const generateDeviceId = () => {
  return Math.floor(Math.random() * 100000000000000 + 1);
};

const getDeviceId = () => {
  let deviceId = cookie.load("deviceId");
  if (!deviceId) {
    deviceId = generateDeviceId();
    CookiesStorage.save("deviceId", deviceId);
  }
  return deviceId;
};

const generateXUserAgentKey = (browserAgent, version, deviceId) => {
  return (
    browserAgent.userAgent +
    " ADUA(" +
    browserAgent.browser +
    "|WebKit|WebCRM|" +
    version +
    "|web|" +
    browserAgent.majorVersion +
    "|false|" +
    deviceId +
    ")"
  );
};

export default function getXUserAgentKey() {
 const version = 1.0;
  const browserAgent = getUserBrowser();
  const deviceId = getDeviceId();

  return generateXUserAgentKey(browserAgent, version, deviceId);
};

// const init = () => {
//   if (typeof cookie.load("secureId") !== "undefined") {
//     axios.defaults.headers.common["secure-id"] = cookie.load("secureId");
//   }
//
//   const version = 1.0;
//   const browserAgent = getUserBrowser();
//   const deviceId = getDeviceId();
//
//   const userAgent = generateXUserAgentKey(browserAgent, version, deviceId);
//
//   axios.defaults.headers.common["X-User-Agent"] = userAgent;
//   console.log(userAgent);
// };
//
// export default init;
