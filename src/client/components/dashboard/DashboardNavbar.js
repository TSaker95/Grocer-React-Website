import React from "react";
import { Link, Redirect } from "react-router-dom";
import { state, setState } from "../AuthHandler";

export default function DashboardNavbar(props) {
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    setState({ isLoggedIn: localStorage.getItem("isLoggedIn") });
    // props.props.history.push("/login");
    <Redirect to="/login" />;
  };

  return (
    <nav className="dashboard-nav">
      <h2>LOGO</h2>
      <div className="dashboard-nav-links">
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/specials" className="nav-link">
          Specials
        </Link>
        <Link to="/" className="nav-link" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </nav>
  );
}
