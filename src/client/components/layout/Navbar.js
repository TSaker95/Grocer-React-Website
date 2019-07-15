import React from "react";
import logo from "../../public/images/hillsdongrocer_logo.png";

export default function Navbar() {
  return (
    <div>
      <ul className="nav1">
        <li class="navtext">
          <a href="#">
            Our Range <h1> </h1>
          </a>
        </li>
        <li class="navtext">
          <a href="#">
            Find Us <h1> </h1>
          </a>
        </li>

        <li>
          <img src={logo} alt="logo" />
        </li>

        <li class="navtext">
          <a href="#">
            Specials<h1> </h1>
          </a>
        </li>
        <li class="navtext">
          <a href="#">
            Get In Touch<h1> </h1>
          </a>
        </li>
      </ul>
    </div>
  );
}
