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
            <a href="#">
              Our Range <h1> </h1>
            </a>
          </li>
          <li className="navtext">
            <a href="#">
              Find Us <h1> </h1>
            </a>
          </li>

          <li className="navtext">
            <a href="#">
              Specials<h1> </h1>
            </a>
          </li>
          <li className="navtext">
            <a href="#">
              Get In Touch<h1> </h1>
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
