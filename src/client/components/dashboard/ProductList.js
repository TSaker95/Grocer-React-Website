import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  return (
    <div className="products-container">
      <h3>Products ({props.products.length})</h3>
      <div className="products-list">
        <table className="products-table table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Last sale</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.products.map(product => (
              <ProductItem item={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
