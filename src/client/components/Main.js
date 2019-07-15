import React from "react";
import Navbar from "./layout/Navbar.js";
import logo from "../public/images/hgimage.png";

export default function Main() {
  return (
    <div className="pagemargin">
      <Navbar />

      <div className="hpsection">
        <img src={logo} alt="logo" />
      </div>

      <div className="hpsection">
        <h1> Our Range </h1>
      </div>

      <div className="hpsection">
        <h1> Find Us </h1>
      </div>

      <div className="hpsection">
        <h1> Specials </h1>
      </div>

      <div className="hpsection">
        <h1> Get In Touch </h1>
      </div>
    </div>
  );
}
