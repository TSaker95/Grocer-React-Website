import React, { Component } from "react";
import logo from "../../public/images/hillsdongrocer_logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <ul className="foot1">
            <li className="footertext">
              <a href="#">Product</a>
            </li>
            <li className="footertext">
              <a href="#">Features</a>
            </li>

            <li className="footertext">
              <a href="#">Resources</a>
            </li>
            <li className="footertext">
              <a href="#">About</a>
            </li>
            <li className="footertext">
              <a href="#">Blog</a>
            </li>
            <li className="footertext">
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="hpsection">
          <div className="footerstuff">
            <p id="P1">&copy; Hillsdon Grocer 2019 </p>
          </div>
          <div className="footerstuff">
            <li className="footlogo">
              <img src={logo} alt="logo" />
            </li>
          </div>
          <div className="footerstuff"> Made by RMT </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
