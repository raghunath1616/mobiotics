import axios from "axios"
import getXUserAgentKey from "./axiosUtils"
import CookiesStorage from "./CookieStorage"

const headerXAgentKey = getXUserAgentKey()

axios.interceptors.request.use(
  (config) => {
    //console.log("Axios Request Config: ", config);
    config.headers.common["X-User-Agent"] = headerXAgentKey

    // const secureId = CookiesStorage.load("secureId")
    // if (secureId) {
    //   config.headers.common["secure-id"] = secureId
    // }

    return config
  },
  (error) => {
    console.log("API REQ FAILURE", error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => response,
  (error) => {
    console.log("API RES FAILURE", JSON.stringify(error.response))
    return Promise.reject(error)
  }
)
