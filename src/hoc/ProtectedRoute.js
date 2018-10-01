import React from "react"
import { Route, Redirect } from "react-router-dom"
import { dispatch } from "store/config"

function isAuthenticated() {
  // Magic will happen here...
  dispatch({
    type: "TEST",
    data: "test data",
  })
  return false
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component{...props} />
      ) : (
        <Redirect
          to="/login"
        />
      )
    }
  />
)

export default ProtectedRoute
