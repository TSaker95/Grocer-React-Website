import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h3>Page not found.</h3>
      <div className="return-home">
        <Link to="/">Return home</Link>
        <p>→</p>
      </div>
    </div>
  );
}
