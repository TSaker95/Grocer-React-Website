import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function NewspecialModal(props) {
  const productRef = React.createRef();
  const startDateRef = React.createRef();
  const endDateRef = React.createRef();

  const addSpecial = e => {
    // Stop the form from submitting
    e.preventDefault();

    // Construct the special
    const special = {
      productId: productRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value
    };

    props.addSpecial(special);
    props.closeModal();
  };

  return (
    <Modal
      isOpen={props.isOpen}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
    >
      <div className="edit-special-modal modal">
        <form className="special-edit" onSubmit={addSpecial}>
          <label>
            Product
            <select name="product" required ref={productRef}>
              {props.products.map(product => (
                <option value={product._id} key={product._id}>
                  {product.name}
                </option>
              ))}
            </select>
          </label>
          <input name="start-date" ref={startDateRef} type="date" />
          <input name="end-date" ref={endDateRef} type="date" />
          <button type="submit">+ Add special</button>
        </form>

        <button onClick={props.closeModal}>Close</button>
      </div>
    </Modal>
  );
}
