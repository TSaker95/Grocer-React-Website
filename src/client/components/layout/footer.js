import React, { Component } from "react";
import logo from "../../public/images/hillsdongrocer_logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <ul className="foot1">
            <li className="footertext">
              <a href="#">
                <p> Product </p>
              </a>
            </li>
            <li className="footertext">
              <a href="#">
                <p>Features </p>
              </a>
            </li>

            <li className="footertext">
              <a href="#">
                <p>Resources</p>
              </a>
            </li>
            <li className="footertext">
              <a href="#">
                <p> About</p>
              </a>
            </li>
            <li className="footertext">
              <a href="#">
                <p>Blog </p>
              </a>
            </li>
            <li className="footertext">
              <a href="#">
                <p>Support </p>
              </a>
            </li>
          </ul>
        </div>

        <div className="hpsection">
          <div className="footerstuff">
            <p id="P1">&copy; Hillsdon Grocer 2019 </p>
          </div>
          <div className="footerstuff">
            <a href="#top">
              <li className="footlogo">
                <img src={logo} alt="logo" />
              </li>
            </a>
          </div>
          <div className="footerstuff">
            Made by RMT <br /> <br />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
