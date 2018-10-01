import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import "babel-polyfill"
import { Provider } from "react-redux"
import axios from "axios"
import "globalStyle"
import { store } from "store/config"
import Router from "./Router"
import "services/axiosConfig"
require("style-loader!css-loader!react-toastify/dist/ReactToastify.css")
const theme = {
  primaryColor: "#11adf3",
}

class App extends Component {
  componentDidMount() {
    const axiosCopy = axios.create()
    axiosCopy.interceptors.request.use((config) => {
      config.headers.common = {}
      return config
    })
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
