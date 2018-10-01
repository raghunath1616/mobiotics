const envConstants = {
  API_URL: "https://staging.agentdesks.com/v1.0/",
  API_V2_URL: "https://staging.agentdesks.com/v2.0/",
  NETWORK_URL: "http://localhost:3001/#/",
  RETURN_NETWORK_URL: "http://localhost:3001",
  RADIUS_URL: "http://localhost:3000/",
  SSO_URL: "http://beta.crs.com/saml/ssoservice.aspx",
  CRM_URL: "http://localhost:9000/temp/#/",
  PROFILE_URL: "http://localhost:9001/temp/#/",
  APP_URL: "http://localhost:3000",
  PROFILE_COMPARE_URL: "webstaging.agentdesks.com",
  PROFILE_CONVERSION_URL: "stagingprofile.radiusagent.com/#",
  COOKIE_HOST: "localhost",

  GOOGLE_CLIENTID:
    "216881492761-u6d4n2k29k26jhk8l90iqaobujvu18ro.apps.googleusercontent.com",
  GOOGLE_APIKEY: "AIzaSyCQx1Vvz8-sWvztTOLe-IpNIo40IZrp8gE",

  //Unused urls
  API_V3_URL: "https://staging.agentdesks.com/v3.0/",
  BASE_URL: "https://staging.agentdesks.com",
  WEB_URL: "http://www.radiusagent.com/"
};

//DefinePlugin of Webpack needs stringified values, so that's why this process
(() => {
  Object.keys(envConstants).map(item => {
    envConstants[item] = JSON.stringify(envConstants[item]);
  });
})();

module.exports = envConstants;
