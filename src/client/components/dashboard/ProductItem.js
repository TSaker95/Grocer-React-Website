import React from "react";
import placeholder from "../../public/images/placeholder.png";

export default function ProductItem(props) {
  return (
    <div className="products-item list-row">
      <div className="product-image">
        <img src={placeholder} alt="placeholder" />
      </div>
      <p>{props.item.name}</p>
      <p>$5.50</p>
      <p>23/02/1903</p>
      <p>Actions go here</p>
    </div>
  );
}
