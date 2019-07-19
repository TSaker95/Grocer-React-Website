import React from "react";
import Navbar from "./layout/Navbar.js";
import Footer from "./layout/footer.js";
import Range from "./layout/range.js";
import Specials from "./layout/specials.js";
import Findus from "./layout/findus.js";
import Hgimage from "./layout/hgimage.js";

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
