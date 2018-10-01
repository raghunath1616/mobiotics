const envConstants = {
  API_URL: "https://api1.agentdesks.com/v1.0/",
  API_V2_URL: "https://api1.agentdesks.com/v2.0/",
  NETWORK_URL: "http://network.radiusagent.com/#/",
  RETURN_NETWORK_URL: "http://network.radiusagent.com",
  RADIUS_URL: "https://www.radiusagent.com",
  SSO_URL: "http://beta.crs.com/saml/ssoservice.aspx",
  CRM_URL: "https://web.radiusagent.com/#/",
  APP_URL: "https://app.radiusagent.com",
  PROFILE_URL: "http://profile.radiusagent.com/#/",
  PROFILE_COMPARE_URL: "www.agentdesks.com",
  PROFILE_CONVERSION_URL: "profile.radiusagent.com/#",
  COOKIE_HOST: ".radiusagent.com",

  GOOGLE_CLIENTID:
    "216881492761-u6d4n2k29k26jhk8l90iqaobujvu18ro.apps.googleusercontent.com",
  GOOGLE_APIKEY: "AIzaSyCQx1Vvz8-sWvztTOLe-IpNIo40IZrp8gE",

  //Unused urls
  API_V3_URL: "https://api1.agentdesks.com/v3.0/",
  BASE_URL: "https://api1.radiusagent.com",
  WEB_URL: "https://www.radiusagent.com/"
};

//DefinePlugin of Webpack needs stringified values, so that's why this process
(() => {
  Object.keys(envConstants).map(item => {
    envConstants[item] = JSON.stringify(envConstants[item]);
  });
})();

module.exports = envConstants;
