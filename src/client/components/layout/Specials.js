import React, { useState, useEffect } from "react";
import Specialdisplay from "./specialdisplay";
import { api } from "../../api";

export default function Specials() {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    api
      .get("/api/specials")
      .then(res => setSpecials([...res.data]))
      .catch(err => console.log(`Error: ${err}`));
  }, []);

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
