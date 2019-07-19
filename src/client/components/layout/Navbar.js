import React from "react";
import logo from "../../public/images/hillsdongrocer_logo.png";

export default function Navbar() {
  return (
    <React.Fragment>
      <div>
        <li className="navlogo">
          <img src={logo} alt="logo" />
        </li>
      </div>
      <div>
        <ul className="nav1">
          <li className="navtext">
            <a href="#Range">
              <p> Our Range </p>
            </a>
          </li>
          <li className="navtext">
            <a href="#Findus">
              <p> Find Us</p>
            </a>
          </li>

          <li className="navtext">
            <a href="#Specials">
              <p>Specials </p>
            </a>
          </li>
          <li className="navtext">
            <a href="#Findus">
              <p> Get In Touch </p>
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
