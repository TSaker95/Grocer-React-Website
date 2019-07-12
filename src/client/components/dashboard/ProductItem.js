import React from "react";
import placeholder from "../../public/images/placeholder.png";

export default function ProductItem(props) {
  console.log(props);
  return (
    <tr className="products-item">
      <td>
        <img src={placeholder} alt="placeholder" />
      </td>
      <td>{props.item.name}</td>
      <td>Price</td>
      <td>Last sale</td>
      <td>Actions go here</td>
    </tr>
  );
}
