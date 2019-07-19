import React from "react";
import { Link } from "react-router-dom";

export default function DashboardNavbar() {
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
        <Link to="/" className="nav-link">
          Logout
        </Link>
      </div>
    </nav>
  );
}
