import React from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "dumbComponents/common/Layout"
import Home from "dumbComponents/Home"
import SearchResults from "dumbComponents/SearchResults";

const Router = () => (
  <Layout>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/search-agents" component={SearchResults} />
    </Switch>
    {/*Main container for the toast. You can configure global
      config here. Check API here: https://github.com/fkhadra/react-toastify#api */}
  </Layout>
);

export default Router
