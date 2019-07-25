import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ProductItem from "./ProductItem";
import NewProductModal from "./modals/NewProductModal.js";
import EmptyList from "./EmptyList";

const ProductList = props => {
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
          className="btn btn-large btn-primary"
          onClick={handleOpenNewProductModal}
        >
          + Add product
        </button>
      </div>
      <div className="products-list items-list">
        <div className="headings products-headings">
          <h5>Name</h5>
          <h5>Description</h5>
          <h5>Price</h5>
          <h5>On sale</h5>
          <h5>Actions</h5>
        </div>
        <div className="list-content products-list-content">
          {/* Conditionally render if there is or isn't products */}
          {props.products.length ? (
            props.products.map(product => (
              <ProductItem
                item={product}
                key={product._id}
                deleteProduct={props.deleteProduct}
                updateProduct={props.updateProduct}
                // Check the specials to see if product is currently on sale
                onSale={
                  props.specials.find(
                    special => special.productId === product._id
                  )
                    ? true
                    : false
                }
              />
            ))
          ) : (
            <EmptyList type="products" />
          )}
        </div>
      </div>

      <NewProductModal
        isOpen={isNewProductModalOpen}
        closeModal={handleCloseNewProductModal}
        addProduct={props.addProduct}
      />
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired
};

export default ProductList;
