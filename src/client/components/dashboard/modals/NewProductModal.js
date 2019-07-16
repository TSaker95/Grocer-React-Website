import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

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

    // Pause for a second so the user thinks that computer is 'thinking' - good UX/UI
    setTimeout(props.closeModal, 1400);
  };

  return (
    <Modal
      isOpen={props.isOpen}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
    >
      <div className="edit-product-modal modal">
        <form className="product-edit" onSubmit={addProduct}>
          <label>
            Product name
            <input
              name="name"
              ref={nameRef}
              type="text"
              placeholder="Product name"
            />
          </label>
          <input name="price" ref={priceRef} type="text" placeholder="Price" />
          <textarea
            name="desc"
            ref={descRef}
            type="text"
            placeholder="Product description"
          />
          <button type="submit">+ Add product</button>
        </form>

        <button onClick={props.closeModal}>Close</button>
      </div>
    </Modal>
  );
}
