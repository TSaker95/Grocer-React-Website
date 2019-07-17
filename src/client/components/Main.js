import React from "react";
import Navbar from "./layout/Navbar.js";
import logo from "../public/images/hgimage.png";
import Footer from "./layout/footer.js";

export default function Main() {
  return (
    <div className="pagemargin">
      <Navbar />

      <div className="hpsection">
        <img src={logo} alt="logo" />
      </div>

      <div className="hpsectiond">
        <h1> Our Range </h1>
      </div>

      <div>
        <div className="SectionA">
          <p className="SectionAtext">
            Hillsdon Grocer in Taringa stocks a wide range of produce and
            groceries as well as take home dinners, deli meats, baked goods and
            much more. Locally sourced and only the best products
          </p>
        </div>
        <div className="SectionA">
          <p className="SectionAlist">Groceries</p>
          <p className="SectionAlist">Fresh produce</p>
          <p className="SectionAlist">Delicatessen</p>
          <p className="SectionAlist">Artisan products</p>
          <p className="SectionAlist">Bread</p>
          <p className="SectionAlist">Flowers</p>
          <p className="SectionAlist">Newspapers</p>
          <p className="SectionAlist">Hampers</p>
          <p className="SectionAlist">Dry cleaning</p>
          <p className="SectionAlist">Much more</p>
        </div>
      </div>

      {/* <div className="hpsection"> */}
      <div className="SectionAimg">
        <p> Image here </p>
      </div>
      <div className="SectionAimg">
        <p> Image here </p>
      </div>
      <div className="SectionAimg">
        <p> Image here </p>
      </div>
      <div className="SectionAimg">
        <p> Image here </p>
      </div>
      {/* </div> */}

      <div className="hpsectiond">
        <h1> Specials </h1>
      </div>

      <div>
        <div className="SectionA">
          <p> Text here </p>
        </div>
        <div className="SectionA">
          <p> Text here </p>
        </div>
      </div>

      <div>
        <div className="SectionBimg">
          <p> Image here </p>
        </div>
        <div className="SectionBimg">
          <p> Image here </p>
        </div>
        <div className="SectionBimg">
          <p> Image here </p>
        </div>
        <div className="SectionBimg">
          <p> Image here </p>
        </div>
        <div className="SectionBimg">
          <p> Image here </p>
        </div>
        <div className="SectionBimg">
          <p> Image here </p>
        </div>
      </div>

      <div className="hpsectiond">
        <h1> Find Us / Get In Touch </h1>
      </div>

      <div className="hpsection">
        <div className="SectionA">
          <h2 className="h2-1"> Our Address </h2>
          <p className="SectionBtext"> 30 Hillsdon Road </p>
          <p className="SectionBtext"> Taringa, QLD 4068 </p>
        </div>
        <div className="SectionA">
          <h2 className="h2-1"> Opening Hours</h2>
          <p className="SectionBtext"> Mon - Fri: 7am - 5pm </p>
          <p className="SectionBtext"> Sat - Sun: 8am - 3pm </p>

          <h2 className="h2-1"> Get In Touch</h2>
          <p className="SectionBtext"> example@email.com</p>
          <p className="SectionBtext"> (05) 9182 7364 </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
