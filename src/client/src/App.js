import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/styles.css";

import Navbar from "./components/layout/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="container">
        <br />
        <Route path="/" exact component={Main} />
        <Route path="/admin" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
