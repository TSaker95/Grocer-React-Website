import React, { useEffect, useState } from "react";
import { api } from "../../api";

export default function SpecialsItem(props) {
  const [product, setProduct] = useState({});
  const findItemById = itemId => {
    // Find the item from the database
  };

  return (
    // const item = findItemById()
    <div className="specials-item list-row">
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
      <p>Sale price</p>
      <p>{props.item.startDate.toLocaleString()}</p>
      <p>{props.item.endDate.toLocaleString()}</p>
      <p>Actions go here</p>
    </div>
  );
}
