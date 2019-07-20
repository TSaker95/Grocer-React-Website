import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

// New style definitions required for react-modal
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    border: "1px solid #ccc",
    borderTop: "6px solid #40A4F4",
    width: "350px",
    height: "420px",
    margin: "auto",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};

export default function NewProductModal(props) {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const descRef = React.createRef();

  const addProduct = e => {
    // Stop the form from submitting
    e.preventDefault();

    const product = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      description: descRef.current.value
    };

    props.addProduct(product);
    props.closeModal();
  };

  return (
    <Modal
      isOpen={props.isOpen}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      style={styles}
    >
      <div className="new-item-modal">
        <div className="new-item-title">
          <h4>Add product</h4>
          <p onClick={props.closeModal}>X</p>
        </div>
        <form onSubmit={addProduct}>
          <ul className="new-item-form">
            <li>
              <label htmlFor="name">Product name</label>
              <input
                name="name"
                ref={nameRef}
                type="text"
                placeholder="Product name"
              />
            </li>
            <li>
              <label htmlFor="price">Price</label>
              <input
                name="price"
                ref={priceRef}
                type="text"
                placeholder="Price"
              />
            </li>
            <li>
              <label htmlFor="desc">Description</label>
              <textarea
                name="desc"
                ref={descRef}
                type="text"
                placeholder="Product description"
              />
            </li>
            <li>
              <p onClick={props.closeModal} className="cancel-modal-action">
                Cancel
              </p>
              <button className="btn btn-primary" type="submit">
                Add product
              </button>
            </li>
          </ul>
        </form>
      </div>
    </Modal>
  );
}
