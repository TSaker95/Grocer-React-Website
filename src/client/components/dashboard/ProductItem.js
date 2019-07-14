import React from "react";
import placeholder from "../../public/images/placeholder.png";
import editIcon from "../../public/images/edit.svg";
import deleteIcon from "../../public/images/delete.svg";

export default function ProductItem(props) {
  return (
    <div className="products-item list-row">
      <div className="product-image">
        <img src={placeholder} alt="placeholder" />
      </div>
      <p>{props.item.name}</p>
      <p>${props.item.price}</p>
      <p>23/02/1903</p>
      <div className="icons">
        <img src={editIcon} />
        <img src={deleteIcon} />
      </div>
    </div>
  );
}
