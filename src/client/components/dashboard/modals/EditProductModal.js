import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

Modal.defaultStyles = {
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
    width: "600px",
    height: "600px",
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

export default function EditProductModal(props) {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const descRef = React.createRef();

  const addProduct = e => {
    // Stop the form from submitting
    e.preventDefault();

    const product = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      desc: descRef.current.value
    };

    props.addProduct(product);
    // Refresh the form
    // e.currentTarget.reset();
  };

  return (
    <Modal
      isOpen={props.isOpen}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
    >
      <div className="edit-product-modal modal">
        <h4>{props.item.name}</h4>
        <form className="product-edit" onSubmit={addProduct}>
          <label>
            {" "}
            Product name
            <input
              name="name"
              ref={nameRef}
              type="text"
              placeholder={props.item.name}
            />
          </label>
          <input name="price" ref={priceRef} type="text" placeholder="Price" />
          <textarea
            name="desc"
            ref={descRef}
            type="text"
            placeholder={props.item.description}
          />
          <button type="submit">+ Add fish</button>
        </form>

        <button onClick={props.closeModal}>Close {props.item.name}</button>
      </div>
    </Modal>
  );
}
