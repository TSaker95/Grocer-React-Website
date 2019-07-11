import React from "react";
import SpecialsItem from "./SpecialsItem";

export default function SpecialsList(props) {
  return (
    <div className="specials-container">
      <h3>Specials</h3>
      <div className="specials-list">
        <ul>
          {props.specials.map(special => {
            return <SpecialsItem key={special.productId} item={special} />;
          })}
        </ul>
      </div>
    </div>
  );
}
