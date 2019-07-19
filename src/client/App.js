import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import "./styles/styles.css";

import AuthHandlerHOC, { state } from "./components/AuthHandler";
import Navbar from "./components/layout/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        state.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
}

const Routes = () => (
  <Router>
    <React.Fragment>
      <br />
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      {/* <Route path="/dashboard" component={Dashboard} /> */}
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </React.Fragment>
  </Router>
);

const MainComponent = AuthHandlerHOC(Routes);

function App() {
  return <MainComponent />;
}

export default App;
