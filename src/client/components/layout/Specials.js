import React from "react";
import Specialdisplay from "./specialdisplay";

export default function Specials() {
  return (
    <div>
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
          <Specialdisplay />
        </div>
        <div className="SectionBimg">
          <Specialdisplay />
        </div>
        <div className="SectionBimg">
          <Specialdisplay />
        </div>
        <div className="SectionBimg">
          <Specialdisplay />
        </div>
        <div className="SectionBimg">
          <Specialdisplay />
        </div>
        <div className="SectionBimg">
          <Specialdisplay />
        </div>
      </div>
    </div>
  );
}
