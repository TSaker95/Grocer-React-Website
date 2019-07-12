import React from "react";

export default function SpecialsItem(props) {
  const findItemById = itemId => {
    // Find the item from the database
  };

  return (
    // const item = findItemById()
    <div className="specials-item list-row">
      <p>{props.item._id}</p>
      <p>Item normal price</p>
      <p>Item sale price</p>
      <p>23/02/1903</p>
      <p>23/02/2903</p>
      <p>Actions go here</p>
    </div>
  );
}
