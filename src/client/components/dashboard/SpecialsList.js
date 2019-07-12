import React from "react";
import SpecialsItem from "./SpecialsItem";

export default function SpecialsList(props) {
  return (
    <div className="products-container">
      <h3>Specials ({props.specials.length})</h3>
      <div className="specials-list items-list">
        <div className="headings specials-headings">
          <h5>Name</h5>
          <h5>Normal price</h5>
          <h5>Sale price</h5>
          <h5>Start date</h5>
          <h5>End date</h5>
          <h5>Actions</h5>
        </div>
        <div className="list-content specials-list-content">
          {props.specials.map(special => (
            <SpecialsItem item={special} />
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="products-container">
  <h3>Products ({props.products.length})</h3>
  <div className="products-list items-list">
    <div className="headings products-headings">
      <h5>Image</h5>
      <h5>Name</h5>
      <h5>Price</h5>
      <h5>Last sale</h5>
      <h5>Actions</h5>
    </div>
    <div className="list-content products-list-content">
      {props.products.map(product => (
        <ProductItem item={product} />
      ))}
    </div>
  </div>
</div>; */
}
