import React from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import "babel-polyfill"
import { Provider } from "react-redux"
import "globalStyle"
import { store } from "store/config"
import Router from "./Router"
const theme = {
  primaryColor: "#11adf3",
}

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

export default App
