import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import NewProductModal from "./modals/NewProductModal.js";

export default function ProductList(props) {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
  const handleOpenNewProductModal = () => {
    setIsNewProductModalOpen(true);
  };

  const handleCloseNewProductModal = () => {
    setIsNewProductModalOpen(false);
  };
  return (
    <div className="products-container">
      <div className="section-header products-header">
        <h3>Products ({props.products.length})</h3>
        <button
          className="add-product-button section-add-button"
          onClick={handleOpenNewProductModal}
        >
          Add product +
        </button>
      </div>
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

      <NewProductModal
        isOpen={isNewProductModalOpen}
        closeModal={handleCloseNewProductModal}
      />
    </div>
  );
}
