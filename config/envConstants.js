const envConstants = {
  HOME_URL: "https://mobiotics.com",
};

//DefinePlugin of Webpack needs stringified values, so that's why this process
(() => {
  Object.keys(envConstants).map((item) => {
    envConstants[item] = JSON.stringify(envConstants[item])
  })
})()

module.exports = envConstants

