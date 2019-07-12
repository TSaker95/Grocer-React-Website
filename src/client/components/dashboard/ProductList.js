import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  return (
    <div className="products-container">
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
            <ProductItem item={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
