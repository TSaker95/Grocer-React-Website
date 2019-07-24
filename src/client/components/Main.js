import React from "react";
import Navbar from "./layout/Navbar.js";
import Footer from "./layout/footer.js";
import Range from "./layout/Range.js";
import Specials from "./layout/Specials.js";
import Findus from "./layout/Findus.js";
import Hgimage from "./layout/Hgimage.js";
import "../styles/homepage.css";

export default function Main() {
  return (
    <div className="pagemargin">
      <Navbar />
      <Hgimage />
      <a id="Range">
        <Range />
      </a>
      <a id="Specials">
        <Specials />
      </a>
      <a id="Findus">
        <Findus />
      </a>
      <Footer />
    </div>
  );
}
