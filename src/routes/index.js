import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from "./../components/Landing/Landing"
import Signup from "./../components/Auth/Signup/Signup"
import Login from "./../components/Auth/Login/Login"
import PrivateRoutes from "./privateRoutes"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/landing" component={Landing} />
        <Route path="/register" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={PrivateRoutes} />
      </Switch>
    </Router>
  )
}

export default Routes
