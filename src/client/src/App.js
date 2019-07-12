import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Main} />
        <Route path="/admin" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
