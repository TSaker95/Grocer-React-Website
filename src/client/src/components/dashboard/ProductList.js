import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  return (
    <div className="products-container">
      <h3>Products</h3>
      <div className="products-list">
        {props.products.map(product => {
          return <ProductItem key={product.id} />;
        })}
      </div>
    </div>
  );
}
