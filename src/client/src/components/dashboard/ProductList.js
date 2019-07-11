import React from "react";

export default function ProductList(props) {
  console.log(props);
  return (
    <div>
      <h3>Products</h3>
      {props.products.length && <p>wow</p>}
    </div>
  );
}
