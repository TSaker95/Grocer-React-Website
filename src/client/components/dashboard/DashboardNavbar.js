import React from "react";
import { Link, Redirect } from "react-router-dom";
import { state, setState } from "../AuthHandler";
import Logo from "../../public/images/hillsdongrocer_logo.png";

export default function DashboardNavbar(props) {
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    setState({ isLoggedIn: localStorage.getItem("isLoggedIn") });
    <Redirect to="/login" />;
  };

  return (
    <nav className="dashboard-nav">
      <img className="dash-nav-logo" src={Logo} alt="Logo" />
      <div className="dashboard-nav-links">
        <Link to="/" className="nav-link" onClick={handleLogout}>
          <button className="btn btn-alt">Logout</button>
        </Link>
      </div>
    </nav>
  );
}
